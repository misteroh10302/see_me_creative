import * as React from "react"
import { ThemeProvider } from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { theme } from "../styled/theme"
import { FullHeight } from '../styled/layoutStyles'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import BackgroundMedia from "../components/UI/backgroundMedia/backgroundMedia"
import Section from "../components/section"
import Footer from "../components/UI/footer/footer"

import { BackgroundImage, OurWorkWrapper } from "../styled/layoutStyles"

import { mySlug } from '../utils.js'
const OurWork = () => (
  <StaticQuery
    query={OurWorkQuery}
    render={data => {
        const { nodes } = data.allContentfulOurWork;
        const { projects } = nodes[0]
        return (
          <ThemeProvider theme={theme}>
            <Layout>
            <div className="our-work">

              <SEO title="Our Work" />
              <BackgroundImage backgroundImage={nodes[0].backgroundMedia.fluid.src}>
                <OurWorkWrapper>
                    {projects && projects.map((project,i) => {
                        return (
                            <Link  to={`/project/${mySlug(project.title)}`}>
                                <h2>{project.title}</h2>
                                <Img fluid={project.backgroundMedia.fluid} />
                            </Link>
                        )
                    })}
                </OurWorkWrapper>
            </BackgroundImage>
            <Footer content={nodes[0].footer} bgm={nodes[0].footerBackground}/>
            </div>
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
            }
        }
    }
`
export default OurWork;
