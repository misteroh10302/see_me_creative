import styled from "styled-components"
import { device } from "../../../styled/theme"

export const CarouselWrapper = styled.div`
    text-align: center;
    &.projects-wrap {
        .gatsby-image-wrapper {
            min-height: 90vh;
        }
    }
    cursor: grab;
    > div {
        cursor: grab;
    }
    h4 {
        color: white;
        font-family: ${props => props.theme.font.serif}, serif;
        font-size: ${props => props.theme.heading1.fontSize};
        font-weight: 100;
        margin: .5rem 0;
    }
    p {
        color: white;
        font-family: ${props => props.theme.font.sans}, serif;
        font-size: ${props => props.theme.tags.fontSize};
        font-weight: 100;
        margin-bottom: 5rem;
    }
    button {
        &:focus {
        outline: 0;
           background-color: #00000026;
        }
    }
    .carousel-slider {
        .slider-wrapper {
            margin-bottom: 6rem;
        }
    }
    .carousel .slide {
        background-color: transparent;
    }
    .carousel-status {
        display: none;
    }
    .carousel .control-dots .dot {
        background-color: transparent;
        border: 1px solid black;
        box-shadow: none;
    }
    .next {
        background-color: transparent;
        height: 90vh;
        width: 30vw;
        position: absolute;
        z-index:10;
        left:0;
        border:0;
    }
    .previous {
        background-color: transparent;
        height: 90vh;
        width: 30vw;
        position: absolute;
        z-index:10;
        right:0;
        border:0;
    }
    
`
