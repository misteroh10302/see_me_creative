import { graphql } from "gatsby"

const homepageQueryFragment = graphql`
  fragment homepageQueryFragment on contentfulHomepage {
    id
    footer {
      content {
        json
      }
      buttons {
        buttonText
        link
      }
      newsletterUrl
    }
    footerBackground {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
    homepageContent {
      ... on ContentfulBackgroundMedia {
        id
        vimeoId
        media {
          fluid(maxWidth: 200, maxHeight: 500) {
            ...GatsbyContentfulFluid
          }
          file {
            fileName
            contentType
          }
        }
      }
      ... on ContentfulSection {
        id
        title
        backgroundMedia {
          file {
            url
          }
        }
        content {
          ... on ContentfulButton {
            id
            buttonText
            link
          }
          ... on ContentfulTextArea {
            id
            content {
              json
            }
          }

          ... on ContentfulProjectCarousel {
            id
            projects {
              title
              tags
              backgroundMedia {
                fluid(maxWidth: 200) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
                file {
                  contentType
                }
              }
              thumbnailMedia {
                fluid(maxWidth: 200) {
                  ...GatsbyContentfulFluid
                }
                file {
                  contentType
                }
              }
            }
          }
          ... on ContentfulImageGallery {
            id
            title
            images {
              sizes {
                src
              }
              fluid(maxWidth: 200, maxHeight: 500) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  }
`

export default homepageQueryFragment
