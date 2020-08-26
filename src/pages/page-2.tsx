import * as React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"


import { theme } from "../styled/theme"


const SecondPage = (data) => {
  const { slug } = data.pageContext;
  return(
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title={slug} />
        <h1>{slug}</h1>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    </ThemeProvider>
  )
}

export default SecondPage
