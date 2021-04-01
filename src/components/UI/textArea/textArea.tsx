import * as React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import Reveal from 'react-reveal/Reveal';

import uuid from 'react-uuid'

export const TextAreaWrapper = styled.div`
  padding: 2rem 0rem 1rem;
  p {
    text-align: center;
    font-family: ${props => props.theme.font.serif}, serif;
  }
  > * {
    opacity: 0;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: translateY(60px);
  }
  .fadeInUp {
    transform: translateY(0px);
    opacity: 1;
  }
`

const TextArea = (props: TextAreaProps) => {
  const data = props.content.content
  const dataAsHtml = documentToReactComponents(data.json)
  return (
    <TextAreaWrapper className="text-area">
      <>
        {dataAsHtml.map((data, i) => {
          return (
            <Reveal key={uuid(i)} effect="fadeInUp">
              {data}
            </Reveal>
          )
        })}
      </>
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
