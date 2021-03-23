import * as React from "react"
import uuid from 'react-uuid'
import { SectionWrapper, Button } from "../styled/layoutStyles"
import TextArea from "./UI/textArea/textArea"
import Carousel from './UI/carousel/carousel'
import ImageAndText from './UI/imageandtext/imageAndText'
import { cleanTitle } from '../utils.js'

const Section = (props: SectionProps) => {
    const { content,title } = props.content;
    return (
        <SectionWrapper className={cleanTitle(title)} backgroundImage={props.bgm ? props.bgm.file.url : ""}>
            {content && content.map((content,i) =>{
                if (content.__typename === "ContentfulTextArea") {
                    return <TextArea key={uuid()} content={content}/>;
                } else if (content.__typename === "ContentfulButton") {
                    return <Button key={uuid()} href={content.link}>{content.buttonText}</Button>
                } else if (content.__typename === "ContentfulCarousel") {
                    return <Carousel key={uuid()} content={content}/>
                } else if (content.__typename === "ContentfulProjectCarousel") {
                    return <Carousel key={uuid()} content={content}/>
                } else if (content.__typename === "ContentfulImageGallery") {
                    return <ImageAndText title={title} key={uuid()} content={content} />
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
