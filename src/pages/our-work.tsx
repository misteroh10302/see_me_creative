import * as React from "react"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { theme } from "../styled/theme"
import ReactPlayer from "react-player"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import uuid from "react-uuid"
import { mySlug } from "../utils.js"

import Footer from "../components/UI/footer/footer"
import { BackgroundImage, OurWorkWrapper } from "../styled/layoutStyles"
import BackgroundMedia from '../components/UI/backgroundMedia/backgroundMedia';

const OurWorkQuery = graphql`
  query OurWorkQuery {
    allContentfulOurWork {
      nodes {
        projects {
          title
          thumbnailMedia {
            fluid(maxWidth: 200, maxHeight: 500){
              ...GatsbyContentfulFluid
            }
          }
        }
        title
        backgroundMedia {
          fluid(maxWidth: 200, maxHeight: 500){
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


const OurWork = () => {
  const [numberOfPosts, setNumberOPosts] = useState(Infinity);
  return (
    <StaticQuery
      query={OurWorkQuery}
      render={data => {
        const { nodes } = data.allContentfulOurWork;
        const { projects } = nodes[0];
        return (
          <ThemeProvider theme={theme}>
            <Layout>
              <div className="our-work">
                <SEO title="Our Work" />
                <BackgroundImage
                  backgroundImage={nodes[0].backgroundMedia.fluid.src}
                >
                  <OurWorkWrapper>
                    {projects &&
                      projects.map((project, i) => {

                        if (i < numberOfPosts) {
                          return (
                            <Link
                              key={uuid()}
                              to={`/project/${mySlug(project.title)}`}
                              style={{height: "600px" }}
                            >
                              <h2>{project.title}</h2>
                            
                                <Img 
                                  fluid={project.thumbnailMedia.fluid} 
                                  style={{height: "600px" }}/>
                              
                            </Link>
                          )
                        }
                      })}
                  </OurWorkWrapper>
                </BackgroundImage>
                <Footer
                  textColor="light"
                  content={nodes[0].footer}
                  bgm={nodes[0].footerBackground}
                />
              </div>
            </Layout>
          </ThemeProvider>
        )
      }}
    />
  )
}
export default OurWork
