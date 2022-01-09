import styled from "styled-components"
import { theme, device } from "../../../styled/theme"

export const NavigationWrapper = styled.nav`
  position: fixed;
  top: ${props => props.hide < 50 || props.scrollDirection === "up" ? 0 : '-190px'};
  text-align: center;
  width: 100%;
  padding: 1rem 3rem;
  z-index: ${props => props.theme.zIndex.high};
  background-color: ${props => props.scrolled && props.currentPage.includes("project") ? "white" : "transparent"};
  transition: 400ms cubic-bezier(0, 0, 0.71, 0.79);
  display: flex;
  justify-content: space-around;
  a {
    color: ${props => props.theme.colors.green};
    text-decoration: none;
    font-weight: 400;
    &:visited {
        color: ${props => props.theme.colors.green};
    }
  }
  .logo {
    width: 124px;
    display: inline-block;
    margin-top: 2rem;
    filter: ${props => props.scrolled && props.currentPage.includes("project") ? "saturate(0) brightness(0)" : "saturate(0) brightness(100)"};
    @media ${device.tablet} {
      margin-top: 4rem;
    } 
  }
  hr {
    outline: 0;
    height: 2px;
    width: 4rem;
    background-color: white;
    margin: .5rem auto;
  }
  .main-navigation {
    max-width: 100%;
    display:flex;
    justify-content: center;
    width: 100%;
    @media ${device.tablet} {
      justify-content: space-between;
    }
  }
`;


export const NavLeftnavRight = styled.div`
  display: none;
  a {
    color: ${props => props.scrolled && props.currentPage.includes("project") ? "black" : "white"};
    font-size: 1.3rem;
    text-transform: uppercase;
    display: inline-block;
    margin: 4rem 8rem;
    font-family: ${props => props.theme.font.sans}, sans-serif;
    font-weight: 400;
    letter-spacing: .065em;
    transition: color 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
   
    &:visited {
      color: ${props => props.scrolled && props.currentPage.includes("project") ? "black" : "white"};
    }
    @media ${device.mobileM} {
      margin: 4rem 2rem;
    }
    @media ${device.desktop} {
      margin: 4rem 4rem;
    }
  }
 
  &.nav-left {
      a:first-child {
        margin-left: 0;
      }
  }
  &.nav-right {
    a:last-child {
        margin-right: 0;
      }
  }
  @media ${device.tablet} {
     display: block;
  }
`

export const HamburgerButton = styled.button`
  border: 0;
  background-color: transparent;
  position: fixed;
  left: 3rem;
  top: 4rem;
  z-index: 5;
  display: block;
  padding:0;
  @media ${device.tablet} {
     display: none;
     top: 6rem;
  }
  span {
    height: 3px;
    width: 20px;
    margin: 2px 0;
    display: block;
    background-color: white;
    background-color: ${props => !props.open && props.scrolled && props.currentPage.includes("project") ? "black" : "white"};
    transition: .25s ease-in-out;
    &:nth-child(1) {
      transform: ${props => props.open ? "translateY(3px) rotate(45deg)" : "block"};
    }
    &:nth-child(2) {
      display: ${props => props.open ? "none" : "block"};
    }
    &:nth-child(3) {
      transform: ${props => props.open ? "translateY(-2px) rotate(-45deg)" : "block"};
    }
  }
`

export const MobileNavItems = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  top: 0;
  left: 0;
  z-index: 1;
  display: ${props => props.open ? "flex" : "none"};
  a {
    color: white;
    font-size: 3rem;
    line-height: 4rem;
    font-family: ${theme.font.seeSans};
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: .05rem;
  }
  @media ${device.tablet} {
     display: none;
  }
`;
