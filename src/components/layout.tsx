/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import { LayoutWrapper, FooterWrapper } from '../styled/layoutStyles';

const Layout = (props: LayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <LayoutWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{props.children}</main>
          <FooterWrapper>
           
          </FooterWrapper>
        </div>
      </LayoutWrapper>
    )}
  />
)

interface LayoutProps {
  children: any
}

export default Layout
