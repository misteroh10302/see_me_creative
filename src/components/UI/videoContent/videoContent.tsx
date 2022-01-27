import * as React from "react"
import {
  VideoContentWrapper,
  PlayButtonWrapper,
  RegularVideo,
  CenterItem,
} from "./videoContentWrapper"
import ReactPlayer from "react-player"
import { useState } from "react"

const PlayButton = ({ highlight }) => {
  return (
    <PlayButtonWrapper highlight={highlight}>
      <span>&#9658;</span>
    </PlayButtonWrapper>
  )
}

export const VideoContentRegular = (props: any) => {
  
  const { autoPlayVideo, vimeoId, playbutton, image } = props.content
  const { dimensions } = props
 
  const autoPlay =
    !!autoPlayVideo === false || autoPlayVideo === false ? false : true
 
  const [paused, setPaused] = useState(true)

  const [playing, setPlaying] = React.useState(autoPlay)

  const play = () => {
    setPlaying(true)
    setPaused(false)
  }
  const pause = () => {
    setPlaying(false)
    setPaused(true)
  }

  let url = ''
  if (vimeoId) {
    url = `https://player.vimeo.com/video/${vimeoId}`;
  } else if (image) {
    url = image.file.url;
  }
  
  return (
    <RegularVideo dimensions={dimensions}>
      {vimeoId ? (<ReactPlayer
        url={url}
        width="100%"
        height="100%"
        playing={playing}
        muted={autoPlay}
        playsinline={true}
        onClickPreview={pause}
        loop
        controls={image ? false : true}
        onPlay={play}
        onPause={pause}
        config={{
          vimeo: {
            playerVars: { showinfo: 0 },
          },
        }}
      />)
      : (<ReactPlayer
        url={url}
        width="100%"
        height="100%"
        playing={true}
        muted={true}
        playsinline={true}
        onClickPreview={pause}
        loop
        controls={image ? false : true}
        onPlay={play}
        onPause={pause}
        config={{
          vimeo: {
            playerVars: { showinfo: 0 },
          },
        }}
      />
  )}
      
      {paused && (
        <span>
          <CenterItem onClick={play}>
            <PlayButton highlight={props.highlight} />
          </CenterItem>
        </span>
      )}
    </RegularVideo>
  )
}

const VideoContentMobile = props => {
  const { autoPlay, vimeoBackgroundPlaceholderMobile, vimeoIdMobile } = props

  const [pausedMobile, setPausedMobile] = useState(false)

  const [playingMobile, setPlayMobile] = useState(false)

  const playMobile = () => {
    setPlayMobile(true)
    setPausedMobile(false)
  }
  const pauseMobile = () => {
    setPlayMobile(false)
    setPausedMobile(true)
  }

  return (
    <VideoContentWrapper
      highlight={props.highlight}
      className="video-content video-content-mobile"
    >
      <div className="video-inner">
        <ReactPlayer
          url={`https://player.vimeo.com/video/${vimeoIdMobile}`}
          width="100%"
          height="54vw"
          playing={playingMobile}
          muted={autoPlay}
          loop={true}
          light={
            !autoPlay && vimeoBackgroundPlaceholderMobile
              ? vimeoBackgroundPlaceholderMobile.fluid.src
              : !autoPlay
              ? true
              : false
          }
          controls={!autoPlay}
          playsinline={true}
          onPlay={playMobile}
          onPause={pauseMobile}
          playIcon={<PlayButton highlight={props.highlight} />}
          config={{
            vimeo: {
              playerVars: { showinfo: 1 },
            },
          }}
        />
        {pausedMobile && (
          <span>
            <CenterItem
              style={{ height: "100% !important" }}
              onClick={playMobile}
            >
              <PlayButton highlight={props.highlight} />
            </CenterItem>
          </span>
        )}
      </div>
    </VideoContentWrapper>
  )
}

const VideoContentDesktop = props => {
  const {
    highlight,
    desktopClass,
    url,
    autoPlay,
    vimeoBackgroundPlaceholderDesktop,
  } = props

  const [playing, setPlaying] = React.useState(true)
  const [paused, setPaused] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)

  const play = () => {
    setPlaying(true)
    setPaused(false)
  }
  const pause = () => {
    setPlaying(false)
    setPaused(true)
  }

  return (
    <VideoContentWrapper
      highlight={highlight}
      className={`video-content ${desktopClass} video-is-${
        hasLoaded ? "playing" : "paused"
      }`}
    >
      <div className="video-inner">
        <ReactPlayer
          url={url}
          width="100%"
          height="54vw"
          playing={playing}
          loop={true}
          muted={autoPlay}
          controls={!autoPlay}
          playIcon={<PlayButton highlight={highlight} />}
          onPlay={play}
          onPause={pause}
          onReady={() =>
            setTimeout(() => {
              setHasLoaded(true)
            }, 1000)
          }
          light={
            !autoPlay && vimeoBackgroundPlaceholderDesktop
              ? vimeoBackgroundPlaceholderDesktop.fluid.src
              : !autoPlay
              ? true
              : false
          }
          config={{
            vimeo: {
              playerVars: { showinfo: 0 },
            },
          }}
        />
        {paused && (
          <span>
            <CenterItem style={{ height: "100% !important" }} onClick={play}>
              <PlayButton highlight={props.highlight} />
            </CenterItem>
          </span>
        )}
      </div>
    </VideoContentWrapper>
  )
}

const VideoContent = (props: VideoContentProps) => {
  const {
    autoPlayVideo,
    vimeoId,
    vimeoIdMobile,
    playbutton,
    vimeoBackgroundPlaceholderDesktop,
    vimeoBackgroundPlaceholderMobile,
  } = props.content
  const image = <img src="http://simpleicon.com/wp-content/uploads/play1.png" />
  const url = `https://player.vimeo.com/video/${props.content.vimeoId}`
  let desktopClass = ""
  let mobileVideo = null

  const autoPlay =
    autoPlayVideo === null || autoPlayVideo === false ? false : true

  if (vimeoId) {
    if (vimeoIdMobile) {
      desktopClass = "video-content-desktop"
      mobileVideo = (
        <VideoContentMobile
          vimeoBackgroundPlaceholderMobile={vimeoBackgroundPlaceholderMobile}
          highlight={props.highlight}
          autoPlay={autoPlay}
          vimeoIdMobile={vimeoIdMobile}
        />
      )
    }

    return (
      <>
        {mobileVideo}
        <VideoContentDesktop
          vimeoBackgroundPlaceholderDesktop={vimeoBackgroundPlaceholderDesktop}
          autoPlay={autoPlay}
          highlight={props.highlight}
          url={url}
        />
      </>
    )
  }

  return (
    <VideoContentWrapper highlight={props.highlight} className="video-content">
      <div className="video-inner">
        <ReactPlayer
          controls={true}
          light={false}
          playIcon={image}
          url={props.content.videos[0].file.url}
        />
      </div>
    </VideoContentWrapper>
  )
}

interface VideoContentProps {
  fluid?: object
  highlight?: string
}

VideoContent.defaultProps = {
  fluid: {},
  highlight: "",
}

export default VideoContent
