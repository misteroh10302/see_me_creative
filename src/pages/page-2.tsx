import * as React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { FullHeight, ProjectWrapper, BackgroundImage } from '../styled/layoutStyles'
import { theme } from "../styled/theme"
import TextArea from "../components/UI/textArea/textArea"


const SecondPage = (data) => {
  const { slug, content } = data.pageContext;
  const { backgroundMedia, subTitle, title, tags, postContent } = content;
  return(
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title={slug} />
        <FullHeight>
          <BackgroundImage backgroundImage={backgroundMedia.fluid.src} >
          </BackgroundImage>
        </FullHeight>
        <ProjectWrapper>
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subTitle}</h2>
          <small>{tags.join(', ')}</small>
          {postContent &&
            <>
              <TextArea content={postContent[0] }/>
              </>
          }       
          <Link to="/">Go back to the homepage</Link>
        </ProjectWrapper>
      </Layout>
    </ThemeProvider>
  )
}

export default SecondPage
