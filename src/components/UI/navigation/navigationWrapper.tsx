import styled from "styled-components"

export const NavigationWrapper = styled.nav`
  position: fixed;
  top: ${props => props.hide < 50 || props.scrollDirection === "up" ? 0 : '-190px'};
  text-align: center;
  width: 100%;
  padding: 2rem;
  z-index: ${props => props.theme.zIndex.high};
  background-color: ${props => props.scrolled && props.currentPage.includes("project") ? "white" : "transparent"};
  transition: 400ms cubic-bezier(0, 0, 0.71, 0.79);
  display: flex;
  justify-content: space-around;
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
    filter: ${props => props.scrolled && props.currentPage.includes("project") ? "saturate(0) brightness(0)" : "saturate(0) brightness(100)"} 
  }
  hr {
    outline: 0;
    height: 2px;
    width: 4rem;
    background-color: white;
    margin: .5rem auto;
  }
`;