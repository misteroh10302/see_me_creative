import styled from "styled-components"
import { device } from './theme';

/* Layout Helpers
----------------------------- */
const vertialAlign =  `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const grid =  `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
`;

/* Buttons
----------------------------- */
export const Button = styled.a`
    max-width: 80%;
    width: 100%;
    border-radius: 40px;
    background-color: white;
    outline: 0;
    color: black;
    border: 0;
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
    &:hover {
      background-color: black;
      color: white;
    }
    @media  ${device.tablet} {
      max-width: 300px;
      margin: 2rem auto;
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
`;

export const HalfHeight = styled.div`
  min-height: 70vh;
  .gatsby-image-wrapper {
    overflow: visible !important;
    position: initial !important;
  }
`;

export const BackgroundImage = styled.section`
  min-height: 100vh;
  background: ${props => `url(${props.backgroundImage}) no-repeat center`};
  background-size: cover;
  padding: ${props => props.theme.padding.sectionVertical} ${props => props.theme.padding.desktop};
`;


export const FooterWrapper = styled.footer`
  min-height: 100vh;
  ${vertialAlign}
  background-color: ${props => props.theme.colors.green};
`;

export const OurWorkWrapper = styled.div`
  padding: ${props => props.theme.padding.sectionVertical} 0;
  > div {
    color: white;
  }
  a {
    color: white;
    text-decoration: none;
  }
  ${grid}
`;
export const ProjectWrapper = styled.section`
  background: ${props => `url(${props.backgroundImage}) no-repeat center`};
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  padding: ${props => props.theme.padding.sectionVertical} ${props => props.theme.padding.desktop};
  h1.title {
    background-color: ${props => props.theme.colors.green};
    display: inline-block;
    padding-left: 3rem;
    padding-right: 1rem;
    position: relative;
    left: -3rem;
    margin-bottom: 0;
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
    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
    color: black;
    text-transform: capitalize;
    margin-bottom: 2rem;
  }
  section.post-content {
    p {
      margin-bottom: 2rem;
      text-align: left;
      font-family: "Roboto", sans-serif;
      font-size: 1.4rem;
      font-weight: lighter;
      letter-spacing: 0;
      line-height: 2.2rem;
      b {
        font-family: ${props => props.theme.font.serif}, serif;
        font-size: 2rem;
        letter-spacing: -.035rem;
        font-weight: 500;
        text-rendering: optimizeLegibility;
      }
    }
    div.gallery {
      margin: 3rem 0;
      img {
        margin: 2rem 0;
        display: inline-block;
        width: 100%;
      }
    }
    .video-content {
      margin: 8rem 0 6rem;
    }
    .video-inner {
      position: relative;
      padding-bottom: 56.25%; /*16:9*/
      height: 0;
      overflow: hidden;
      iframe {
          position: absolute;
          top:0;
          left: 0;
          width: 100%;
          height: 100%;
          video {
            width: 100%;
          }
      }
    }
  }
`

export const ProjectCollectionWrapper = styled.div`
  background-color: black;

`

export const SectionWrapper = styled.section`
  background: ${props => `url(${props.backgroundImage}) no-repeat center`};
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  padding: ${props => props.theme.padding.sectionVertical} ${props => props.theme.padding.desktop};
  @media screen and (min-width: 850px) {
      > div {
        max-width: 900px;
        margin: 0 auto;
      }
    }
  &.about-, &.about {
    p {
      color: black;
    }
  }
  &.who-we-are-content-info {
     p  {
     text-align: left;
     margin: 3rem 0;
   }
    b {
      display: block;
      line-height: 6rem;
    }
  }
  &.who-we-are {
    ${vertialAlign}
    color: white;
  }
  &.who-we-are-content-info {
    p { 
      color: black;
    }
  }
  &.our-perspective {
    color: white;
    background-color: blue;
    position: relative;
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
      img:nth-child(1) {
        @media ${device.tablet} {
          display:block;
          margin: 0 auto;
          top: 50%;
          position: relative;
          transform: translateY(50%);
        }
      }
      img:nth-child(2) {
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
      z-index: 1;
      position: relative;
      p {
        
        b {
          display: block;
          line-height: 1.6rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          @media  ${device.tablet} {
            font-size: 1.8rem;
            line-height: 2.2rem;
          }
        }
        i {
          font-style: initial;
          @media  ${device.tablet} {
            font-size: 1.8rem;
            line-height: 2.2rem;
          }
        }
      }
      
      p:nth-child(n+2) {
        font-size: 1.4rem;
        font-family: "Roboto", sans-serif;
      }
      p:nth-child(even) {
        text-align: left;
      }
      p:nth-child(odd) {
        text-align: right;
      }
      p:nth-child(1){
        margin-bottom: 6rem;
        text-align: center;
      }
    }
    
  }
`
export const GalleryWrapper = styled.div`
  display: grid;
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    gap: 3.2rem;
    div:nth-child(n+3) {
      grid-column: 1/3;
    }
  }
`
export const LayoutWrapper = styled.div`
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
        letter-spacing:  ${props => props.theme.p.letterSpacing};
        font-weight: 100;
        margin-bottom: 5rem;
        @media  ${device.laptop} {
          font-size: 4.8rem;
          line-height: 5rem;
          letter-spacing:  .-75px;
        }
    }

    .our-work {
      background-color: black;
      section > div {
        max-width: 850px;
        margin: 0 auto;
      }
    }
`;
