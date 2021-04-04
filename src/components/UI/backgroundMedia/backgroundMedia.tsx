import * as React from "react"
import Img from "gatsby-image"
import uuid from "react-uuid"

import { BackgroundMediaWrapper } from "./backgroundMediaStyled"

const BackgroundMedia = (props: BackgroundMediaProps) => {
  return (
    <BackgroundMediaWrapper key={uuid()}>
      {props.file.contentType && props.file.contentType.includes("video") ? (
        <div  key={uuid()}>
        <video autoPlay muted={true} style={{width: "100vw", height: "100vh"}} width="800">
          <source src={props.file.url}
                  type="video/mp4" />
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
}

BackgroundMedia.defaultProps = {
  fluid: {},
  file: {},
}

export default BackgroundMedia
