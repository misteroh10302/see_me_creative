import styled from "styled-components"
import {theme, device } from "../../../styled/theme"

export const RegularVideo = styled.div`
    height: initial;
    position: relative;
    .player .vp-title {
        display: none !important;
    }
    // responsive video
    > div > div {
        position: relative;
        display: block;
        height: 0;
        padding: 0;
        overflow: hidden;
        padding-bottom: ${props => props.dimensions === "4x5" ? '125%' : '200%'};
         @media ${device.tablet} {
                padding-bottom: 100%;
         }
        iframe {
            height: 100%;
            top: 0;
            left: 0;
            bottom: 0;
            height: 100%;
            width: 100%;
            border: 0;
            position: absolute;
        }
    }
    @media ${device.tablet} {
        height: 100vh;
    }

`

export const CenterItem = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    height: initial !important;
`
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