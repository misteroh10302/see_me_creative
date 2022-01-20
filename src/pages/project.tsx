/* eslint-disable prettier/prettier */
import * as React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { mySlug } from "../utils.js"
import uuid from "react-uuid"
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
  TwoColumnMediaWrapper,
} from "../styled/layoutStyles"
import BackgroundMedia from "../components/UI/backgroundMedia/backgroundMedia"
import TextArea from "../components/UI/textArea/textArea"
import Footer from "../components/UI/footer/footer"
import VideoContent, {
  VideoContentRegular,
} from "../components/UI/videoContent/videoContent"
import ReactPlayer from "react-player"

const TwoColumnGridItem = ({ data, highlight }: { data: any, highlight: string }) => {

  const { image, richTextContent, vimeoId, vimeoIdMobile, autoPlayVideo, videoDimensions } = data
  const dimensions = videoDimensions ? videoDimensions[0] : '9x16';
  
  if (vimeoId) {
    return (
      <VideoContentRegular dimensions={dimensions} highlight={highlight} content={data} playbutton={true} />
    )
  } else if (image) {
    return (
      <Img
        backgroundColor="#eeeeee"
        
        fluid={image.fluid}
      />
    )
  } else if (richTextContent) {
    const textContent = { content: richTextContent }
    return (
      <TextArea
        customClass={"two-media-col"}
        overrideStyles={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "left !important",
        }}
        content={textContent}
      />
    )
  }
  return null
}

const SecondPage = data => {
  const { slug, content } = data.pageContext
  if (!content) return <div>No Content</div>
  const subTitle = content.subTitle || null
  const title = content.title || null
  const tags = content.tags || null
  const postContent = content.postContent || null
  const backgroundMedia = content.backgroundMedia || null
  const backgroundMediaMobile = content.backgroundMediaMobile || null
  const highlightColor = content.highlightColor || false
  const headerDesktopVimeoVideoId = content.headerDesktopVimeoVideoId || null
  const headerMobileVimeoVideoId = content.headerMobileVimeoVideoId || null
  const clientName = content.clientName || null
  const bcgVideo = {
    contentType: "video/mp4",
    url:
      "//videos.ctfassets.net/ralvgwmdsf6z/5ajzuG5O5JcyEhU40e55Gy/5e05c2757a22bfac0bef24087a3898fc/Grid_Wave_8_16x9_50_White.mp4",
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
        "//videos.ctfassets.net/ralvgwmdsf6z/3lnbcwuHBW2Hf9fOLofUaM/8c23fc6e721f326911868742fb0d88f1/Grid_Wave_1_16x9_50_White.mp4",
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout className={mySlug(slug + "-" + clientName)}>
        <SEO title={`Project ${slug}`} />
        <FullHeight
          style={{ position: "relative", "z-index": 10 }}
          className="project-header"
        >
          <div className="header-desktop-video">
            {headerDesktopVimeoVideoId ? (
              <div
                className="video-background"
                style={{
                  backgroundImage: `url(${
                    backgroundMedia ? backgroundMedia.fluid.src : ""
                  }`,
                  backgroundSize: "cover",
                  backgroundColor: "rgb(238, 238, 238)",
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
                      playerVars: { showinfo: 1 },
                    },
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
                  backgroundImage: `url(${
                    backgroundMediaMobile ? backgroundMediaMobile.fluid.src : ""
                  }`,
                  backgroundSize: "cover",
                }}
              >
                <ReactPlayer
                  url={`https://player.vimeo.com/video/${headerMobileVimeoVideoId}`}
                  width="100%"
                  height="100%"
                  playing={true}
                  muted={true}
                  playsinline={true}
                  className="react-player"
                  loop
                  config={{
                    vimeo: {
                      playerVars: {
                        showinfo: 1,
                      },
                      playerOptions: {
                        playsinline: 1,
                      },
                    },
                  }}
                />
              </div>
            ) : (
              <BackgroundImage
                backgroundImage={
                  backgroundMediaMobile ? backgroundMediaMobile.fluid.src : ""
                }
              ></BackgroundImage>
            )}
          </div>
        </FullHeight>
        <ProjectWrapper
          className={headerMobileVimeoVideoId && "has-mobile-video-header"}
          style={{ position: "relative" }}
        >
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
                      playbutton={true}
                    />
                  )
                else if (content.vimeoId)
                  return (
                    <VideoContent
                      highlight={(highlightColor && highlightColor[0]) || false}
                      content={content}
                      playbutton={true}
                    />
                  )
                else if (
                  content.sys &&
                  content.sys.contentType.sys.id === "twoColumnGrid"
                ) {
                  const { rightColumn, leftColumn } = content
                  return (
                    <TwoColumnMediaWrapper>
                      <TwoColumnGridItem
                        highlight={
                          (highlightColor && highlightColor[0]) || false
                        }
                        data={leftColumn}
                      />
                      <TwoColumnGridItem
                        highlight={
                          (highlightColor && highlightColor[0]) || false
                        }
                        data={rightColumn}
                      />
                    </TwoColumnMediaWrapper>
                  )
                } else if (content.content)
                  return <TextArea content={content} />
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
                       
                        backgroundColor="#eeeeee"
                        fluid={content.imageLeft.fluid}
                      />
                      <Img
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
