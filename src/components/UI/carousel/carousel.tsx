/* eslint-disable prettier/prettier */
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
import Masonry from "react-masonry-css"
import { Button, ThumbnailVideoWrapper } from "../../../styled/layoutStyles"
import { device } from "../../../styled/theme"

const BackgroundFade = styled.div`
  width: 100%;
  background-image: linear-gradient(transparent, black);
  padding: 1.5rem 0rem 0;
  @media ${device.laptop} {
    padding: 4.5rem 0 1.5rem;
  }
`

const MyCarousel = (props: CarouselProps) => {
  const [numberOfPosts, setNumberOPosts] = useState({
    number: 7,
    buttonText: "MORE",
  })

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
            projects.map((project: any, i: number) => {
              const { clientLogo, clientName, thumbnailMediaBackgroundImage } = project;
              console.log(project)
              if (i < numberOfPosts.number) {
                return (
                  <Link to={`/project/${mySlug(project.clientName)}-${mySlug(project.title)}`} key={uuid()}>
                    {project.thumbnailMedia.file.contentType.includes(
                      "video"
                    ) ? (
                      <>
                      <ThumbnailVideoWrapper>
                        <div className="thumbnail-vid-outer">
                          <video width="100%" height="100%" preload="none" muted autoPlay loop playsInline poster={thumbnailMediaBackgroundImage ? thumbnailMediaBackgroundImage.fluid.src : ''}>
                            <source
                              src={project.thumbnailMedia.file.url}
                              type="video/mp4"
                          
                            />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div className="project-title">
                            {clientLogo && (
                              <img src={clientLogo.fluid.src} width={90} alt={`Logo for ${clientName}`}/>
                            )}
                          <h4><span className="client-name-mobile">{clientName}: </span>{project.title}</h4>
                        </div>
                      </ThumbnailVideoWrapper>
                       <h4 className="video-project-name-mobile"><span className="client-name-mobile">{clientName}: </span>{project.title}</h4>
                      </>
                    ) : (
                      <>
                        <Img
                          fluid={project.thumbnailMedia.fluid}
                          objectFit="cover"
                          loading="eager"
                          style={{ marginBottom: "3rem" }}
                        />
                        <div className="project-title">
                            {clientLogo && (
                              <img src={clientLogo.fluid.src} width={90} alt={`Logo for ${clientName}`}/>
                            )}
                            <h4><span className="client-name-mobile">{clientName}: </span>{project.title}</h4>
                        </div>
                      </>
                    )}
                  </Link>
                )
              }
            })}
        </Masonry>
        <BackgroundFade>
          <Button href="/our-work">{numberOfPosts.buttonText}</Button>
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
