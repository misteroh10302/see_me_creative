import * as React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import { FullHeight, ProjectWrapper, BackgroundImage, GalleryWrapper } from '../styled/layoutStyles'
import { theme } from "../styled/theme"
import TextArea from "../components/UI/textArea/textArea"
import Footer from "../components/UI/footer/footer"


const SecondPage = (data) => {
  const { slug, content } = data.pageContext;
  if (!content) return <div>No Content</div>
  const subTitle = content.subTitle || null;
  const title = content.title || null;
  const tags = content.tags || null;
  const postContent = content.postContent || null;
  const backgroundMedia = content.backgroundMedia || null;
  return(
    <ThemeProvider theme={theme}>
      <Layout >
        <SEO title={slug} />
        <FullHeight>
          <BackgroundImage backgroundImage={backgroundMedia.fluid.src} >
          </BackgroundImage>
        </FullHeight>
        <ProjectWrapper>
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subTitle}</h2>
          <small>{tags && tags.join(', ')}</small>
          {postContent &&
            <section className="post-content">
              {postContent.map((content,i) => {
                if (content.videos) {
                  return (
                    <div className="video-content">
                      <p>
                        <b>Watch Now</b>
                      </p>
                      <div className="video-inner">
                        <iframe
                          src={content.videos[0].file.url}
                          title={'My Video'}
                          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                          frameBorder="0"
                          webkitallowfullscreen="true"
                          mozallowfullscreen="true"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )
                }
                else if (content.content) {
                  return <TextArea content={content}/>
                } else if (content.images) {
                  return (
                    <GalleryWrapper className="gallery">
                      {content.images.map((img,i) => {
                        return <Img fluid={img.fluid} />
                      })}
                    </GalleryWrapper>
                  )
                }
              })}
            </section>
          }       
        </ProjectWrapper>
        {content.footer && 
          <Footer content={content.footer} bgm={content.footerBackground}/> 
        }
      </Layout>
    </ThemeProvider>
  )
}

export default SecondPage
