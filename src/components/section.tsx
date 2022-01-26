import * as React from "react"
import uuid from "react-uuid"
import { SectionWrapper, Button } from "../styled/layoutStyles"
import TextArea from "./UI/textArea/textArea"
import Carousel from "./UI/carousel/carousel"
import ImageAndText from "./UI/imageandtext/imageAndText"
import { cleanTitle } from "../utils.js"
import { OurOfferingsWrapper, WhoWeAreGrid } from "../styled/layoutStyles"
import BackgroundMedia from "./UI/backgroundMedia/backgroundMedia"


const Section = (props: SectionProps) => {
  const bcgVideo = props
  const { content, title } = props.content
  const theCleanTitle = cleanTitle(title)

  return (
    <SectionWrapper
      className={theCleanTitle}
      backgroundImage={
        props.bgm && props.bgm.file ? props.bgm.file.url : ""
      }
      style={{
        position: bcgVideo ? "relative" : "initial",
      }}
    >
      <BackgroundMedia
        overrideStyle={{ top: "-30rem" }}
        upsideDown
        position="absolute"
        file={bcgVideo}
      />
      {content &&
        content.map((content, i: number) => {
          if (content.__typename === "ContentfulOfferings") {
            const { headerImage, ourOfferings } = content
            return (
              <>
                <div>
                  <img
                    src={headerImage.fluid.src}
                    alt="Offerings"
                  />
                  </div>
                <OurOfferingsWrapper>
                  {ourOfferings.map(entry => {
                    return (
                      <div>
                        <h3>{entry.title}</h3>
                        <TextArea
                          key={uuid()}
                          title={entry.title}
                          content={entry}
                        />
                      </div>
                    )
                  })}
                </OurOfferingsWrapper>
              </>
            )
          }
          if (content.__typename === "ContentfulTwoColumnGrid") {
            return (
              <WhoWeAreGrid>
                {content.leftColumn && (
                  <ImageAndText
                    title={title}
                    key={uuid()}
                    content={content.leftColumn}
                  />
                )}
                {content.rightColumn && (
                  <ImageAndText
                    title={title}
                    key={uuid()}
                    content={content.rightColumn}
                  />
                )}
              </WhoWeAreGrid>
            )
          }
          if (content.__typename === "ContentfulThreeColumnGrid") {
            const { headerImage,  } = content
           
            return (
               <div>
                  <img
                    src={headerImage.fluid.src}
                    alt="Offerings"
                  />
                <WhoWeAreGrid>
                  {content.imageGallery.map(entry => {
                    return (
                      <ImageAndText
                        page="who-we-are"
                        title={title}
                        key={uuid()}
                        content={entry}
                      />
                    )
                  })}
                </WhoWeAreGrid>
              </div>
            )
          }
          if (content.__typename === "ContentfulTextArea") {
            return (
              <TextArea key={uuid()} title={theCleanTitle} content={content} />
            )
          } else if (content.__typename === "ContentfulButton") {
            return (
              <Button key={uuid()} href={content.link}>
                {content.buttonText}
              </Button>
            )
          } else if (content.__typename === "ContentfulCarousel") {
            return <Carousel key={uuid()} content={content} />
          } else if (content.__typename === "ContentfulProjectCarousel") {
            return <Carousel key={uuid()} content={content} />
          } else if (content.__typename === "ContentfulImageGallery") {
            return <ImageAndText title={title} key={uuid()} content={content} />
          }
        })}
    </SectionWrapper>
  )
}

interface SectionProps {
  content: any[]
  title: string
  bgm: object
}

Section.defaultProps = {
  content: [],
  title: "",
  bgm: {},
}

export default Section
