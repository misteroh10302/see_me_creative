import * as React from "react"
import { ThemeProvider } from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import { theme } from "../styled/theme"
import { FullHeight, ProjectCollectionWrapper } from "../styled/layoutStyles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import uuid from "react-uuid"

import BackgroundMedia from "../components/UI/backgroundMedia/backgroundMedia"
import Section from "../components/section"
import Footer from "../components/UI/footer/footer"

const whoWeAreQuery = graphql`
  query whoWeAreQuery {
    allContentfulWhoWeArePage {
      nodes {
        title
        backgroundMedia {
          fluid {
            ...GatsbyContentfulFluid
          }
          file {
            url
            contentType
          }
        }
        footer {
          content {
            json
          }
          buttons {
            link
            buttonText
          }
        }
        footerBackground {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        whoWeAreContent {
          title
          backgroundMedia {
            file {
              url
              contentType
            }
          }
          content {
            ... on ContentfulTextArea {
              id
              content {
                json
              }
            }
            ... on ContentfulImageGallery {
              id
              content {
                json
              }
              title
              images {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const WhoWeArePage = () => (
  <StaticQuery
    query={whoWeAreQuery}
    render={data => {
      const { nodes } = data.allContentfulWhoWeArePage
      const { whoWeAreContent } = nodes[0]
      return (
        <ThemeProvider theme={theme}>
          <Layout>
            <SEO title="Who We Are" />
            {nodes && (
              <ProjectCollectionWrapper>
                <FullHeight className="full-">
                  <BackgroundMedia
                    title={nodes[0].title}
                    fluid={nodes[0].backgroundMedia.fluid}
                    file={nodes[0].backgroundMedia.file}
                  />
                </FullHeight>
                {whoWeAreContent &&
                  whoWeAreContent.map((section) => {
                    return (
                      <Section
                        key={uuid()}
                        title={section.title}
                        bgm={section.backgroundMedia}
                        content={section}
                      />
                    )
                  })}
              </ProjectCollectionWrapper>
            )}
            <Footer 
            textColor="light"
            content={nodes[0].footer} 
            bgm={nodes[0].footerBackground} />
          </Layout>
        </ThemeProvider>
      )
    }}
  />
)

export default WhoWeArePage
