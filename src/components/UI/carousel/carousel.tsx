import { Link } from "gatsby"
import * as React from "react"
import { useState } from "react"
import uuid from "react-uuid"
import Img from "gatsby-image"
import styled from "styled-components"
import { mySlug } from "../../../utils.js"

import { CarouselWrapper } from "./carouselWrapper.tsx"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import Swiper from "react-id-swiper"
import { SwiperWrapper } from "../../../styled/layoutStyles"
import Masonry from "react-masonry-css"
import { Button } from "../../../styled/layoutStyles"

const BackgroundFade = styled.div`
  width: 100%;
  /* transform: translateY(-100%); */
  background-image: linear-gradient(transparent, black);
  padding: 13rem 0 1.5rem;
    position: relative;
    margin-top: -130px !important;
`

const MyCarousel = (props: CarouselProps) => {
  const [numberOfPosts, setNumberOPosts] = useState({
    number: 7,
    buttonText: "MORE",
  })

  const updateMorePosts = () => {
      window.location = "/our-work"
  }

  if (props.content.__typename === "ContentfulCarousel") {
    const { carouselMedia } = props.content
    return (
      <CarouselWrapper>
        <Carousel
          emulateTouch={true}
          selectedItem={0}
          showArrows={false}
          showStatus={true}
          swipeScrollTolerance={5}
          swipeable={true}
          showThumbs={false}
        >
          {carouselMedia &&
            carouselMedia.map((image, i) => {
              return (
                <div key={uuid()}>
                  <Img
                    fluid={image.fluid}
                    objectFit="contain"
                    objectPosition="top center"
                  />
                </div>
              )
            })}
        </Carousel>
      </CarouselWrapper>
    )
  } else {
    const { projects } = props.content

    const breakpointColumnsObj = {
      default: 3,
      1100: 3,
      700: 3,
      500: 1,
    }

    return (
      <>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {projects &&
            projects.map((project, i) => {
              if (i < numberOfPosts.number) {
                return (
                  <Link to={`/project/${mySlug(project.title)}`} key={uuid()}>
                
                    {project.thumbnailMedia.file.contentType.includes(
                      "video"
                    ) ? (
                      <>
                        <video width="100%" height="700px" muted autoPlay>
                          <source
                            src={project.thumbnailMedia.file.url}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                        <div className="project-title"><h4>{project.title}</h4></div>
                      </>
                    ) : (
                      <>
                        <Img
                          fluid={project.thumbnailMedia.fluid}
                          objectFit="cover"
                          style={{ maxHeight: "550px", marginBottom: "3rem" }}
                        />
                        <div className="project-title"><h4>{project.title}</h4></div>
                      </>
                    )}
                  </Link>
                )
              }
            })}
        </Masonry>
        <BackgroundFade>
          <Button onClick={updateMorePosts}>{numberOfPosts.buttonText}</Button>
        </BackgroundFade>
      </>
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
