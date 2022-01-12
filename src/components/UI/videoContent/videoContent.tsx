import * as React from "react"
import { VideoContentWrapper } from "./videoContentWrapper"
import ReactPlayer from "react-player"

const VideoContent = (props: VideoContentProps) => {
  const { autoPlayVideo, vimeoId, vimeoIdMobile} = props.content;
  const image = <img src="http://simpleicon.com/wp-content/uploads/play1.png" />;
  const url = `https://player.vimeo.com/video/${props.content.vimeoId}`
  let desktopClass = ''
  let mobileVideo = null;
  const autoPlay = autoPlayVideo === null ||  autoPlayVideo === false ? false : true;
  
  if (vimeoId) {
    if (vimeoIdMobile) {
      desktopClass = "video-content-desktop"
       mobileVideo = <VideoContentWrapper highlight={props.highlight} className="video-content video-content-mobile">
        <div className="video-inner">
          <ReactPlayer
            url={`https://player.vimeo.com/video/${vimeoIdMobile}`}
            width="100%"
            height="54vw"
            playing={true}
            muted={true}
            loop={autoPlay}
            controls={!autoPlay}
            playsinline={true}
            config={{
              vimeo: {
                playerVars: { showinfo: 1 }
              }
            }}
          />
      </div>
      </VideoContentWrapper>
    }
    return (
      <>
      {mobileVideo}
      <VideoContentWrapper highlight={props.highlight} className={`video-content ${desktopClass}`}>
        <div className="video-inner">
        <ReactPlayer
          url={url}
          width="100%"
          height="54vw"
          playing={autoPlay}
          loop={autoPlay}
          muted={autoPlay}
          controls={!autoPlay}
        
          config={{
            vimeo: {
              playerVars: { showinfo: 1 }
            }
          }}
        />
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
