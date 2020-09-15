import { Link } from "gatsby"
import * as React from "react"
import { useState } from "react"
import Img from "gatsby-image"

import { CarouselWrapper } from "./CarouselWrapper"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
const DemoCarousel = () => {
        return (
            <Carousel showArrows={true} >
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="assets/4.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="assets/5.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="assets/6.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
    
}
;
const MyCarousel = (props: CarouselProps) => {
  const [index,setIndex] = useState(0);
  const nextSlideProjects = () => {
    if (index < props.content.projects.length -1) {
      let increaseIndex = index + 1;
      setIndex(increaseIndex)
    }
    else {
      setIndex(0)
    }
  }
  const prevSlideProjects = () => {
    if (index > 0) {
      let decreaseIndex = index - 1;
      setIndex(decreaseIndex)
    }
    else {
      setIndex(props.content.projects.length - 1)
    }
  }
  
  if (props.content.__typename === "ContentfulCarousel") {
    const { carouselMedia } = props.content;
    
    return (
      <CarouselWrapper>
        <Carousel 
          emulateTouch={true} 
          selectedItem={0} 
          showArrows={false} 
          showStatus={true} 
          swipeScrollTolerance={5} swipeable={true} showThumbs={false}>
          {carouselMedia && carouselMedia.map((image,i) => {
              return  <div> <img src={image.fluid.src} /> </div>
          })}
          </Carousel>
        </CarouselWrapper>
    )
  } else {
    const { projects } = props.content;

    return (
      <CarouselWrapper className="projects-wrap">
          {/* <button onClick={nextSlideProjects} className="next"></button>
          <button onClick={prevSlideProjects} className="previous"></button> */}
          <Carousel 
          emulateTouch={true} 
          selectedItem={0} 
          showArrows={false} 
          showStatus={true} 
          swipeScrollTolerance={5} 
          centerSlidePercentage={80}
          
          swipeable={true} 
          showThumbs={false}>
          {projects && projects.map((project,i) => {
              return (
                <div> 
                  <img src={project.thumbnailMedia.fluid.src} /> 
                  <h4>{project.title}</h4>
                        <p>{project.tags.join(', ')}</p>
                </div>
              )
          })}
          </Carousel>
            {/* {projects && projects.map((project,i) => {
                if (i === index) {
                  return (
                    <div>
                        <Img fluid={project.backgroundMedia.fluid} />
                        <h4>{project.title}</h4>
                        <p>{project.tags.join(', ')}</p>
                      </div>
                  )
                }
            })} */}
      </CarouselWrapper>
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
