import styled from "styled-components"
import { device } from "./theme"

/* Layout Helpers
----------------------------- */
const vertialAlign = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const grid = `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
`

/* Buttons
----------------------------- */
export const Button = styled.a`
  max-width: 80%;
  width: 100%;
  border-radius: 40px;
  background-color: ${props => props.invert === true ? "black" : 'white'};;
  outline: 0;
  color: ${props => props.invert === true ? "white" : 'black'};
  border: 1px solid white;
  padding: 1.5rem 0rem;
  margin: 1rem auto;
  display: block;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  transition: 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: 1px;
  text-decoration: none;
  position: relative;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid white;
  }
  @media ${device.tablet} {
    max-width: 300px;
    margin: 2rem auto 0;
  }
`

/* Layout Wrappers
----------------------------- */
export const FullHeight = styled.div`
  min-height: 100vh;
  .gatsby-image-wrapper {
    overflow: visible !important;
    position: initial !important;
  }
`

export const HalfHeight = styled.div`
  min-height: 70vh;
  .gatsby-image-wrapper {
    overflow: visible !important;
    position: initial !important;
  }
`

export const BackgroundImage = styled.section`
  min-height: 100vh;
  background: ${props => `url(${props.backgroundImage}) no-repeat center`};
  background-size: cover;
  padding: ${props => props.theme.padding.sectionVertical}
    ${props => props.theme.padding.desktop};
`

export const FooterWrapper = styled.footer`
  min-height: 100vh;
  ${vertialAlign}
  background-color: ${props => props.theme.colors.green};
`

export const OurWorkWrapper = styled.div`
  padding: ${props => props.theme.padding.sectionVertical} 0;
  max-width: 1400px;
  > div {
    color: white;
  }
  a {
    color: white;
    text-decoration: none;
    min-height: 514px;
    overflow: hidden;
  }
  /* ${grid}
  grid-template-columns: 1fr;
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  } */
`

export const ProjectWrapper = styled.section`
  background: ${props => `url(${props.backgroundImage}) no-repeat center`};
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  padding: ${props => props.theme.padding.sectionVertical}
    3rem;

  header {
    @media ${device.tablet} {
      max-width: 840px;
      margin: 0 auto;
      margin-bottom: 0rem;
      padding-left:0;
      padding-right:0;
    }
  }

  h2.subtitle {
    color: black;
    font-family: ${props => props.theme.font.serif}, serif;
    font-size: ${props => props.theme.heading1.fontSize};
    letter-spacing: ${props => props.theme.heading1.letterSpacing};
    font-weight: 100;
    margin: 2rem 0;
  }

  small {
    display: block;
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    color: black;
    text-transform: capitalize;
    margin-bottom: 2rem;
    font-weight: 300;
  }
  section.post-content {
    .post-text-wrapper {
      @media ${device.tablet} {
        max-width: 840px;
        margin-left:  auto;
        margin-right: auto;
      }
    }
    
    p {
      margin-bottom: 0rem;
      text-align: left;
      font-family: "Roboto", sans-serif;
      font-size: 1.4rem;
      font-weight: 300;
      letter-spacing: 0;
      line-height: 2.2rem;
      u {
        text-decoration: none;
      }
      b {
        font-family: ${props => props.theme.font.serif}, serif;
        font-size: 2rem;
        letter-spacing: -0.035rem;
        font-weight: 500;
        text-rendering: optimizeLegibility;
        margin-bottom: 1rem;
      }
    }
    b {
      display: block;
    }
    div.gallery {
      img {
        display: inline-block;
        width: 100%;
      }
    }
    .video-content {
      margin: 8rem 0 6rem;
    }
    .video-inner {
      position: relative;
      padding-bottom: 50.25%; /*16:9*/
      height: 0;
      overflow: hidden;
      video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    @media ${device.tablet} {
 
      > div {
        h3,
        p {
          max-width: 840px;
          margin: 0rem auto;
          padding: 0;
          font-size: 1.6rem;
          line-height: 2.4rem;
          font-weight: 300;
          b {
            font-size: 3rem;
            line-height: 3.2rem;
          }
        }
       
      }
    }
  }
`

export const ProjectCollectionWrapper = styled.div`
  background-color: black;
`

