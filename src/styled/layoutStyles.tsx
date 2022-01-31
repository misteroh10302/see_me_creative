import styled from "styled-components"
import { theme, device } from "./theme"

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
  max-width: 300px;
  width: 100%;
  border-radius: 40px;
  background-color: ${(props: any) =>
    props.invert === true ? "black" : "white"};
  outline: 0;
  color: ${(props: any) => (props.invert === true ? "white" : "black")};
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
    background-color: black;
    color: white;
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
  z-index: 10;
  position: relative;
  .gatsby-image-wrapper {
    overflow: visible !important;
    position: initial !important;
  }
  .header-mobile-video {
    .video-background {
      position: relative;
      padding-top: 138%; /* 6 / 4 = 0.5625 */
      height: 100% !important;
      width: 100% !important;
      .react-player {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
  &.project-header {
    min-height: initial;
    @media ${device.tablet} {
      min-height: 100vh;
    }
  }
  .header-mobile-video {
    > section {
      min-height: 517.5px;
    }
    @media ${device.tablet} {
      display: none;
    }
  }
  .header-desktop-video {
    display: none;
    @media ${device.tablet} {
      display: block;
    }
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
  background: ${(props: any) =>
    `url(${props.backgroundImage}) no-repeat center`};
  background-size: cover;
  padding: ${(props: any) => props.theme.padding.sectionVertical}
    ${(props: any) => props.theme.padding.desktop};
`

export const FooterWrapper = styled.footer`
  min-height: 100vh;
  ${vertialAlign}
  background-color: ${(props: any) => props.theme.colors.green};
`

export const OurWorkWrapper = styled.div`
  padding: 8rem 0;
  max-width: 100%;
  > div {
    color: white;
  }
  a {
    color: white;
    text-decoration: none;
    overflow: hidden;
    display: block;
    margin-bottom: 20px;
  }
`

export const ThumbnailVideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  video, iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
  }
`

export const OurOfferingsWrapper = styled.div`
  text-align: left;
  position: relative;
  z-index: 1;
  margin-bottom: 4rem !important;
  h3 {
    padding-left: 0 !important;
    font-family: ${theme.font.serif};
    font-size: 3rem;
    font-weight: 100;
    letter-spacing: ${theme.desktopHeading3.letterSpacing};
  }
  .text-area {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    h3,
    p {
      text-align: left !important;
    }
    p {
      font-family: ${theme.font.sans};
      text-transform: none;
      font-size: 1.6rem !important;
      letter-spacing: 0 !important;
      padding-bottom: 0 !important;
      line-height: 2.2rem !important;
    }
  }
  > div {
    padding-top: 3rem;
    border-top: 1px solid white;
  }
  ${grid}
  grid-column-gap: 10rem;
  grid-template-columns: 1fr;
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const WhoWeAreGrid = styled.div`
  padding: ${(props: any) => props.theme.padding.sectionVertical} 0;
  padding-top: 0;
  max-width: 100%;
  position: relative;
  z-index: 1;
  > div {
    color: white;
  }
  .who-we-are {
    .image-wraper {
      position: relative;
      display: block;
      > div {
        transition: opacity 500ms ease !important;
         animation-name: unset !important;
      }
      &:hover {
        > div:nth-child(1) {
          opacity: 0 !important;
         
        }
        div:nth-child(2) {
          opacity: 1 !important;
        }
      }
      > div:nth-child(1) {
          position: relative;
          z-index: 1;
          
        }
      > div:nth-child(2) {
        position: absolute !important;
        top: 0;
        height: 100%;
        width: 100%;
        opacity: 0 !important;
      }
    }
  }
  a {
    color: white;
    text-decoration: none;
    overflow: hidden;
  }
  div..image-and-text {
    .text-area {
      padding-bottom: 0;
    }
  }
  ${grid}
  grid-template-columns: 1fr;
  h2 {
    font-size: 3rem;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
    h2 {
      font-size: ${(props: any) => props.theme.heading2.fontSize} !important;
    }
  }
`

export const ProjectWrapper = styled.section`
  background: ${(props: any) =>
    `url(${props.backgroundImage}) no-repeat center`};
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  padding: ${(props: any) => props.theme.padding.sectionVertical} 3rem;

  @media ${device.tablet} {
    padding: ${(props: any) => props.theme.padding.sectionVerticalDesktop} 3rem;
  }
  header {
    @media ${device.tablet} {
      max-width: 840px;
      margin: 0 auto;
      margin-bottom: 0rem;
      padding-left: 0;
      padding-right: 0;
    }
  }

  h2.subtitle {
    color: black;
    font-family: ${(props: any) => props.theme.font.serif}, serif;
    font-size: ${(props: any) => props.theme.heading1.fontSize};
    letter-spacing: ${(props: any) => props.theme.heading1.letterSpacing};
    font-weight: 100;
    margin: 2rem 0;
    @media screen and (max-width: 768px) {
      line-height: 3.8rem;
    }
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
    > div:first-child {
      margin-bottom: 0rem;
      @media ${device.tablet} {
        margin-top: 6rem;
        margin-bottom: 5.5rem;
      }
    }

    @media ${device.tablet} {
      h2 {
        margin-top: 0;
        b {
          font-weight: 500;
        }
      }
    }
    .post-text-wrapper {
      margin-bottom: 3rem;
      &:first-child {
        margin-bottom: 3rem;
        @media ${device.tablet} {
          margin-bottom: 9.2rem;
        }
      }
      @media ${device.tablet} {
        max-width: 840px;
        margin-left: auto;
        margin-right: auto;
        gap: 3rem;
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
        font-family: ${(props: any) => props.theme.font.serif}, serif;
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
      margin: 3rem 0 0;
   
      @media ${device.tablet} {
        margin: 3rem 0 3rem;
      }
    }
    .video-inner {
      position: relative;
      // padding-bottom: 50.25%; /*16:9*/
      height: initial;
      overflow: hidden;

      video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: fill;
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
  background: transparent
    ${(props: any) => `url(${props.backgroundImage}) no-repeat center`};
  
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  padding: ${(props: any) => props.theme.padding.sectionVertical};
  @media ${device.tablet} {
    padding: ${(props: any) => props.theme.padding.sectionVertical}
      ${(props: any) => props.theme.padding.desktop};
  }
  &.projects {
    padding: 0em 0 5rem;
    position: relative;
    min-height: initial;
    .my-masonry-grid {
      padding: 0 3rem;
    }
    h4 {
      margin: 0;
    }
    .client-name-mobile, .video-project-name-mobile {
      @media ${device.tablet} {
        display: none;
      }
    }

    .my-masonry-grid_column {
      @media ${device.laptop} {
        height: 55vw;
        overflow: hidden;
      }
      h4 {
        margin-top: 1rem;
      }
      a {
        display: block;
        position: relative;
        margin-bottom: 37px;
        .project-title {
          display: flex;
          flex-direction: column;
          justify-content: center;
          img {
            display: none;
            margin-bottom: 0;
          }
        }
        .project-title h4 {
          font-family: ${(props: any) => props.theme.font.serif};
          font-size: 2rem;
        }
        .gatsby-image-wrapper {
          margin-bottom: 0 !important;
          @media ${device.tablet} {
            margin-bottom: 3rem !important;
          }
        }
        &:hover {
          @media ${device.tablet} {
            .project-title {
              background-color: #000000e6;
              text-align: center;
              h4 {
                color: white;
              }
              img {
                opacity: 1;
              }
            }
          }
        }
      }
    }

    @media ${device.tablet} {
      .project-title {
        height: 100%;
        position: absolute;
        width: 100%;
        top: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        text-align: center;
        transition: background 250ms ease;
        h4 {
          text-align: center;
          color: transparent;
          width: 100%;
          font-family: ${(props: any) => props.theme.font.serif};
          font-size: 2rem;
        }
        img {
          opacity: 0;
          display: block !important;
        }
      }
    }
  }

  @media screen and (min-width: 850px) {
    > div {
      margin: 0 auto;
    }
    &.about-,
    &.our-perspective {
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
    h2 {
      color: white;
      padding: 0 0rem;
      margin-bottom: 2rem;
      @media ${device.laptop} {
        padding: 1rem 0rem 0 0rem;
      }
    }
    h3 {
      color: white;
      @media ${device.laptop} {
        padding: 0rem 0rem 0 0rem;
      }
    }
    > .text-area {
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
      p {
        font-size: ${theme.p.fontSize} !important;
        line-height: 3.6rem;
        letter-spacing: -0.66px;
        text-align: left;
        margin-bottom: 2rem;
        @media ${device.laptop} {
          font-size: 4.8rem !important;
          line-height: 5rem;
          letter-spacing: 0-75px;
          margin-bottom: 3rem;
          margin-top: 6rem;
          text-align: center;
        }
      }
    }
    .text-area {
      padding-top: 1rem;
      padding-bottom: 3rem;
      p {
        font-size: ${theme.heading3.fontSize};
        line-height: 3.6rem;
        letter-spacing: -0.66px;
      }
      @media ${device.laptop} {
        p {
          font-size: ${theme.desktopP.fontSize};
          line-height: 4.6rem;
          margin-bottom: 3rem;
        }
      }
    }
    .image-and-text {
      vertical-align: top;
      > div {
        padding-top: 0;
      }
      p {
        font-family: ${theme.font.sans}, sans-serif;
        margin-bottom: 2rem;
        letter-spacing: 0;
        font-size: 1.6rem;
        line-height: 2.4rem;
        @media ${device.laptop} {
          padding: 0rem 0rem 0 0rem;
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
     
      .image-and-text {
        display: inline-block;
        padding: 3em 0rem 3rem;
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
    position: relative;
    @media ${device.laptop} {
      background-position: 100% -30vw;
    }
    p {
      margin-bottom: 0;
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
      letter-spacing: 0.75px;
      font-family: "Times NR Condensed", serif;
      font-size: 3.5rem;
      @media ${device.tablet} {
        font-size: 5rem;
      }
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
        font-family: "Roboto", sans-serif;
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
        letter-spacing: -0.15px;
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
      .our-perspective-2,
      .our-perspective-4,
      .our-perspective-6,
      .our-perspective-8 {
        text-align: left;
      }
      .our-perspective-1,
      .our-perspective-3,
      .our-perspective-5,
      .our-perspective-7,
      .our-perspective-9 {
        text-align: right;
      }
    }
  }
`
export const TwoColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0rem;

  @media ${device.tablet} {
    margin: 3rem 0;
    grid-template-columns: 1fr 1fr;
    div:nth-child(2) {
      margin-top: ${(props: any) => (props.adjustPadding ? "4rem" : "0")};
    }
  }
`

export const TwoColumnMediaWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: center;
  @media ${device.tablet} {
    margin: 3rem 0;
    grid-template-columns: 1fr 1fr;
    div:nth-child(2) {
      margin-top: ${(props: any) => (props.adjustPadding ? "7rem" : "0")};
    }
  }
`

export const SingleColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0rem;
  @media ${device.tablet} {
    margin: 3rem 0;
    grid-template-columns: 1fr;
    max-width: 840px;
    margin-left: auto;
    margin-right: auto;
  }
`

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
    .medium {
      max-width: 1024px;
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
    font-family: ${(props: any) => props.theme.font.serif}, serif;
    font-size: ${(props: any) => props.theme.projectHeader.fontSize};
    letter-spacing: ${(props: any) => props.theme.projectHeader.letterSpacing};
    font-weight: 100;
    margin: 2rem 0;
  }
  h2 {
    font-family: ${(props: any) => props.theme.font.serif}, serif;
    font-size: ${(props: any) => props.theme.heading2.fontSize};
    letter-spacing: ${(props: any) => props.theme.heading2.letterSpacing};
    line-height: ${(props: any) => props.theme.heading2.lineHeight};
    font-weight: 100;
    margin: 3rem 0 1rem;
    @media ${device.laptop} {
      font-size: ${(props: any) => props.theme.desktopHeading2.fontSize};
      line-height: ${(props: any) => props.theme.desktopHeading2.lineHeight};
    }
  }
  h4 {
    color: white;
    font-family: ${(props: any) => props.theme.font.serif}, serif;
    font-size: ${(props: any) => props.theme.heading3.fontSize};
    font-weight: 100;
    margin: 2rem 0;
  }
  p {
    font-family: ${(props: any) => props.theme.font.sans}, serif;
    font-size: ${(props: any) => props.theme.p.fontSize};
    line-height: ${(props: any) => props.theme.p.lineHeight};
    letter-spacing: ${(props: any) => props.theme.p.letterSpacing};
    font-weight: 100;
    margin-bottom: 0rem;
    @media ${device.laptop} {
      font-size: ${(props: any) => props.theme.projectHeader.fontSize};
      line-height: 5rem;
      letter-spacing: 0-75px;
      margin-bottom: 5rem;
    }
  }
  .our-work {
    > section {
      z-index: 0;
      position: relative;
    }
    nav {
      height: 80vh;
      margin-top: 0rem;
      section {
        top: 5rem;
      }
    }
  }
  .who-we-are-page {
    main nav {
      height: 100vh;
      margin-top: -13rem;
    }
    main > div {
      z-index: 0;
      position: relative;
    }
  }
  .mcm-suited {
    .header-mobile-video .video-background {
      padding-top: 151.5%;
    }
  }
  .homepage {
    background-color: black;
    > div {
      section:nth-child(1) {
        video {

              transform: translateY(-8rem) rotate(-180deg) !important;

        }
      }
    }
  }
  .homepage, .who-we-are-page {
    .who-we-are-header-wrapper {
      @media screen and (max-width: 768px) {
        min-height: initial !important;
      }
    }
    .video-background {
      background-color: black;
    }
    .video-background {
      @media screen and (max-width: 768px) {
        height: initial !important;
        .mobile-video-background {
          padding-top: 125%;
        }
      }
    }
    .about- {
      padding-top: 5rem;
      padding-bottom: 4.5rem;
      @media ${device.laptop} {
        padding-top: 9.4rem;
      }
    }
    section:nth-child(1) {
      .video-background {
        height: 100vh;
        @media ${device.laptop} {
          height: 100vh;
        }
      }
    }
  }

  video,
  iframe {
    object-fit: fill;
    object-position: top;
    height: 100vh;
    width: 100vw;
  }

  .video-background {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }

  .video-background iframe,   .video-background video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    transform: translate(-50%, -50%);
  }

  @media (min-aspect-ratio: 16/9) {
    .video-background iframe,   .video-background video  {
      /* height = 100 * (9 / 16) = 56.25 */
      height: 56.25vw !important;
    }
  }
  @media only screen and (max-device-width: 640px) and (orientation: landscape) {
    .video-background iframe,   .video-background video  {
      top: -2rem !important;
      height: 100% !important;
    }
  }
  @media (max-aspect-ratio: 16/9) {
    .video-background iframe {
      /* width = 100 / (9 / 16) = 177.777777 */
      width: 177.78vh !important;
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
    background-color: ${(props: any) =>
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
