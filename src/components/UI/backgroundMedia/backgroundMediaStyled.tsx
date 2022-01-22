import styled from "styled-components"
import { device } from "../../../styled/theme"

export const BackgroundMediaWrapper = styled.section`
  position: ${props => props.position};
  ${props => ({ ...props.styles })};
  &.who-we-are-header {
    video {
      object-fit: contain !important;
    }
  }
  .desktop-video-background {
    display: none;
  }
  @media ${device.tablet} {
    .mobile-video-background {
      display: none;
    }
    .desktop-video-background {
      display: block;
    }
  }
`