export const SectionWrapper = styled.section`
  background: black ${props => `url(${props.backgroundImage}) no-repeat center`};
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  padding: ${props => props.theme.padding.sectionVertical}
    ${props => props.theme.padding.desktop};
  &.projects {
    padding: 0em 0 5rem;
    position: relative;
  }

  @media screen and (min-width: 850px) {
    > div {
      margin: 0 auto;
    }
    &.about-,
    &.our-perspective
    {
      > div {
        max-width: 900px;
      }
    }
  }
  &.about- {
    min-height: initial;
  }
  &.about-,
  &.about {
    p {
      color: white;
    }
    a {
      &:visited {
        color: black;
        &:hover {
          color: black;
        }
      }
    }
  }
  &.who-we-are-content-info {
    position: relative;
  z-index: 99;
    p {
      text-align: left;
      margin: 0rem 0;
      color: white;
      font-weight: 300;
   
    }

    h1 {
      color: white;
      padding: 0 0rem;
      margin-bottom: 1rem;
      @media ${device.laptop} {
        padding: 3rem 0rem 0 17rem;
      }
    }

    .text-area {
      p {
        font-size: 3.6rem;
        line-height: 4.2rem;
        letter-spacing: -0.66px;
      }
      @media ${device.laptop} {
        p {
          font-size: 4.2rem;
          line-height: 4.8rem;
        }
      }
    }

    .image-and-text {
      vertical-align: top;
      > div {
        padding-top: 0;
      }
      p {
        font-family: "Roboto", sans-serif;
        margin-bottom: 0;
        letter-spacing: 0;
        font-size: 1.6rem;
        line-height: 2.4rem;
        @media ${device.laptop} {
          padding: 0rem 0rem 0 17rem;
        }
      }
    }
    b {
      display: block;
      line-height: 6rem;
    }
    @media ${device.tablet} {
      p {
        text-align: center;
      }
      div:first-child {
        max-width: 840px;
      }
      .image-and-text {
        display: inline-block;
        width: 50%;
        padding: 3rem;
        box-sizing: border-box;
        p {
          text-align: left;
        }
      }
    }
  }
  &.who-we-are {
    ${vertialAlign}
    color: white;
    .text-area {
      max-width: 600px;
    }
    a,
    button {
      background-color: white;
      color: black;
      &:hover {
        background-color: transparent;
        color: white;
      }
    }
  }

  &.our-perspective {
    color: white;
    background-color: #2201fb;
    position: relative;
    z-index: 99;
    h1 {
      text-align: center;
      color: white;
      margin: 10rem 0;
      position: relative;
      z-index: 2;
      font-weight: 100;
      letter-spacing: .75px;
      font-family: 'Times NR Condensed',serif;
    }
    div.image {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      margin: 0 auto;
      transform: translateY(-50%);
      z-index: 0;
      h1 {
        display: none;
      }
    }
    div.images-2 {
      position: absolute;
      top: 3rem;
      right: 0;
      left: 0;
      margin: 0 auto;
      z-index: 0;
      h1 {
        display: none;
      }
      img {
        width: 80%;
        display: block;
        margin: 0 auto;
      }
      img:nth-child(0) {
        @media ${device.tablet} {
          display: block;
          margin: 0 auto;
          top: 50%;
          position: relative;
          transform: translateY(50%);
        }
      }
      img:nth-child(1) {
        position: relative;
        top: -2rem;
        @media ${device.tablet} {
          position: absolute;
          top: 13rem;
          width: 500px;
          left: -10rem;
        }
      }
    }
    > div {
      z-index: 5;
      position: relative;
      font-size: 1.6rem;

      p {
        margin-bottom: 0;
        font-family: "Roboto",sans-serif; 
        font-weight: 300;
        b {
          display: block;
          line-height: 1.6rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          @media ${device.tablet} {
            font-size: 1.8rem;
            line-height: 2.2rem;
          }
        }
        i {
          font-style: initial;
          @media ${device.tablet} {
            font-size: 1.8rem;
            line-height: 2.2rem;
          }
        }
      }

      p {
        font-size: 1.6rem;
        letter-spacing: -.15px;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        line-height: 2.5rem;
        
      }
      .our-perspective-p {
        opacity: 1 !important;
        /* :hover {
          opacity: 1 !important;
        } */
      }
      .our-perspective-image {
        filter: sepia(100) hue-rotate(185deg);
      }
      .our-perspective-0,
      .our-perspective-4,
      .our-perspective-10,
      .our-perspective-14
       {
        text-align: left;
      }
      .our-perspective-2,
      .our-perspective-5,
      .our-perspective-6,
      .our-perspective-12 {
        text-align: right;
      }
    }
  }
`
export const TwoColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.2rem;
  @media ${device.tablet} {
    margin: 6rem 0;
    grid-template-columns: 1fr 1fr;
    div:nth-child(2){
      margin-top: ${props => props.adjustPadding ? '4.2rem': '0'};
    }
  }
`;

export const GalleryWrapper = styled.div`
  display: grid;
  gap: 3.2rem;
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    gap: 3.2rem;
    margin: 3rem 0;
    div:nth-child(n + 3) {
      grid-column: 1/3;
    }
  }
`

export const SingleGalleryWrapper = styled.div`
  margin: 3rem 0;
 
  @media ${device.tablet} {
    margin: 3rem 0;
    .landscape {
      max-width: 50vw;
      margin: 0 auto;
    }
    .portrait {
      max-width: 80vw;
      margin: 0 auto;
    }
    .small {
      max-width: 780px;
      margin: 4rem auto;
    }
  }
