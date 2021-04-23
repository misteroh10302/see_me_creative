import * as React from "react"
import { ThemeProvider } from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import { theme } from "../styled/theme"
import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundMedia from "../components/UI/backgroundMedia/backgroundMedia"
import Section from "../components/section"
import Footer from "../components/UI/footer/footer"
import uuid from "react-uuid"

const IndexPage = () => (
  <StaticQuery
    query={homepageQuery}
    render={data => {
      const {
        homepageContent,
        footer,
        footerBackground,
      } = data.contentfulHomepage
      return (
        <ThemeProvider theme={theme}>
          <Layout page="home">
            <SEO title="Home" />
            {homepageContent &&
              homepageContent.map((section, i) => {
                if (section.__typename === "ContentfulBackgroundMedia") {
                  return (
                    <BackgroundMedia
                      title={section.title}
                      fluid={section.media.fluid}
                      file={section.media.file}
                      vimeoId={section.vimeoId}
                      key={uuid()}
                    />
                  )
                } else if (section.__typename === "ContentfulSection") {
                  return (
                    <Section
                      title={section.title}
                      bgm={section.backgroundMedia}
                      content={section}
                      key={uuid()}
                    />
                  )
                }
              })}
            <Footer 
              textColor="light" 
              content={footer} 
              bgm={footerBackground} />
          </Layout>
        </ThemeProvider>
      )
    }}
  />
)

const homepageQuery = graphql`
  query MyQuery {
    contentfulHomepage {
      id
      footer {
        content {
          json
        }
        buttons {
          buttonText
          link
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
      homepageContent {
        ... on ContentfulBackgroundMedia {
          id
          vimeoId
          media {
            fluid(maxWidth: 200, maxHeight: 500) {
              ...GatsbyContentfulFluid
            }
            file {
              fileName
              contentType
            }
          }
        }
        ... on ContentfulSection {
          id
          title
          backgroundMedia {
            file {
              url
            }
          }
          content {
            ... on ContentfulButton {
              id
              buttonText
              link
            }
            ... on ContentfulTextArea {
              id
              content {
                json
              }
            }

            ... on ContentfulProjectCarousel {
              id
              projects {
                title
                tags
                backgroundMedia {
                  fluid(maxWidth: 200) {
                    ...GatsbyContentfulFluid
                  }
                  file {
                    contentType
                  }
                }
                thumbnailMedia {
                  fluid(maxWidth: 200) {
                    ...GatsbyContentfulFluid
                  }
                  file {
                    contentType
                  }
                }
              }
            }
            ... on ContentfulImageGallery {
              id
              title
              images {
                sizes {
                  src
                }
                fluid(maxWidth: 200, maxHeight: 500) {
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
export default IndexPage
