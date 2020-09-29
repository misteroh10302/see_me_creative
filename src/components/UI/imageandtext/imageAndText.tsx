import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import TextArea from "../textArea/textArea"

const ImageAndText = (props: ImageAndTextProps) => {
  const { content } = props;
  return (
    <div>
        <img src={content.images[0].fluid.srcWebp} />
        <h1>{content.title}</h1>
        <TextArea content={content} />
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
