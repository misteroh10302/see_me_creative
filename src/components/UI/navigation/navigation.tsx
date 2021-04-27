import { Link } from "gatsby"
import * as React from "react"
import { useState } from "react"

import {
  NavigationWrapper,
  MobileNavItems,
  HamburgerButton,
  NavLeftnavRight,
} from "./navigationWrapper"

const Navigation = (props: NavigationProps) => {
  const [open, setOpen] = useState(false)
  const [scrollTop, setScrollPost] = useState({
    current: 0,
    previous: 0,
  })
  const [scrollDirection, setScrollDirection] = useState("down")

  React.useEffect(() => {
    if (typeof window !== `undefined`) {
      const onScroll = e => {
        setScrollPost({
          previous: scrollTop.current,
          current: e.target.documentElement.scrollTop,
        })

        if (scrollTop.current < scrollTop.previous) {
          setScrollDirection("up")
        } else {
          setScrollDirection("down")
        }
      }

      window.addEventListener("scroll", onScroll)

      return () => window.removeEventListener("scroll", onScroll)
    }
  }, [scrollTop])

  return (
    <NavigationWrapper
      open={open}
      hide={scrollTop.current}
      currentPage={typeof window !== "undefined" && window.location.href}
      scrollDirection={scrollDirection}
      scrolled={
        typeof window !== "undefined" && scrollTop.current > 50 ? true : false
      }
    >
      <HamburgerButton
        scrolled={
          typeof window !== "undefined" && scrollTop.current > 50 ? true : false
        }
        currentPage={typeof window !== "undefined" && window.location.href}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </HamburgerButton>
      <MobileNavItems open={open}>
        <Link to="/who-we-are">About</Link>
        <Link to="/our-work">Our Work</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/instagram">@seemecreative</Link>
      </MobileNavItems>
      <div className="main-navigation">
        <NavLeftnavRight
          currentPage={typeof window !== "undefined" && window.location.href}
          scrolled={
            typeof window !== "undefined" && scrollTop.current > 50
              ? true
              : false
          }
          className="nav-left"
        >
          <Link to="/who-we-are">About</Link>
          <Link to="/our-work">Our Work</Link>
        </NavLeftnavRight>
        <h1 style={{ margin: 0, position: "relative", zIndex: 5 }}>
          <Link to="/">
            <img
              width="124"
              className="logo"
              src={"/logo.svg"}
              alt="See Me Creative Logo"
            />
          </Link>
        </h1>
        <NavLeftnavRight
          currentPage={typeof window !== "undefined" && window.location.href}
          scrolled={
            typeof window !== "undefined" && scrollTop.current > 50
              ? true
              : false
          }
          className="nav-right"
        >
          <Link to="/contact">Contact</Link>
          <Link to="/instagram">@seemecreative</Link>
        </NavLeftnavRight>
      </div>
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
