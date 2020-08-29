import styled from "styled-components"

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
    padding: 2rem 0rem;
    margin: 2rem auto;
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
    > div {
      p {
        b {
          display: block;
          line-height: 1.6rem;
        }
        i {
          font-style: initial;
        }
      }
      p:first-child {
        margin-bottom: 6rem;
      }
      p:nth-child(n+2) {
        font-size: 1.4rem;
        font-family: "Roboto", sans-serif;
      }
      p:nth-child(2n) {
        text-align: left;
      }
      p:nth-child(3n) {
        text-align: right;
      }
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
        font-size: ${props => props.theme.tags.fontSize};
        font-weight: 100;
        margin-bottom: 5rem;
    }

`;