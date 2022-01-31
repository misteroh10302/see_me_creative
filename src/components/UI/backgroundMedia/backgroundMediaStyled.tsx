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
      /* This used to work for the parent element of button divs */
    /* But it does not work with newer browsers, the below doesn't hide the play button parent div */

    *::-webkit-media-controls-panel {
      display: none!important;
      -webkit-appearance: none;
    }
    *::-webkit-media-controls-panel {
  display: none!important;
 -webkit-appearance: none;
}

/* Old shadow dom for play button */

*::--webkit-media-controls-play-button {
  display: none!important;
  -webkit-appearance: none;
}

/* New shadow dom for play button */

/* This one works */

*::-webkit-media-controls-start-playback-button {
  display: none!important;
  -webkit-appearance: none;
}

    /* Old shadow dom for play button */

    *::-webkit-media-controls-play-button {
      display: none!important;
      -webkit-appearance: none;
    }

    /* New shadow dom for play button */

    /* This one works! */

    *::-webkit-media-controls-start-playback-button {
      display: none!important;
      -webkit-appearance: none;
    }
  .desktop-video-background {
    display: none;
  }
  .mobile-video-background {
    video {
      height: initial !important;
    }
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
