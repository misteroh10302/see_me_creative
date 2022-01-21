import styled from "styled-components"

export const FooterWrapper = styled.nav`
  background-image: ${props => `url(${props.background})`};
  height: 70vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  video{
    height: 70vh;
    position: ${props => props.page === "project" ? 'relative': 'initial' };
     top: ${props => props.page === "project" ? '5rem': 'initial' };
  }
  .mesh {
    position: absolute;
    bottom: -100%;
    width: 100%;
  }
  p {
    color: ${props => props.textColor === "light" ? "white" : "black"};
    font-weight: 400;
  }
  a {
      color: ${props => props.buttonColor === "light" ? "white" : "black"};
      background-color: ${props => props.buttonColor === "light" ? "black" : "white"};
      border: 1px solid ${props => props.buttonColor === "light" ? "black" : "white"};
      &:hover {
        background-color: transparent;
        color: ${props => props.buttonColor === "light" ? "black" : "white"};
        border: 1px solid ${props => props.buttonColor === "light" ? "black" : "white"};
      }
  }
  > div {
    p {
      margin-bottom: 1rem;
    }
  }

`
