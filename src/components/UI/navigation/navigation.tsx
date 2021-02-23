import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { NavigationWrapper } from "./navigationWrapper"

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
  a {
    color: white;
    font-size: 1.5rem;
    text-transform: uppercase;
    display: inline-block;
    margin: 4rem 8rem;
    font-family: "Roboto", sans-serif;
    font-weight: bolder;
    letter-spacing: .025em;
    &:visited {
      color: white;
    }
  }
`


const Navigation = (props: NavigationProps) => (
  <NavigationWrapper style={navStyles}>
    <NavLeftnavRight className="nav-left">
      <Link to="/who-we-are">
        About
      </Link>
      <Link to="/our-work">
        Our Work
      </Link>
    </NavLeftnavRight>
    <h1 style={{ margin: 0 }}>
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
    <NavLeftnavRight className="nav-right">
      <Link to="/contact">
        Contact
      </Link>
      <Link to="/instagram">
        @seemecreative
      </Link>
    </NavLeftnavRight>
  </NavigationWrapper>
)

interface NavigationProps {
  siteTitle?: string
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
