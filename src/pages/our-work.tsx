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
import Masonry from "react-masonry-css"
import styled from "styled-components"


const H2Projects =  styled.h2`
  font-size: 2rem !important;
  margin-top: .5rem !important;
`;

const OurWorkQuery = graphql`
  query OurWorkQuery {
    allContentfulOurWork {
      nodes {
        projects {
          title
          clientName
          thumbnailMedia {
            fluid(maxWidth: 200){
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
        title
        backgroundMedia {
          file {
            url
            contentType
          }
          fluid(maxWidth: 200){
            ...GatsbyContentfulFluid_withWebp_noBase64
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
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`


const OurWork = () => {
  const [numberOfPosts, setNumberOPosts] = useState(Infinity);
  const breakpointColumnsObj = {
    default: 4,
    1100: 1,
    700: 1,
    500: 1,
  }
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
                  backgroundImage={nodes[0].backgroundMedia.fluid && nodes[0].backgroundMedia.fluid.src}
                >
                  <OurWorkWrapper> 
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                      >
                    {projects &&
                      projects.map((project, i) => {

                        if (i < numberOfPosts) {
                          return (
                            <Link
                              key={uuid()}
                              to={`/project/${mySlug(project.title)}`}
                              // style={{height: "600px" }}
                            >
                                <Img 
                                  fluid={project.thumbnailMedia.fluid} 
                                  style={{ maxHeight: "550px" }}
                                  />
                               <H2Projects>{project.clientName + ':' || ''} {project.title}</H2Projects>
                            </Link>
                          )
                        }
                      })}
                      </Masonry>
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
