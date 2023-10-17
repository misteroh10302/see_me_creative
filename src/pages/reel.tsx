import * as React from "react"
import { ThemeProvider } from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import { theme } from "../styled/theme"
import { ReelWrapper } from "../styled/layoutStyles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/UI/footer/footer"

const reelQuery = graphql`
  query reelQuery {
    contentfulReel(vimeoId: {}, vimeoIdMobile: {}) {
      id
      vimeoId
      vimeoIdMobile
    }
    allContentfulOurWork {
      nodes {
        footer {
          content {
            json
          }
          buttons {
            link
            buttonText
          }
          newsletterUrl
        }
        footerBackground {
          file {
            contentType
            url
          }
          fluid {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
    allContentfulBlackPageMeshGrids {
      nodes {
        meshGridTop {
          file {
            contentType
            url
          }
        }
        meshTopGridMobile {
          file {
            url
            fileName
            contentType
          }
        }
        meshGridBottomMobile {
          file {
            fileName
            url
            contentType
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
  }
`

const ReelPage = () => (
  <StaticQuery
    query={reelQuery}
    render={data => {
      const { nodes } = data.allContentfulOurWork
      const { vimeoId } = data.contentfulReel
      const {
        meshGridBottom,
        meshGridBottomMobile,
      } = data.allContentfulBlackPageMeshGrids.nodes[0]
      return (
        <ThemeProvider theme={theme}>
          <Layout className="reel-page">
            <SEO title="Reel" />
            <ReelWrapper>
              <iframe
                src={`https://player.vimeo.com/video/${vimeoId}?controls=1&background=false`}
                width="840"
                height="660"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </ReelWrapper>
            <Footer
              textColor="light"
              content={nodes[0].footer}
              mobileBgm={meshGridBottomMobile}
              bgm={meshGridBottom}
            />
          </Layout>
        </ThemeProvider>
      )
    }}
  />
)

export default ReelPage
