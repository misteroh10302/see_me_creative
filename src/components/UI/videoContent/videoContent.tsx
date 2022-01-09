import * as React from "react"
import { VideoContentWrapper } from "./videoContentWrapper"
import ReactPlayer from "react-player"

const VideoContent = (props: VideoContentProps) => {
  const image = <img src="http://simpleicon.com/wp-content/uploads/play1.png" />;
  const url = `https://player.vimeo.com/video/${props.content.vimeoId}`
  if (props.content.vimeoId) {
    return (
      <VideoContentWrapper highlight={props.highlight} className="video-content">
        <div className="video-inner">
        <ReactPlayer
          url={url}
          controls={true}
          width="100%"
          height="54vw"
          config={{
            vimeo: {
              playerVars: { showinfo: 1 }
            }
          }}
        />
       </div>
      </VideoContentWrapper>
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
