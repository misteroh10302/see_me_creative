import * as React from "react"
import Img from "gatsby-image"
import uuid from "react-uuid"

import { BackgroundMediaWrapper } from "./backgroundMediaStyled"
import ReactPlayer from "react-player"

const BackgroundMedia = (props: BackgroundMediaProps) => {
  const { position, vimeoId, vimeoIdMobile, overrideStyle } = props
  let styles = {...(overrideStyle && { ...overrideStyle })}
  if (props.upsideDown) {
    styles = {
      transform: `translateY(-10rem) rotate(-180deg)`,
      left: "-25rem",
      width: "100%",
      height: "initial",
      opacity: 1,
      top: "-30rem",
      zIndex: "0",
      ...(overrideStyle && { ...overrideStyle }),
    }
  }

  return (
    <BackgroundMediaWrapper position={position} key={uuid()} styles={styles}>
      {vimeoId ? (
        <div className={`video-background`}>
          <ReactPlayer
            url={`https://player.vimeo.com/video/${vimeoId}`}
            width="100%"
            height="54vw"
            loop={true}
            playsInline
            playing={true}
            muted={true}
            controls={false}
            className={vimeoIdMobile && "desktop-video-background"}
            config={{
              vimeo: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
          {vimeoIdMobile && (
            <ReactPlayer
              url={`https://player.vimeo.com/video/${vimeoIdMobile}`}
              width="100%"
              height="54vw"
              loop={true}
              playsinline
              playing={true}
              muted={true}
              controls={false}
              className={vimeoIdMobile && "mobile-video-background"}
              config={{
                vimeo: {
                  playerVars: { showinfo: 1 },
                },
              }}
            />
          )}
        </div>
      ) : props.file.contentType && props.file.contentType.includes("video") ? (
        <div key={uuid()}>
          <video
            autoPlay={true}
            muted={true}
            style={{ width: "100vw", height: "100vh", ...styles }}
            width="800"
            loop={true}
            playsInline={true}
          >
            <source src={`https:${props.file.url}`} type="video/mp4" />
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
  title: string
  overrideStyle?: any
}

BackgroundMedia.defaultProps = {
  fluid: {},
  file: {},
  position: "relative",
  upsideDown: false,
  title: undefined,
}

export default BackgroundMedia
