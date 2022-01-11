import * as React from "react"
import Img from "gatsby-image"
import uuid from "react-uuid"

import { BackgroundMediaWrapper } from "./backgroundMediaStyled"

const BackgroundMedia = (props: BackgroundMediaProps) => {
  const { position } = props;
  let styles = {}
  if (props.upsideDown) {
    styles = {
      transform: `translateY(-10rem) rotate(-180deg)`,
      left: '-30rem',
      width:  '140vw',
      height:  '150vh',
      opacity:0.5,
      top: "-40rem",
      zIndex: '0'
    }
  }
  return (
    <BackgroundMediaWrapper position={position} key={uuid()} styles={styles}>
      {props.vimeoId ? (
        <div className="video-background">
          <iframe
            background={true}
            autoPlay
            muted={true}
            frameBorder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowFullScreen
            playsInline
            src={`https://player.vimeo.com/video/${props.vimeoId}?embedparameter=value&autoplay=1&loop=1&muted=1&controls=false&transparent=false`}
          />
        </div>
      ) : props.file.contentType && props.file.contentType.includes("video") ? (
        <div key={uuid()}>
          <video
            autoPlay
            muted={true}
            style={{ width: "100vw", height: "100vh", ...styles }}
            width="800"
            loop={true}
            playsInline
          >
            <source src={props.file.url} type="video/mp4" />
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
  position?: string
  upsideDown?: boolean
}

BackgroundMedia.defaultProps = {
  fluid: {},
  file: {},
  position: "relative",
  upsideDown: false
}

export default BackgroundMedia
