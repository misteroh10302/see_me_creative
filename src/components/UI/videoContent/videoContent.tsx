import * as React from "react"
import Img from "gatsby-image"
import uuid from "react-uuid"


const VideoContent = (props: VideoContentProps) => {
  return (
    <div className="video-content">
    <p>
      <b>Watch Now</b>
    </p>
    <div className="video-inner">
    <video width="320" height="240" controls>
            <source src={props.content.videos[0].file.url} type="video/mp4"/>
            Your browser does not support the video tag.
            </video>
      {/* <iframe
        src={props.content.videos[0].file.url}
        title={'My Video'}
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      /> */}
    </div>
  </div>
  )
}

interface VideoContentProps {
  fluid?: object
}

VideoContent.defaultProps = {
  fluid: {},
}

export default VideoContent
