import * as React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { FullHeight, ProjectWrapper, BackgroundImage } from '../styled/layoutStyles'
import { theme } from "../styled/theme"


const SecondPage = (data) => {
  const { slug, content } = data.pageContext;
  const { backgroundMedia } = content;
  return(
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title={slug} />
        <FullHeight>
          <BackgroundImage backgroundImage={backgroundMedia.fluid.src} >
          </BackgroundImage>
        </FullHeight>
        <ProjectWrapper>
          <h1>{slug}</h1>
          <Link to="/">Go back to the homepage</Link>
        </ProjectWrapper>
      </Layout>
    </ThemeProvider>
  )
}

export default SecondPage