`
export const LayoutWrapper = styled.div`
  html,
  body {
    overflow-x: hidden;
  }
  h1 {
    color: black;
    font-family: ${props => props.theme.font.serif}, serif;
    font-size: ${props => props.theme.projectHeader.fontSize};
    letter-spacing: ${props => props.theme.projectHeader.letterSpacing};
    font-weight: 100;
    margin: 2rem 0;
  }
  h2 {
    font-family: ${props => props.theme.font.serif}, serif;
    font-size: ${props => props.theme.heading2.fontSize};
    letter-spacing: ${props => props.theme.heading2.letterSpacing};
    font-weight: 100;
    margin: 2rem 0;
  }
  h4 {
    color: white;
    font-family: ${props => props.theme.font.serif}, serif;
    font-size: ${props => props.theme.heading1.fontSize};
    font-weight: 100;
    margin: 2rem 0;
  }
  p {
    font-family: ${props => props.theme.font.sans}, serif;
    font-size: ${props => props.theme.p.fontSize};
    line-height: ${props => props.theme.p.lineHeight};
    letter-spacing: ${props => props.theme.p.letterSpacing};
    font-weight: 100;
    margin-bottom: 5rem;
    @media ${device.laptop} {
      font-size: 4.8rem;
      line-height: 5rem;
      letter-spacing: 0.-75px;
    }
  }

  video,iframe{
    object-fit: cover;
    object-position: center;
    height: 100vh;
    width:100vw;
  }

  .video-background {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }

  .video-background iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    transform: translate(-50%, -50%);
  }

  @media (min-aspect-ratio: 16/9) {
  .video-background iframe {
    /* height = 100 * (9 / 16) = 56.25 */
    height: 56.25vw;
  }
}
@media (max-aspect-ratio: 16/9) {
  .video-background iframe {
    /* width = 100 / (9 / 16) = 177.777777 */
    width: 177.78vh;
  }
}

  .our-work {
    background-color: black;
    section > div {
      max-width: calc(100%);
      width: calc(100%);
      
    }
  }
`

export const SwiperWrapper = styled.div`
  :root {
    --swiper-theme-color: #{$themeColor};
  }
  .swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }
  .swiper-container-vertical > .swiper-wrapper {
    flex-direction: column;
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }
  .swiper-container-android .swiper-slide,
  .swiper-wrapper {
    transform: translate3d(0px, 0, 0);
  }
  .swiper-container-multirow > .swiper-wrapper {
    flex-wrap: wrap;
  }
  .swiper-container-multirow-column > .swiper-wrapper {
    flex-wrap: wrap;
    flex-direction: column;
  }
  .swiper-container-free-mode > .swiper-wrapper {
    transition-timing-function: ease-out;
    margin: 0 auto;
  }
  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
  }
  .swiper-slide-invisible-blank {
    visibility: hidden;
  }
  /* Auto Height */
  .swiper-container-autoheight {
    &,
    .swiper-slide {
      height: auto;
    }

    .swiper-wrapper {
      align-items: flex-start;
      transition-property: transform, height;
    }
  }

  /* 3D Effects */
  .swiper-container-3d {
    perspective: 1200px;
    .swiper-wrapper,
    .swiper-slide,
    .swiper-slide-shadow-left,
    .swiper-slide-shadow-right,
    .swiper-slide-shadow-top,
    .swiper-slide-shadow-bottom,
    .swiper-cube-shadow {
      transform-style: preserve-3d;
    }
    .swiper-slide-shadow-left,
    .swiper-slide-shadow-right,
    .swiper-slide-shadow-top,
    .swiper-slide-shadow-bottom {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 10;
    }
    .swiper-slide-shadow-left {
      background-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
      );
    }
    .swiper-slide-shadow-right {
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
      );
    }
    .swiper-slide-shadow-top {
      background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
      );
    }
    .swiper-slide-shadow-bottom {
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
      );
    }
  }

  /* CSS Mode */
  .swiper-container-css-mode {
    > .swiper-wrapper {
      overflow: auto;
      scrollbar-width: none; /* For Firefox */
      -ms-overflow-style: none; /* For Internet Explorer and Edge */
      &::-webkit-scrollbar {
        display: none;
      }
    }
    > .swiper-wrapper > .swiper-slide {
      scroll-snap-align: start start;
    }
  }
  .swiper-container-horizontal.swiper-container-css-mode {
    > .swiper-wrapper {
      scroll-snap-type: x mandatory;
    }
  }
  .swiper-container-vertical.swiper-container-css-mode {
    > .swiper-wrapper {
      scroll-snap-type: y mandatory;
    }
  }
  .swiper-slide {
    /* min-height: 100vh; */
    text-align: center;
  }
  p {
    color: white;
    font-size: 1.3rem;
  }
`

// ================================
// HEADINGS
// ================================

export const H1 = styled.h1`
  &.title {
    background-color: ${props =>
      props.highlight
        ? props.theme.colors[props.highlight]
        : props.theme.colors.green};
    display: inline-block;
    padding-left: 3rem;
    padding-right: 1rem;
    position: relative;
    left: -3rem;
    margin-bottom: 0;
  }
`
