import * as React from "react"
import TextArea from "../textArea/textArea"
import Fade from "react-reveal/Fade"
import uuid from 'react-uuid'

const ImageAndText = (props: ImageAndTextProps) => {
  const { content } = props
  return (
    <div
      className={`image ${content.images &&
        content.images.length > 1 &&
        `images-2`}`}
    >
      {content.images.map((image: Object, i: Number) => (
        <Fade key={uuid()}>
          <img src={image.fluid && image.fluid.src} />
        </Fade>
      ))}
      {content.title && (
        <Fade bottom>
          <h1>{content.title}</h1>
        </Fade>
      )}
      {content.content && (
          <TextArea content={content} />
      )}
    </div>
  )
}

interface ImageAndText {
  content?: object
}

ImageAndText.defaultProps = {
  content: {},
}

export default ImageAndText
