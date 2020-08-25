import { Link } from "gatsby"
import * as React from "react"

import  Navigation  from "./UI/navigation/Navigation"

const Header = (props: HeaderProps) => (
  <header>
    <Navigation siteTitle={props.siteTitle} />
  </header>
)

interface HeaderProps {
  siteTitle?: string
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
