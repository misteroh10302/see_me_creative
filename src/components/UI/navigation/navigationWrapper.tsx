import styled from "styled-components"

export const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  text-align: center;
  width: 100%;
  padding: 2rem;
  z-index: ${props => props.theme.zIndex.high};
  background-color: ${props => props.scrolled ? "white" : "transparent"};
  transition:  250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  a {
    color: ${props => props.theme.colors.green};
    text-decoration: none;
    &:visited {
        color: ${props => props.theme.colors.green};
    }
  }
  .logo {
    width: 124px;
    display: inline-block;
    margin-top: 4rem;
    filter: saturate(0) brightness(100);
  }
  hr {
    outline: 0;
    height: 2px;
    width: 4rem;
    background-color: white;
    margin: .5rem auto;
  }
`;