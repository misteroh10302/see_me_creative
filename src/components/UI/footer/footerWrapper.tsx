import styled from "styled-components"

export const FooterWrapper = styled.nav`
  background-image: ${props => `url(${props.background})`};
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

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
      color: ${props => props.textColor === "black" ? "white" : "black"};
      border:  1px solid ${props => props.textColor === "light" ? "white" : "black"};
      &:hover {
        background-color: ${props => props.textColor === "light" ? "white" : "black"};
        color: ${props => props.textColor === "light" ? "black" : "white"};
      }
  }
  > div {
    p {
      margin-bottom: 1rem;
    }
  }

`
