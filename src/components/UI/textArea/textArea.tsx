import * as React from "react"
import { useState } from "react"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import Reveal from "react-reveal/Reveal"
import uuid from "react-uuid"
import Img from "gatsby-image"
import { device } from "../../../styled/theme"

export const TextAreaWrapper = styled.div`
  padding: 0rem 0rem 0rem;

  p {
    text-align: center;
    font-family: ${props => props.theme.font.serif}, serif;
    z-index: 1;
    position: relative;
    cursor: pointer;
    &:hover {
      + .our-perspective-image {
        /* opacity: 1;
        visibility: visible; */
        /* height: initial; */
      }
    }
  }
  > * {
    opacity: 0;
    transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: translateY(20px);
  }
  .fadeInUp {
    transform: translateY(0px);
    opacity: 1;
  }
  .our-perspective-image {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: 0 auto;
    opacity: 0;
    visibility: hidden;
    z-index: 0;
    text-align: center;
    transform: translateY(-50%);
    transition: opacity 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &.two-media-col {
    padding: 0;
    @media ${device.tablet} {
      padding: 0 12rem;
    }
    p {
      margin: 0 !important;
    }
  }
`

const TextArea = (props: TextAreaProps) => {
  const [hovered, setHovered] = useState(false)
  const data = props.content.content
  const overrideStyles = props.overrideStyles
  if (!data || !data.json) return null
  const title = props.title
  const sectionRendererOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { file } = node.data.target.fields
        const { url } = file["en-US"]
        return <img style={{display: 'block', margin: '0 auto'}} src={url} width="100" />
      },
    },
  }
  const dataAsHtml = documentToReactComponents(
    data.json,
    sectionRendererOptions
  )
  const customClass = props.customClass || ""

  if (title === "our-perspective") {
    return (
      <TextAreaWrapper style={{ ...overrideStyles }} className="text-area">
        <>
          {data.json.content.map((data, i) => {
            if (data.nodeType === "paragraph") {
              return (
                <p
                  key={uuid(i)}
                  className={`our-perspective-p our-perspective-${i}`}
                >
                  <b>{data.content[0].value}</b>
                  {data.content[1] && data.content[1].value}
                </p>
              )
            } else if (data.nodeType === "heading-1") {
              const isHovered = hovered ? 0 : 1
              return (
                <h1
                  style={{
                    opacity: isHovered,
                  }}
                >
                  {data.content[0].value}
                </h1>
              )
            } else {
              return (
                <Reveal key={uuid(i)} effect="fadeInUp">
                  <div className="our-perspective-image">
                    <img
                      style={{
                        maxHeight: "550px",
                      }}
                      src={data.data.target.fields.file["en-US"].url}
                    />
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
    <TextAreaWrapper
      style={{ ...overrideStyles }}
      className={`text-area ${customClass}`}
    >
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
