import styled from "styled-components"
import {theme, device } from "../../../styled/theme"

export const VideoContentWrapper = styled.div`
    padding: 0rem;
    &.video-content-desktop {
        display: none;
    }
    @media ${device.tablet} {
        padding:0;
        &.video-content-mobile {
            display: none;
        }
        &.video-content-desktop {
            display: block;
        }
    }

`