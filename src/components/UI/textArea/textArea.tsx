import * as React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import Reveal from 'react-reveal/Reveal';
import uuid from 'react-uuid'
import Img from "gatsby-image"

export const TextAreaWrapper = styled.div`
  padding: 2rem 0rem 1rem;
  p {
    text-align: center;
    font-family: ${props => props.theme.font.serif}, serif;
    z-index: 1;
    position: relative;
    cursor: pointer;
    &:hover {
      + .our-perspective-image {
        opacity: 1;
        visibility: visible;
        /* height: initial; */
      }
    }
  }
  > * {
    opacity: 0;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: translateY(20px);
  }
  .fadeInUp {
    transform: translateY(0px);
    opacity: 1;
  }
  .our-perspective-image {
    position:  absolute;
    top: 45%;
    left: 0;
    right: 0;
    margin: 0 auto;
    opacity: 0;
    visibility: hidden;
    /* height: 0; */
    z-index: 0;
    text-align: center;
    transform: translateY(-50%);
    transition: opacity 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`

const TextArea = (props: TextAreaProps) => {
  const data = props.content.content;
  const title = props.title;
  const dataAsHtml = documentToReactComponents(data.json)
  if (title === "our-perspective") {
    return (
      <TextAreaWrapper className="text-area">
        <>
          {data.json.content.map((data, i) => {
            if (data.nodeType === "paragraph") {
              return (
                <Reveal key={uuid(i)} effect="fadeInUp">
                  <p className={`our-perspective-${i}`}>
                    <b>{data.content[0].value}</b>
                    {data.content[1] && data.content[1].value}
                  </p>
                </Reveal>
              )
            } else if (data.nodeType === "heading-1") {
              return (
                <Reveal key={uuid(i)} effect="fadeInUp">
                  <h1>
                    {data.content[0].value}
                  </h1>
                </Reveal>
              )
            }
            else {
              return (
                  <Reveal key={uuid(i)} effect="fadeInUp">
                    <div className="our-perspective-image">
                        <img   style={{ maxHeight: "550px"}} src={data.data.target.fields.file["en-US"].url} />
                        {/* <Img 
                          objectFit="cover"
                          style={{ maxHeight: "350px"}}
                          src={data.data.target.fields.file["en-US"].url} 
                        /> */}
                    </div>
                  </Reveal>
                )
            }
          })}
        </>
      </TextAreaWrapper>
    )
  }
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
