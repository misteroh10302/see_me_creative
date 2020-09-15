import { Link } from "gatsby"
import * as React from "react"
import { FooterWrapper } from "./footerWrapper"
import TextArea  from '../textArea/textArea'
import { Button } from "../../../styled/layoutStyles"

const Footer = (props: FooterProps) => {
   return ( 
    <FooterWrapper background={props.bgm.fluid.src}>
        <TextArea content={props.content}/>
        {props.content.buttons.map((button,i) => {
                return <Button href={button.link}>{button.buttonText}</Button>
            })
        }
    </FooterWrapper>
   )
}

interface FooterProps {
  siteTitle?: string
  content?: object
  bgm: string
}

Footer.defaultProps = {
  siteTitle: ``,
  content: {},
  bgm: ''
}

export default Footer
