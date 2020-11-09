import * as React from "react"
import Img from "gatsby-image"
import uuid from 'react-uuid'

import { BackgroundMediaWrapper } from "./BackgroundMediaStyled.tsx"

const BackgroundMedia = (props: BackgroundMediaProps) => {
  return (
    <BackgroundMediaWrapper key={uuid()}>
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
