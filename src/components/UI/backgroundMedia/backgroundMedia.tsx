import * as React from "react"
import Img from "gatsby-image"
import uuid from "react-uuid"

import { BackgroundMediaWrapper } from "./backgroundMediaStyled"
import ReactPlayer from "react-player"
import { useWindowSize } from "../../utils"

const BackgroundMedia = (props: BackgroundMediaProps) => {
  const {
    position,
    vimeoId,
    vimeoIdMobile,
    overrideStyle,
    className,
    regularBackgroundVideoMobile,
    regularBackgroundVideoDesktop,
    poster,
  } = props

  let styles = {
    ...(overrideStyle && { ...overrideStyle }),
  }
  if (props.upsideDown) {
    styles = {
      transform: `translateY(-10rem) rotate(-180deg)`,
      left: "0",
      width: "100%",
      height: "initial",
      opacity: 1,
      top: "0",
      zIndex: "0",
      ...(overrideStyle && { ...overrideStyle }),
    }
  }
  const isMobile = useWindowSize()

  let thePosterImage = poster

  if (poster && poster.desktop) {
    thePosterImage = isMobile.width < 768 ? poster.mobile : poster.desktop
  }

  let regularVideo = {}
  if (regularBackgroundVideoDesktop) {
    regularVideo.desktop = regularBackgroundVideoDesktop
  }

  if (regularBackgroundVideoMobile) {
    regularVideo.mobile = regularBackgroundVideoMobile
  }

  let regularBCGImage =
    isMobile.width < 768 && regularBackgroundVideoMobile
      ? regularVideo.mobile.file.url
      : regularBackgroundVideoDesktop
      ? regularVideo.desktop.file.url
      : null
 
  return (
    <BackgroundMediaWrapper
      position={position}
      className={className}
      key={uuid()}
      styles={styles}
    >
      {regularBackgroundVideoDesktop && (
        <div
          className={`video-background`}
          style={{
            backgroundImage: `url(${thePosterImage.fluid.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className={`${
              isMobile.width < 768 ? "mobile" : "desktop"
            }-video-background`}
          >
            <video
              autoPlay={true}
              muted={true}
              style={{
                width: "100vw",
                height: isMobile.width < 768 ? "initial" : "100vh",
                ...styles,
              }}
              width="800"
              loop={true}
              playsInline={true}
              controls={false}
            >
              <source src={`https:${regularBCGImage}`} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </div>
      )}
      {!regularBackgroundVideoDesktop && vimeoId ? (
        <div
          className={`video-background`}
          style={{
            backgroundImage: `url(${thePosterImage.fluid.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
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
        <div key={uuid()} className="bcg-video">
          <video
            autoPlay={true}
            muted={true}
            style={{ width: "100vw", height: "100vh", ...styles }}
            width="800"
            loop={true}
            playsInline={true}
            controls={false}
          >
            <source src={`https:${props.file.url}`} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      ) : (
        <img src={props.fluid.src} srcSet={props.fluid.srcset} />
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
  poster?: any
}

BackgroundMedia.defaultProps = {
  fluid: {},
  file: {},
  position: "relative",
  upsideDown: false,
  title: undefined,
}

export default BackgroundMedia
