import * as React from "react"
import { VideoContentWrapper } from "./videoContentWrapper"
import ReactPlayer from "react-player"

const VideoContent = (props: VideoContentProps) => {
  const image = <img src="http://simpleicon.com/wp-content/uploads/play1.png" />;
  return (
    <VideoContentWrapper highlight={props.highlight} className="video-content">
      <div className="video-inner">
        <ReactPlayer
          controls={true}
          light={false}
          playIcon={image}
          url={props.content.videos[0].file.url}
        />

        {/* <video width="320" height="240" controls>
          <source src={props.content.videos[0].file.url} type="video/mp4"/>
          Your browser does not support the video tag.
        </video> */}
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
