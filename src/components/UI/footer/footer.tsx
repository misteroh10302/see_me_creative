import * as React from "react"

import uuid from "react-uuid"

import { FooterWrapper } from "./footerWrapper"
import TextArea from "../textArea/textArea"
import { Button } from "../../../styled/layoutStyles"
import BackgroundMedia from "../backgroundMedia/backgroundMedia"

const Footer = (props: FooterProps) => {
  return (
    <FooterWrapper
      page={props.page}
      buttonColor={props.buttonColor}
      textColor={props.textColor}
      background={props.bgm.fluid ? props.bgm.fluid.src : ""}
    >
      {props.bgm.file && props.bgm.file.contentType.includes("video") && (
        <BackgroundMedia position="absolute" file={props.bgm.file} mobileFile={props.mobileBgm}/>
      )}
      <TextArea content={props.content} />
      {props.content.buttons.map(button => {
        return (
          <Button
            key={uuid()}
            href={button.link}
            invert={props.textColor === "black" ? true : false}
          >
            {button.buttonText}
          </Button>
        )
      })}
    </FooterWrapper>
  )
}

interface FooterProps {
  siteTitle?: string
  content?: object
  bgm: {
    fluid: {
      src: string
    }
  }
  buttonColor: string
  textColor: string
}

Footer.defaultProps = {
  siteTitle: ``,
  content: {},
  bgm: {},
  textColor: "dark",
}

export default Footer
