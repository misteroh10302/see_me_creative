import { Link } from "gatsby"
import * as React from "react"


import { SectionWrapper, Button } from "../styled/layoutStyles"
import TextArea from "./UI/textArea/textArea"
import Carousel from './UI/carousel/carousel'

const cleanTitle = (str) => {
    return str.replace(/ /g, '-').toLowerCase();
}

const Section = (props: SectionProps) => {
    const { content,title } = props.content;
    return (
        <SectionWrapper className={cleanTitle(title)} backgroundImage={props.bgm.file.url}>
            {content && content.map((content,i) =>{
                if (content.__typename === "ContentfulTextArea") {
                    return <TextArea content={content}/>;
                } else if (content.__typename === "ContentfulButton") {
                    return <Button href={content.link}>{content.buttonText}</Button>
                } else if (content.__typename === "ContentfulCarousel") {
                    return <Carousel content={content}/>
                } else if (content.__typename === "ContentfulProjectCarousel") {
                    return <Carousel content={content}/>
                }
            })}
        </SectionWrapper>
    )
}

interface Section {
  content: any[]
  title: string
  bgm: object
}

Section.defaultProps = {
    content: [],
    title: "",
    bgm: {}
}

export default Section
