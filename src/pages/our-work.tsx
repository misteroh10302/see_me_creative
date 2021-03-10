import * as React from "react"
import { ThemeProvider } from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { theme } from "../styled/theme"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import uuid from "react-uuid"

import Footer from "../components/UI/footer/footer"
import { BackgroundImage, OurWorkWrapper } from "../styled/layoutStyles"

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
          file {
            url
            contentType
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

import { mySlug } from "../utils.js"

const OurWork = () => (
  <StaticQuery
    query={OurWorkQuery}
    render={data => {
      const { nodes } = data.allContentfulOurWork
      const { projects } = nodes[0]
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
                    projects.map(project => {
                      return (
                        <Link
                          key={uuid()}
                          to={`/project/${mySlug(project.title)}`}
                        >
                          <h2>{project.title}</h2>
                          <Img fluid={project.backgroundMedia.fluid} />
                        </Link>
                      )
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

export default OurWork
