import styled from "styled-components"
import {theme, device } from "../../../styled/theme"

export const VideoContentWrapper = styled.div`
    padding: 0rem;
    &.video-content-desktop {
        display: none;
    }
    .video-inner > div {
        height: 47vw !important;
    }
    video,iframe {
        object-fit: contain !important;
    }   
    @media ${device.tablet} {
        .video-inner > div {
            height: 54vw !important;
        }
        video,iframe {
            object-fit: cover !important;
        }  
        padding:0;
        &.video-content-mobile {
            display: none;
        }
        &.video-content-desktop {
            display: block;
        }
    }

`