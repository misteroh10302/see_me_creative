import * as React from "react"
import Img from "gatsby-image"
import uuid from "react-uuid"

import { BackgroundMediaWrapper } from "./backgroundMediaStyled"

const BackgroundMedia = (props: BackgroundMediaProps) => {
  console.log(props)
  return (
    <BackgroundMediaWrapper key={uuid()}>
      {props.vimeoId ? 
         <div className="video-background">
         <iframe
           background={true}
           autoPlay
           muted={true}
           frameborder="0" 
           webkitallowfullscreen 
           mozallowfullscreen 
           allowfullscreen
           src={`https://player.vimeo.com/video/${props.vimeoId}?embedparameter=value&autoplay=1&loop=1&muted=1&controls=false`}
         />
</div>
      
      : props.file.contentType && props.file.contentType.includes("video") ? (
        <div  key={uuid()}>
        <video autoPlay muted={true} style={{width: "100vw", height: "100vh"}} width="800">
          <source src={props.file.url}
                  type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      ) : (
        <Img fluid={props.fluid} />
      )}

      {props.children}
    </BackgroundMediaWrapper>
  )
}

interface BackgroundMediaProps {
  fluid?: object
  file?: object
}

BackgroundMedia.defaultProps = {
  fluid: {},
  file: {},
}

export default BackgroundMedia
