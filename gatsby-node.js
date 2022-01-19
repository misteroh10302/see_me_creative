/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const mySlug = str => {
  return str
    .trim()
    .split(" ")
    .join("-")
    .toLowerCase()
}


exports.createPages = async function ({ actions, graphql }) {
  let projects = await graphql(`
    {
      allContentfulProjectTemplateOne {
        nodes {
          clientName
          title
          tags
          subTitle
          highlightColor
          headerDesktopVimeoVideoId
          headerMobileVimeoVideoId
          footer {
            content {
              json
            }
            buttons {
              link
              buttonText
            }
          }
          footerBackground {
            fluid(maxWidth: 1600) {
              tracedSVG
              srcWebp
              srcSetWebp
              src
            }
            file {
              contentType 
              url
            }
          }
          postContent {
            ... on ContentfulTwoColumnGrid {
              id
              sys {
                contentType {
                  sys {
                    id
                  }
                }
              }
              rightColumn {
                ... on ContentfulMediaOrTextGridItem {
                  id
                  vimeoId
                  autoPlayVideo
                  videoDimensions
                  richTextContent {
                    json
                  }
                  image {
                    fluid(maxWidth: 1600) {
                      sizes
                      aspectRatio
                      src
                      srcSet
                    }
                  }
                }
              }
              leftColumn {
                ... on ContentfulMediaOrTextGridItem {
                  id
                  vimeoId
                  richTextContent {
                    json
                  }
                  image {
                    fluid(maxWidth: 1600) {
                      sizes
                      aspectRatio
                      src
                      srcSet
                    }
                  }
                }
              }
            }
            ... on ContentfulVideoGallery {
              id
              vimeoId
              vimeoIdMobile
              autoPlayVideo
              title
            }
            ... on ContentfulSingleImage {
              id
              title
              imageSize
              mainImage {
                fluid(maxWidth: 1600) {
                  sizes
                  aspectRatio
                  src
                  srcSet
                }
              }
            }
            ... on ContentfulTwoColumnText {
              id
              adjustAlignmentIfNoHeaderInSecondColumn
              childContentfulTwoColumnTextLeftColRichTextNode {
                json
              }
              childContentfulTwoColumnTextRightColRichTextNode {
                json
              }
            }
            ... on ContentfulSingleColumnText {
              id
              childContentfulSingleColumnTextSingleColumnTextRichTextNode {
                json
              }
            }
            ... on ContentfulTwoColumnImageGrid {
              id
              imageLeft {
                fluid(maxWidth: 1600) {
                  sizes
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                }
              }
              imageRight {
                fluid(maxWidth: 1600) {
                  sizes
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                }
              }
            }
          }
          backgroundMedia {
            fluid(maxWidth: 1600) {
              sizes
              aspectRatio
              src
              srcSet
              srcWebp
            }
          }
          backgroundMediaMobile {
            fluid(maxWidth: 1600) {
              sizes
              aspectRatio
              src
              srcSet
              srcWebp
            }
          }
          thumbnailMedia {
            fluid(maxWidth: 1600) {
              sizes
              aspectRatio
              src
              srcSet
              srcWebp
            }
          }
         
        }
      }
    }
  `)

  projects.data.allContentfulProjectTemplateOne.nodes.forEach(edge => {
    const slug = edge
    const parsedSlug = mySlug(slug.title.toLowerCase())
    
    const parsedClient = mySlug(
      slug.clientName ? slug.clientName.toLowerCase() : ""
    )
 
    actions.createPage({
      path: "/project/" + parsedClient + "-" + parsedSlug,
      component: require.resolve(`./src/pages/project.tsx`),
      context: {
        slug: slug.title,
        content: edge,
      },
    })
  })
}

