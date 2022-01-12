import * as React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { mySlug } from "../utils.js"
import uuid from 'react-uuid'
import { theme } from "../styled/theme"
import {
  FullHeight,
  ProjectWrapper,
  BackgroundImage,
  GalleryWrapper,
  SingleGalleryWrapper,
  H1,
  TwoColumnWrapper,
  SingleColumnWrapper,
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
  const headerDesktopVimeoVideoId = content.headerDesktopVimeoVideoId || null
  const headerMobileVimeoVideoId = content.headerMobileVimeoVideoId || null
  const clientName = content.clientName || null
  const bcgVideo = {
    contentType: "video/mp4",
    url:
      "http://videos.ctfassets.net/ralvgwmdsf6z/3ew8brUJKFZ5vuQ2vjgZLa/af57c51b0158c7cad8d49f8fb4c1e380/Grid_Wave_7_-_WB.mp4",
  }

  const footerContent = {
    content: {
      json: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: "144 Bowery, Suite 3A",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: "New York, NY 10013",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
        ],
        nodeType: "document",
      },
    },
    buttons: [
      {
        link: "mailto:seemecreative@gmail.com",
        buttonText: "Email Us",
      },
      {
        link: "https://www.instagram.com/see.me.creative/",
        buttonText: "Social",
      },
    ],
  }

  const footerBackground = {
    fluid: null,
    file: {
      contentType: "video/mp4",
      url:
        "//videos.ctfassets.net/ralvgwmdsf6z/1aY0IAne8uBTBLeH0biPcV/30399ec97ff95721bbcb68cf742a0e3f/Grid_Wave_1_-_WB.mp4",
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title={`Project ${slug}`} />
        <FullHeight style={{ position: "relative", "z-index": 10 }}>
          <div className="header-desktop-video">
            {headerDesktopVimeoVideoId ? (
              <div
                className="video-background"
                style={{
                  backgroundImage: `url(https://vumbnail.com/${headerDesktopVimeoVideoId}.jpg)`,
                  backgroundSize: "cover",
                  backgroundColor: "rgb(238, 238, 238)"
                }}
              >
                  <ReactPlayer
                    url={`https://player.vimeo.com/video/${headerDesktopVimeoVideoId}`}
                    width="100vw"
                    height="auto"
                    playing={true}
                    muted={true}
                    loop
                    config={{
                      vimeo: {
                        playerVars: { showinfo: 1 }
                      }
                    }}
                />
                
              </div>
            ) : (
              <BackgroundImage
                backgroundImage={
                  backgroundMedia ? backgroundMedia.fluid.src : ""
                }
              ></BackgroundImage>
            )}
          </div>
          <div className="header-mobile-video">
            {headerMobileVimeoVideoId ? (
              <div
                className="video-background"
                style={{
                  backgroundImage: `url(https://vumbnail.com/${headerMobileVimeoVideoId}.jpg)`,
                  backgroundSize: "cover",
                  backgroundColor: "rgb(238, 238, 238)"
                }}
              >
                 <ReactPlayer
                  url={`https://player.vimeo.com/video/${headerMobileVimeoVideoId}`}
                  width="100vw"
                  height="100vh"
                  playing={true}
                  muted={true}
                  playsinline={true}
                  loop
                  config={{
                    vimeo: {
                      playerVars: { showinfo: 1 }
                    }
                  }}
                />
              </div>
            
            ) : (
              <BackgroundImage
                backgroundImage={
                  backgroundMedia ? backgroundMedia.fluid.src : ""
                }
              ></BackgroundImage>
            )}
          </div>
        </FullHeight>
        <ProjectWrapper style={{ position: "relative" }}>
          <BackgroundMedia upsideDown position="absolute" file={bcgVideo} />
          <header style={{ position: "relative" }}>
            <H1
              highlight={(highlightColor && highlightColor[0]) || false}
              className="title"
            >
              {clientName}
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
                else if (content.vimeoId)
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
                  const adjustPadding = content.adjustAlignmentIfNoHeaderInSecondColumn
                    ? true
                    : false
                  return (
                    <TwoColumnWrapper
                      adjustPadding={adjustPadding}
                      className="post-text-wrapper"
                    >
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
                    <SingleColumnWrapper>
                      <TextArea
                        content={{
                          content:
                            content.childContentfulSingleColumnTextSingleColumnTextRichTextNode,
                        }}
                      />
                    </SingleColumnWrapper>
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
                        return (
                          <Img
                          key={uuid()}
                            backgroundColor="#eeeeee"
                            style={{ maxHeight: "90vh" }}
                            fluid={img.fluid}
                            className={orientation}
                          />
                        )
                      })}
                    </SingleGalleryWrapper>
                  )
                } else if (content.imageLeft) {
                  return (
                    <GalleryWrapper className="gallery">
                      <Img
                        style={{ maxHeight: "90vh" }}
                        backgroundColor="#eeeeee"
                        fluid={content.imageLeft.fluid}
                      />
                      <Img
                        style={{ maxHeight: "90vh" }}
                        backgroundColor="#eeeeee"
                        fluid={content.imageRight.fluid}
                      />
                    </GalleryWrapper>
                  )
                } else if (content.mainImage) {
                  return (
                    <SingleGalleryWrapper>
                      <Img
                        fluid={content.mainImage.fluid}
                        className={mySlug(content.imageSize)}
                        backgroundColor="#eeeeee"
                        style={{ maxHeight: "90vh" }}
                      />
                    </SingleGalleryWrapper>
                  )
                }
              })}
            </section>
          )}
        </ProjectWrapper>
        <Footer
          content={footerContent}
          textColor="dark"
          buttonColor="light"
          bgm={footerBackground}
        />
      </Layout>
    </ThemeProvider>
  )
}

export default SecondPage
