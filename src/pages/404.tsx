import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ThemeProvider } from "styled-components"
import { theme } from "../styled/theme"

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
 </ThemeProvider>
)

export default NotFoundPage
