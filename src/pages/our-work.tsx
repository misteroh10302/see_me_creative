import * as React from "react"
import { ThemeProvider } from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { theme } from "../styled/theme"
import { FullHeight } from '../styled/layoutStyles'
import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundMedia from "../components/UI/backgroundMedia/backgroundMedia"
import Section from "../components/section"

import { BackgroundImage, OurWorkWrapper } from "../styled/layoutStyles"


const OurWork = () => (
  <StaticQuery
    query={OurWorkQuery}
    render={data => {
        const { nodes } = data.allContentfulOurWork;
        const { projects } = nodes[0]
        return (
          <ThemeProvider theme={theme}>
            <Layout>
              <SEO title="Our Work" />
              <BackgroundImage backgroundImage={nodes[0].backgroundMedia.fluid.src}>
                <OurWorkWrapper>
                    {projects && projects.map((project,i) => {
                        return (
                            <div>
                                <h2>{project.title}</h2>
                                <Img fluid={project.backgroundMedia.fluid} />
                            </div>
                        )
                    })}
                </OurWorkWrapper>
            </BackgroundImage>
            </Layout>
          </ThemeProvider>
        )
    }
  }/>
)



const OurWorkQuery = graphql`
    query OurWorkQuery {
        allContentfulOurWork {
        nodes {
            projects {
            title
            backgroundMedia {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
            }
            title
            backgroundMedia {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
        }
        }
    }
`
export default OurWork;
