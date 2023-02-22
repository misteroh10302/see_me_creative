import * as React from "react"
import { ThemeProvider } from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import { theme } from "../styled/theme"
import { ReelWrapper } from "../styled/layoutStyles"
import Layout from "../components/layout"
import SEO from "../components/seo"

const reelQuery = graphql`
  query reelQuery {
    contentfulReel(vimeoId: {}, vimeoIdMobile: {}) {
      id
      vimeoId
      vimeoIdMobile
    }
  }
`

const ReelPage = () => (
  <StaticQuery
    query={reelQuery}
    render={data => {
      const { vimeoId } = data.contentfulReel
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
          </Layout>
        </ThemeProvider>
      )
    }}
  />
)

export default ReelPage
