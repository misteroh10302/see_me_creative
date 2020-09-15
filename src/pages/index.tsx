import * as React from "react"
import { ThemeProvider } from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import { theme } from "../styled/theme"
import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundMedia from "../components/UI/backgroundMedia/backgroundMedia"
import Section from "../components/section"
import Footer from "../components/UI/footer/footer"


const IndexPage = () => (
  <StaticQuery
    query={homepageQuery}
    render={data => {
        const { homepageContent, footer, footerBackground } = data.contentfulHomepage; 
       
        return (
          <ThemeProvider theme={theme}>
            <Layout>
              <SEO title="Home" />
           
              {homepageContent && homepageContent.map((section,i) => {

                  if (section.__typename === "ContentfulBackgroundMedia") {
                    console.log(section.media.fluid)
                    return <BackgroundMedia title={section.title} fluid={section.media.fluid}/>
                  } else if (section.__typename === "ContentfulSection") {
                    return <Section title={section.title} bgm={section.backgroundMedia} content={section}/>
                  }
              })}
              <Footer content={footer} bgm={footerBackground}/>
            </Layout>
          </ThemeProvider>
        )
    }
  }/>
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
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      homepageContent {
        ... on ContentfulBackgroundMedia {
          id
          media {
            fluid {
              ...GatsbyContentfulFluid
            }
            file {
              url
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
            ... on ContentfulCarousel {
              id
              carouselMedia {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
            }
            ... on ContentfulProjectCarousel {
              id
              projects {
                title
                tags
                backgroundMedia {
                  fluid {
                    ...GatsbyContentfulFluid
                  }
                }
                thumbnailMedia {
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
  }

`
export default IndexPage
