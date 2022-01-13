import * as React from "react"

// eslint-disable-next-line prettier/prettier
import Navigation from "./UI/navigation/navigation"

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
