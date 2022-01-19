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

const bcgVideo = {
  contentType: "video/mp4",
  url:
    "//videos.ctfassets.net/ralvgwmdsf6z/3myntUCnK3BxiIbHvDfkD5/7be81623bf919629c2376d207d9abade/Grid_Wave_8_16x9_50_Black.mp4",
}

const BackgroundIndex = (props) =>{
  return (
    <div style={{position: 'relative', zIndex: 0}}>
      {/* <BackgroundMedia overrideStyle={{top: '-30rem'}} upsideDown position="absolute" file={bcgVideo} /> */}
      {props.children}
    </div>
  )
}

const IndexPage = () => (
  <StaticQuery
    query={homepageQuery}
    render={data => {
      const {
        homepageContent,
        footer,
        footerBackground,
      } = data.contentfulHomepage

      const sections = homepageContent.filter((entry) => entry.__typename === "ContentfulSection");
      return (
        <ThemeProvider theme={theme}>
          <Layout page="home">
            <div className="homepage">
              <SEO title="Home" />
              {homepageContent &&
                homepageContent.map((section: any, i: number) => {
                  if (section.__typename === "ContentfulBackgroundMedia") {
                    return (
                      <BackgroundMedia
                        title={section.title}
                        vimeoId={section.vimeoId}
                        vimeoIdMobile={section.vimeoIdMobile}
                        key={uuid()}
                        overrideStyle={{zIndex: 1}}
                      />
                    )
                  } 
                })}
                <BackgroundIndex>
                  {sections && sections.map((section: any, i: number) => {
                      return (
                        <Section
                          title={section.title}
                          bgm={section.backgroundMedia}
                          content={section}
                          key={uuid()}
                        />
                      )
                    }
                  )}
                </BackgroundIndex>
              <Footer
                textColor="light"
                content={footer}
                bgm={footerBackground}
              />
            </div>
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
          __typename
          id
          vimeoId
          vimeoIdMobile
          title
        }
        ... on ContentfulSection {
          __typename
          id
          title
          backgroundMedia {
            file {
              url
            }
          }
          content {
            __typename
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
                clientName
                title
                tags
                clientLogo {
                  fluid(maxWidth: 300) {
                    sizes
                    aspectRatio
                    src
                    srcSet
                  }
                }
                backgroundMedia {
                  fluid(maxWidth: 200) {
                    ...GatsbyContentfulFluid_withWebp_noBase64
                  }
                  file {
                    contentType
                  }
                }
                thumbnailMedia {
                  fluid(maxWidth: 200) {
                    ...GatsbyContentfulFluid_withWebp_noBase64
                  }
                  file {
                    contentType
                    url
                  }
                }
                 thumbnailMediaBackgroundImage {
                  fluid(maxWidth: 1600) {
                    sizes
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                  }
                }
              }
            }
            ... on ContentfulImageGallery {
              id
              title
              images {
                file {
                  contentType
                  url
                }
                sizes {
                  src
                }
                fluid(maxWidth: 200, maxHeight: 500) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
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
