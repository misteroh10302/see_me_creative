import * as React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { mySlug } from "../utils.js"

import { theme } from "../styled/theme"
import {
  FullHeight,
  ProjectWrapper,
  BackgroundImage,
  GalleryWrapper,
  SingleGalleryWrapper,
  H1,
  TwoColumnWrapper,
} from "../styled/layoutStyles"
import BackgroundMedia from "../components/UI/backgroundMedia/backgroundMedia"
import TextArea from "../components/UI/textArea/textArea"
import Footer from "../components/UI/footer/footer"
import VideoContent from "../components/UI/videoContent/videoContent"
import ReactPlayer from "react-player"

const SecondPage = data => {
  const { slug, content } = data.pageContext
  if (!content) return <div>No Content</div>
  const subTitle = content.subTitle || null
  const title = content.title || null
  const tags = content.tags || null
  const postContent = content.postContent || null
  const backgroundMedia = content.backgroundMedia || null
  const highlightColor = content.highlightColor || false
  const headerDesktopVimeoVideoId =
    content.headerDesktopVimeoVideoId || "336487034"
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title={`Project ${slug}`} />
        <FullHeight>
          <div className="video-background">
          <iframe
            background={true}
            autoPlay
            muted={true}
            frameborder="0" 
            webkitallowfullscreen 
            mozallowfullscreen 
            allowfullscreen
            src={`https://player.vimeo.com/video/${headerDesktopVimeoVideoId}?embedparameter=value&autoplay=1&loop=1&muted=1&controls=false`}
          />
</div>
          {/* {backgroundMedia.file.contentType &&
          backgroundMedia.file.contentType.includes("video") ? (
          <BackgroundMedia
          title={backgroundMedia.title}
          fluid={backgroundMedia.fluid}
          file={backgroundMedia.file}
        /> ) : 
        <BackgroundImage
        backgroundImage={backgroundMedia.fluid.src}
      ></BackgroundImage>
        } */}
        </FullHeight>
        <ProjectWrapper>
          <header>
            <H1
              highlight={(highlightColor && highlightColor[0]) || false}
              className="title"
            >
              {title}
            </H1>
            <h2 className="subtitle">{subTitle}</h2>
            <small>{tags && tags.join(", ")}</small>
          </header>
          {postContent && (
            <section className="post-content">
              {postContent.map((content, i) => {
                if (content.videos)
                  return (
                    <VideoContent
                      highlight={(highlightColor && highlightColor[0]) || false}
                      content={content}
                    />
                  )
                else if (content.content) return <TextArea content={content} />
                else if (
                  content.childContentfulTwoColumnTextLeftColRichTextNode
                ) {
                  return (
                    <TwoColumnWrapper className="post-text-wrapper">
                      <TextArea
                        content={{
                          content:
                            content.childContentfulTwoColumnTextLeftColRichTextNode,
                        }}
                      />
                      <TextArea
                        content={{
                          content:
                            content.childContentfulTwoColumnTextRightColRichTextNode,
                        }}
                      />
                    </TwoColumnWrapper>
                  )
                } else if (
                  content.childContentfulSingleColumnTextSingleColumnTextRichTextNode
                ) {
                  return (
                    <TwoColumnWrapper className="post-text-wrapper">
                      <TextArea
                        content={{
                          content:
                            content.childContentfulSingleColumnTextSingleColumnTextRichTextNode,
                        }}
                      />
                      <div></div>
                    </TwoColumnWrapper>
                  )
                } else if (content.images) {
                  return (
                    <SingleGalleryWrapper className="gallery">
                      {content.images.map((img, i) => {
                        let orientation
                        let { aspectRatio } = img.fluid
                        if (aspectRatio >= 1.2) orientation = "landscape"
                        if (aspectRatio <= 0.8) orientation = "portrait"
                        if (aspectRatio > 0.8 && aspectRatio < 1.2)
                          orientation = "square"
                        return <Img fluid={img.fluid} className={orientation} />
                      })}
                    </SingleGalleryWrapper>
                  )
                } else if (content.imageLeft) {
                  return (
                    <GalleryWrapper className="gallery">
                      <Img fluid={content.imageLeft.fluid} />
                      <Img fluid={content.imageRight.fluid} />
                    </GalleryWrapper>
                  )
                } else if (content.mainImage) {
                  return (
                    <SingleGalleryWrapper>
                      <Img
                        fluid={content.mainImage.fluid}
                        className={mySlug(content.imageSize)}
                      />
                    </SingleGalleryWrapper>
                  )
                }
              })}
            </section>
          )}
        </ProjectWrapper>
        {content.footer && (
          <Footer content={content.footer} bgm={content.footerBackground} />
        )}
      </Layout>
    </ThemeProvider>
  )
}

export default SecondPage
