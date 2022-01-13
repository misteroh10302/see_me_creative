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
        background {
          title
          vimeoId
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
          file {
            contentType
            url
          }
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
            ... on ContentfulOfferings {
              ourOfferings {
                title
                content {
                  json
                }
              }
            }
            ... on ContentfulTextArea {
              id
              content {
                json
              }
            }
            ... on ContentfulThreeColumnGrid {
              id
              imageGallery {
                id
                title
                content {
                  id
                  json
                }
                images {
                  fluid(maxHeight: 400, maxWidth: 400, quality: 100) {
                    ...GatsbyContentfulFluid
                  }
                }
              }
            }
            ... on ContentfulImageGallery {
              id
              content {
                json
              }
              title
              images {
                fluid(maxHeight: 300, maxWidth: 300, quality: 100) {
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
          <Layout className="who-we-are-page">
            <SEO title="Who We Are" />
            {nodes && (
              <ProjectCollectionWrapper>
                <FullHeight className="full-">
                  <BackgroundMedia vimeoId={nodes[0].background.vimeoId} />
                </FullHeight>
                {whoWeAreContent &&
                  whoWeAreContent.map((section: any) => {
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
              bgm={nodes[0].footerBackground}
            />
          </Layout>
        </ThemeProvider>
      )
    }}
  />
)

export default WhoWeArePage
