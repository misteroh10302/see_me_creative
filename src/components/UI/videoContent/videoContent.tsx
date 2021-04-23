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
          config={{
            vimeo: {
              playerVars: { showinfo: 1 }
            }
          }}
        />
          <iframe
           background={false}
           muted={true}
           frameborder="0" 
           webkitallowfullscreen 
           mozallowfullscreen 
           allowfullscreen
           width="100%"
           src={`https://player.vimeo.com/video/${props.content.vimeoId}`}
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
