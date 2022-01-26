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
     allContentfulBlackPageMeshGrids {
      nodes {
        meshGridTop {
          file {
            contentType
            url
          }
        }
        meshGridBottom {
          
          file {
            contentType
            url
          }
        }
      }
    }
    allContentfulWhoWeArePage {
      nodes {
        title
        background {
          title
          vimeoId
          vimeoIdMobile
          videoBackgroundDesktop {
            fluid {
              src
              srcSet
            }
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
              headerImage {
                 fluid(maxWidth: 300) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
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
              headerImage {
                fluid(maxWidth: 350) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
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


const BackgroundWhoWeAre = (props: any) => {
  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      <BackgroundMedia
        overrideStyle={{ top: "0rem", objectFit: 'cover' }}
        upsideDown
        className="who-are-header"
        position="absolute"
        file={props.bcgVideo.file}
      />
      {props.children}
    </div>
  )
}

const WhoWeArePage = () => (
  <StaticQuery
    query={whoWeAreQuery}
    render={data => {
      const { nodes } = data.allContentfulWhoWeArePage
      const { whoWeAreContent } = nodes[0]
      const { meshGridTop, meshGridBottom } = data.allContentfulBlackPageMeshGrids.nodes[0]
      return (
        <ThemeProvider theme={theme}>
          <Layout className="who-we-are-page">
            <SEO title="Who We Are" />
            {nodes && (
              <ProjectCollectionWrapper>
                <FullHeight className="full- who-we-are-header-wrapper">
                  <BackgroundMedia
                    vimeoIdMobile={nodes[0].background.vimeoId}
                    vimeoId={nodes[0].background.vimeoId}
                    poster={nodes[0].background.videoBackgroundDesktop ? nodes[0].background.videoBackgroundDesktop : null}
                  />
                </FullHeight>
                <BackgroundWhoWeAre bcgVideo={meshGridTop}>
                  {whoWeAreContent &&
                    whoWeAreContent.map((section: any, index: number) => {
                      return (
                        <Section
                          key={uuid()}
                          title={section.title}
                          bgm={section.backgroundMedia}
                          content={section}
                        />
                      )
                    })}
                </BackgroundWhoWeAre>
              </ProjectCollectionWrapper>
            )}
            <Footer
              textColor="light"
              content={nodes[0].footer}
              bgm={meshGridBottom}
            />
          </Layout>
        </ThemeProvider>
      )
    }}
  />
)

export default WhoWeArePage
