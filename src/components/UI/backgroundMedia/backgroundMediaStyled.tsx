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
  video::-webkit-media-controls {
      opacity: 0 !important;
  }
   
  .desktop-video-background {
    display: none;
  }
  .mobile-video-background {
    video {
      height: initial !important;
    }
  }
 
  .bcg-video-desktop-asset {
    display: none;
  }
  @media ${device.tablet} {
    .mobile-video-background {
      display: none;
    }
    .bcg-video-desktop-asset {
      display: block;
    }
    .desktop-video-background {
      display: block;
    }
     .bcg-video-mobile-image {
      display: none;
    }
  }
`
