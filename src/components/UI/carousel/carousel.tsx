import { Link } from "gatsby"
import * as React from "react"
import { useState } from "react"
import uuid from 'react-uuid'
import Img from "gatsby-image"

import { CarouselWrapper } from "./CarouselWrapper"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Swiper from 'react-id-swiper';
import { SwiperWrapper } from '../../../styled/layoutStyles';

const MyCarousel = (props: CarouselProps) => {
  const [index,setIndex] = useState(0);

  if (props.content.__typename === "ContentfulCarousel") {
    const { carouselMedia } = props.content;
    
    return (
      <CarouselWrapper>
        <Carousel 
          emulateTouch={true} 
          selectedItem={0} 
          showArrows={false} 
          showStatus={true} 
          swipeScrollTolerance={5} 
          swipeable={true} 
          showThumbs={false}>
          {carouselMedia && carouselMedia.map((image,i) => {
            console.log
              return  <div key={uuid()}> 
                  <Img 
                        fluid={image.fluid} 
                        objectFit="contain"
                        objectPosition="top center"
                                              
                        /> 
            </div>
          })}
          </Carousel>
        </CarouselWrapper>
    )
  } else {
    const { projects } = props.content;

    const params = {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      loopFillGroupWithBlank: true,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    }

    return (
      <SwiperWrapper className="projects-wrap">
          <Swiper  {...params}>
            {projects && projects.map((project,i) => {
                return (
                  <div key={uuid()}> 
                      <Img 
                        fluid={project.thumbnailMedia.fluid} 
                        objectFit="cover"
                        objectPosition="top center"
                        style={{
                          maxHeight: "70vh"
                                                }}
                        /> 
                      <h4>{project.title}</h4>
                      <p>{project.tags && project.tags.join(', ')}</p>
                  </div>
                )
            })}
          </Swiper>
      </SwiperWrapper>
    )
  }
  
}

interface CarouselProps {
  content: object
}

MyCarousel.defaultProps = {
  content: {},
}

export default MyCarousel
