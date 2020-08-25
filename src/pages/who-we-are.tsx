import * as React from "react"
import { ThemeProvider } from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import { theme } from "../styled/theme"
import { FullHeight } from '../styled/layoutStyles'
import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundMedia from "../components/UI/backgroundMedia/backgroundMedia"
import Section from "../components/section"

const WhoWeArePage = () => (
  <StaticQuery
    query={whoWeAreQuery}
    render={data => {
        const { nodes } = data.allContentfulWhoWeArePage; 
        const { whoWeAreContent } = nodes[0];
        return (
          <ThemeProvider theme={theme}>
            <Layout>
              <SEO title="Who We Are" />
              {nodes && 
                <>  
                    <FullHeight className="full-">
                        <BackgroundMedia title={nodes[0].title} fluid={nodes[0].backgroundMedia.fluid}/>
                    </FullHeight>
                    {whoWeAreContent && whoWeAreContent.map((section,i) => {
                        return <Section title={section.title} bgm={section.backgroundMedia} content={section}/>
                    })}
                </>
           
              }
            </Layout>
          </ThemeProvider>
        )
    }
  }/>
)



const whoWeAreQuery = graphql`
  query whoWeAreQuery {
    allContentfulWhoWeArePage {
        nodes {
          title
          backgroundMedia {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
            }
          }
          whoWeAreContent {
            title
            backgroundMedia {
                file {
                url
                }
            }
            content {
              ... on ContentfulTextArea {
                id
                content {
                  json
                }
              }
            }
          }
        }
        
      }
  }

`
export default WhoWeArePage;
