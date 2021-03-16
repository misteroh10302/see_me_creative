import { Link } from "gatsby"
import * as React from "react"
import { useState } from "react"
import styled from "styled-components"

import { NavigationWrapper } from "./navigationWrapper"
import {theme, device } from "../../../styled/theme"
import { relative } from "path"

const navStyles = {
  position: "fixed",
  top: "0px",
  textAlign: "center",
  width: "100%",
  padding: "2rem",
  zIndex: 1000,
  display: "flex",
  justifyContent: "space-around"
}

export const NavLeftnavRight = styled.div`
  display: none;
  a {
    color: ${props => props.scrolled ? "black" : "white"};
    font-size: 1.5rem;
    text-transform: uppercase;
    display: inline-block;
    margin: 4rem 8rem;
    font-family: "Roboto", sans-serif;
    font-weight: bolder;
    letter-spacing: .025em;
    transition: color 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:visited {
      color: ${props => props.scrolled ? "black" : "white"};
    }
    @media ${device.mobileL} {
      margin: 4rem 4rem;
    }
  }
 
  @media ${device.tablet} {
     display: block;
  }
`

const HamburgerButton = styled.button`
  border: 0;
  background-color: transparent;
  position: fixed;
  left: 3rem;
  top: 6rem;
  z-index: 5;
  display: block;
  @media ${device.tablet} {
     display: none;
  }
  span {
    height: 3px;
    width: 20px;
    margin: 2px 0;
    display: block;
    background-color: white;
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

const MobileNavItems = styled.div`
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
    font-family: ${theme.font.sans};
    text-transform: uppercase;
    font-weight: bolder;
    letter-spacing: .25rem;
  }
  @media ${device.tablet} {
     display: none;
  }
`;

const Navigation = (props: NavigationProps) => {
  const [open, setOpen] = useState(false);
  const [scrollTop, setScrollPost] = useState(0);

  React.useEffect(() => {
      if (typeof window !== `undefined`) {
      const onScroll = e => {
        if (window.location.pathname.includes("project")) {
          setScrollPost(e.target.documentElement.scrollTop);
        }
      };

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [scrollTop]);
  return (  
    <NavigationWrapper open={open} scrolled={scrollTop > window.innerHeight ? true : false} style={navStyles}>
      <HamburgerButton open={open} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerButton>
      <MobileNavItems open={open} >
      <Link to="/who-we-are">
          About
        </Link>
        <Link to="/our-work">
          Our Work
        </Link>
        <Link to="/contact">
          Contact
        </Link>
        <Link to="/instagram">
          @seemecreative
        </Link>
      </MobileNavItems>
      <NavLeftnavRight scrolled={scrollTop > window.innerHeight ? true : false} className="nav-left">
        <Link to="/who-we-are">
          About
        </Link>
        <Link to="/our-work">
          Our Work
        </Link>
      </NavLeftnavRight>
      <h1 style={{ margin: 0, position: "relative", zIndex: 5 }}>
        <Link to="/">
          <img
            width="124"
            className="logo"
            src={"/logo.svg"}
            alt="See Me Creative Logo"
          />
          <hr />
        </Link>
      </h1>
      <NavLeftnavRight scrolled={scrollTop > window.innerHeight ? true : false} className="nav-right">
        <Link to="/contact">
          Contact
        </Link>
        <Link to="/instagram">
          @seemecreative
        </Link>
      </NavLeftnavRight>
    </NavigationWrapper>
  )
}

interface NavigationProps {
  siteTitle?: string
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
