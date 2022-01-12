import * as React from "react"
import TextArea from "../textArea/textArea"
import Fade from "react-reveal/Fade"
import uuid from "react-uuid"
import Img from "gatsby-image"
import ReactPlayer from "react-player"

const ImageAndText = (props: ImageAndTextProps) => {
  const { content, title } = props

  return (
    <div
      className={`image image-and-text ${content.images &&
        content.images.length > 1 &&
        `images-2`}`}
    >
      {content.images.map((image, i: number) => {
        if (image.file && image.file.contentType.includes("video")) {
          return (
            <>
              <ReactPlayer 
              style={{
                margin: "0 auto"
              }}
              loop={true}
              playing={true}
              playsinline
              width={"100%"} 
              height={"500px"} 
              url={[
                {src: image.file.url, type: 'video/mp4'}
              ]}
            />
            </>
          )
        }
        return (
          <Fade key={uuid()} effect="fadeInUp">
            <Img 
              loading="lazy"
              fluid={image.fluid} 
            />
          </Fade>
        )
      })}
      {content.title && (
        <Fade effect="fadeInUp">
          <h2>{content.title}</h2>
        </Fade>
      )}
      {content.content && <TextArea content={content} />}
    </div>
  )
}

interface ImageAndText {
  content?: object,
  title: string
}

ImageAndText.defaultProps = {
  content: {},
  title: ''
}

export default ImageAndText
