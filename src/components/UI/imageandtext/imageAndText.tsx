import * as React from "react"
import TextArea from "../textArea/textArea"
import Fade from "react-reveal/Fade"
import uuid from "react-uuid"
import Img from "gatsby-image"

const ImageAndText = (props: ImageAndTextProps) => {
  const { content, title } = props
  return (
    <div
      className={`image image-and-text ${content.images &&
        content.images.length > 1 &&
        `images-2`}`}
    >
      {content.images.map((image, i: number) => {
        return (
          <Fade key={uuid()}>
            <Img 
              objectFit="cover"
              style={{ maxHeight: title ? "400px": "initial" }}
              fluid={image.fluid} 
            />
          </Fade>
        )
      })}
      {content.title && (
        <Fade bottom>
          <h1>{content.title}</h1>
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
