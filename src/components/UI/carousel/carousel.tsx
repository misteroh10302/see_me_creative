import { Link } from "gatsby"
import * as React from "react"
import { useState } from "react"
import Img from "gatsby-image"

import { CarouselWrapper } from "./CarouselWrapper"

const Carousel = (props: CarouselProps) => {
  const [index,setIndex] = useState(0);
  
  if (props.content.__typename === "ContentfulCarousel") {
    const { carouselMedia } = props.content;
    return (
      <CarouselWrapper>
          {carouselMedia && carouselMedia.map((image,i) => {
              if (i === index)  return <Img fluid={image.fluid} />
          })}
      </CarouselWrapper>
    )
  } else {
    const { projects } = props.content;
    return (
      <CarouselWrapper>
          {projects && projects.map((project,i) => {
              if (i === index) {
                 return (
                   <div>
                      <Img fluid={project.backgroundMedia.fluid} />
                      <h4>{project.title}</h4>
                      <p>{project.tags.join(', ')}</p>
                    </div>
                 )
              }
          })}
      </CarouselWrapper>
    )
  }
  
}

interface CarouselProps {
  content: object
}

Carousel.defaultProps = {
  content: {},
}

export default Carousel
