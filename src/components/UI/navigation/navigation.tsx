import { Link } from "gatsby"
import * as React from "react"

import { NavigationWrapper } from "./navigationWrapper"
const navStyles = {
  position: "fixed",
  top: "0px",
  textAlign: "center",
  width: "100%",
  padding: "2rem",
  zIndex: 1000,
}

const Navigation = (props: NavigationProps) => (
  <NavigationWrapper style={navStyles}>
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
  </NavigationWrapper>
)

interface NavigationProps {
  siteTitle?: string
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
