import styled from "styled-components"

export const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  text-align: center;
  width: 100%;
  padding: 2rem;
  z-index: ${props => props.theme.zIndex.high};
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
  }
  hr {
    outline: 0;
    height: 2px;
    width: 4rem;
    background-color: white;
    margin: .5rem auto;
  }
`;