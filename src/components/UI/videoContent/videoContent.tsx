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
  const { autoPlayVideo, vimeoId, playbutton } = props.content
  const { dimensions } = props
  console.log(autoPlayVideo)
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
 
  return (
    <RegularVideo dimensions={dimensions}>
      <ReactPlayer
        url={`https://player.vimeo.com/video/${vimeoId}`}
        width="100%"
        height="100%"
        playing={playing}
        muted={playing}
        playsinline={true}
        onClickPreview={pause}
        loop
        controls
        onPlay={play}
        onPause={pause}
        config={{
          vimeo: {
            playerVars: { showinfo: 0 },
          },
        }}
      />
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
const VideoContent = (props: VideoContentProps) => {
  const [paused, setPaused] = useState(false)

  const [pausedMobile, setPausedMobile] = useState(false)

  const { autoPlayVideo, vimeoId, vimeoIdMobile, playbutton } = props.content
  const image = <img src="http://simpleicon.com/wp-content/uploads/play1.png" />
  const url = `https://player.vimeo.com/video/${props.content.vimeoId}`
  let desktopClass = ""
  let mobileVideo = null
  const autoPlay =
    autoPlayVideo === null || autoPlayVideo === false ? false : true

  const [playing, setPlaying] = React.useState(true)
  const play = () => {
    setPlaying(true)
    setPaused(false)
  }
  const pause = () => {
    setPlaying(false)
    setPaused(true)
  }

  const [playingMobile, setPlayingMobile] = React.useState(true)
  const playMobile = () => {
    setPlayingMobile(true)
    setPausedMobile(false)
  }
  const pauseMobile = () => {
    setPlayingMobile(false)
    setPausedMobile(true)
  }

  if (vimeoId) {
    if (vimeoIdMobile) {
      desktopClass = "video-content-desktop"
      mobileVideo = (
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
              muted={true}
              loop={true}
              light={!autoPlay ? true : false }
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
            {paused && (
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
    return (
      <>
        {mobileVideo}
        <VideoContentWrapper
          highlight={props.highlight}
          className={`video-content ${desktopClass}`}
        >
          <div className="video-inner">
            <ReactPlayer
              url={url}
              width="100%"
              height="54vw"
              playing={playing}
              loop={true}
              muted={true}
              controls={!autoPlay}
              light={!autoPlay ? true : false }
              playIcon={<PlayButton highlight={props.highlight} />}
              onPlay={play}
              onPause={pause}
              config={{
                vimeo: {
                  playerVars: { showinfo: 0 },
                },
              }}
            />
            {paused && (
              <span>
                <CenterItem
                  style={{ height: "100% !important" }}
                  onClick={play}
                >
                  <PlayButton highlight={props.highlight} />
                </CenterItem>
              </span>
            )}
          </div>
        </VideoContentWrapper>
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
