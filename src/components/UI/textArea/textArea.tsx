import * as React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

export const TextAreaWrapper = styled.div`
  padding: 3rem;
  p {
    text-align: center;
    font-family: ${props => props.theme.font.serif}, serif;
  }
`

const TextArea = (props: TextAreaProps) => {
  const data = props.content.content;
  const dataAsHtml = documentToReactComponents(data.json)
  return (
    <TextAreaWrapper>
      <Fade top cascade>{dataAsHtml} </Fade>
    </TextAreaWrapper>
  )
}

interface TextArea {
  content?: object
}

TextArea.defaultProps = {
  content: {},
}

export default TextArea
