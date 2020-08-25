import { Link } from "gatsby"
import * as React from "react"
import Img from "gatsby-image"

import { BackgroundMediaWrapper } from "./BackgroundMediaStyled"

const BackgroundMedia = (props: BackgroundMediaProps) => {
  return (
    <BackgroundMediaWrapper>
        <Img fluid={props.fluid} />
        {props.children}
    </BackgroundMediaWrapper>
  )
}

interface BackgroundMedia {
  fluid?: object
}

BackgroundMedia.defaultProps = {
  fluid: {},
}

export default BackgroundMedia
