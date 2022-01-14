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

export const PlayButtonWrapper = styled.button`
    height: 100px;
    width: 100px;
    border-radius: 100%;
    display: inline-block;
    border: 0px solid white;
    cursor: pointer;
    background-color: ${props => theme.colors[props.highlight] || 'transparent' };
    transition: all 250ms ease;
    span {
        font-size: 6rem;
        transform: translateY(90%) translateX(10%);
        display: inline-block;
        color: white;
    }
    &:hover {
        background-color: black;
    }
`