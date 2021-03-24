import * as React from "react"
import { VideoContentWrapper } from "./videoContentWrapper"

const VideoContent = (props: VideoContentProps) => {
  return (
    <VideoContentWrapper highlight={props.highlight} className="video-content">
    <div className="video-inner">
        <video width="320" height="240" controls>
          <source src={props.content.videos[0].file.url} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
    </div>
  </VideoContentWrapper>
  )
}

interface VideoContentProps {
  fluid?: object
  highlight?: String
}

VideoContent.defaultProps = {
  fluid: {},
  highlight: ""
}

export default VideoContent
