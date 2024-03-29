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
import {
  BackgroundImage,
  OurWorkWrapper,
  ThumbnailVideoWrapper,
} from "../styled/layoutStyles"
import Masonry from "react-masonry-css"
import styled from "styled-components"
import { useWindowSize } from "../components/utils"

const H2Projects = styled.h2`
  font-size: 2rem !important;
  margin-top: 1rem !important;
`

const OurWorkQuery = graphql`
  query OurWorkQuery {
    allContentfulBlackPageMeshGrids {
      nodes {
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
    allContentfulOurWork {
      nodes {
        projects {
          title
          clientName
          thumbnailMedia {
            file {
              url
              contentType
            }
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          thumbnailMediaBackgroundImage {
            fluid(maxWidth: 600) {
              sizes
              aspectRatio
              src
              srcSet
              srcWebp
            }
          }
        }
        title
        backgroundMedia {
          file {
            url
            contentType
          }
          fluid(maxWidth: 600) {
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
  }
`

const OurWork = () => {
  const [numberOfPosts, setNumberOPosts] = useState(Infinity)
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }
  const isMobile = useWindowSize()

  return (
    <StaticQuery
      query={OurWorkQuery}
      render={data => {
        const { nodes } = data.allContentfulOurWork
        const { projects } = nodes[0]
        const {
          meshGridBottom,
          meshGridBottomMobile,
        } = data.allContentfulBlackPageMeshGrids.nodes[0]
        return (
          <ThemeProvider theme={theme}>
            <Layout>
              <div className="our-work">
                <SEO title="Our Work" />
                <BackgroundImage
                  backgroundImage={
                    nodes[0].backgroundMedia.fluid &&
                    nodes[0].backgroundMedia.fluid.src
                  }
                >
                  <OurWorkWrapper>
                    {isMobile.width < 768 && (
                      <div>
                        {projects &&
                          projects.map((project, i) => {
                            if (i < numberOfPosts) {
                              if (!project.thumbnailMedia) return null
                              return (
                                <Link
                                  key={uuid()}
                                  to={`/project/${mySlug(
                                    project.clientName
                                  )}-${mySlug(project.title)}`}
                                >
                                  {project.thumbnailMedia.file.contentType.includes(
                                    "video"
                                  ) ? (
                                    <ThumbnailVideoWrapper>
                                      <div className="thumbnail-vid-outer">
                                         <span className="thumbnail-vid-desktop">
                                          <video
                                            width="100%"
                                            height="100%"
                                            muted
                                            autoPlay
                                            loop
                                            playsInline
                                            poster={
                                              project.thumbnailMediaBackgroundImage && project.thumbnailMediaBackgroundImage.fluid
                                                ? project
                                                    .thumbnailMediaBackgroundImage
                                                    .fluid.src
                                                : ""
                                            }
                                          >
                                            <source
                                              src={
                                                project.thumbnailMedia.file.url
                                              }
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video>
                                        </span>
                                        <span className="thumbnail-vid-mobile">
                                          {project.thumbnailMediaBackgroundImage && (
                                            <img
                                              src={
                                                project
                                                  .thumbnailMediaBackgroundImage
                                                  .fluid.src
                                              }
                                            />
                                          )}
                                        </span>
                                      </div>
                                    </ThumbnailVideoWrapper>
                                  ) : (
                                    <Img
                                      objectFit="cover"
                                      fluid={project.thumbnailMedia.fluid}
                                    />
                                  )}
                                  <H2Projects>
                                    {project.clientName + ":" || ""}{" "}
                                    {project.title}
                                  </H2Projects>
                                </Link>
                              )
                            }
                          })}
                      </div>
                    )}
                    {isMobile.width > 768 && (
                      <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                      >
                        {projects &&
                          projects.map((project, i) => {
                            if (i < numberOfPosts) {
                              if (!project.thumbnailMedia) return null
                              return (
                                <Link
                                  key={uuid()}
                                  to={`/project/${mySlug(
                                    project.clientName
                                  )}-${mySlug(project.title)}`}
                                >
                                  {project.thumbnailMedia.file.contentType.includes(
                                    "video"
                                  ) ? (
                                    <ThumbnailVideoWrapper>
                                      <div className="thumbnail-vid-outer">
                                        <video
                                          width="100%"
                                          height="100%"
                                          muted
                                          autoPlay
                                          loop
                                          playsInline
                                          poster={
                                            project.thumbnailMediaBackgroundImage
                                              ? project
                                                  .thumbnailMediaBackgroundImage
                                                  .fluid.src
                                              : ""
                                          }
                                        >
                                          <source
                                            src={
                                              project.thumbnailMedia.file.url
                                            }
                                            type="video/mp4"
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      </div>
                                    </ThumbnailVideoWrapper>
                                  ) : (
                                    <Img
                                      objectFit="cover"
                                      fluid={project.thumbnailMedia.fluid}
                                    />
                                  )}
                                  <H2Projects>
                                    {project.clientName + ":" || ""}{" "}
                                    {project.title}
                                  </H2Projects>
                                </Link>
                              )
                            }
                          })}
                      </Masonry>
                    )}
                  </OurWorkWrapper>
                </BackgroundImage>
                <Footer
                  textColor="light"
                  content={nodes[0].footer}
                  mobileBgm={meshGridBottomMobile}
                  bgm={meshGridBottom}
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
