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
          title
          tags
          subTitle
          highlightColor
          headerDesktopVimeoVideoId
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
            ... on ContentfulTextArea {
              id
              content {
                id
                json
              }
            }
            ... on ContentfulVideoGallery {
              id
              vimeoId
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
                }
              }
              imageRight {
                fluid(maxWidth: 1600) {
                  sizes
                  aspectRatio
                  src
                  srcSet
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
            }
          }
          backgroundMediaMobile {
            fluid(maxWidth: 1600) {
              sizes
              aspectRatio
              src
              srcSet
            }
          }
          thumbnailMedia {
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
  `)

  projects.data.allContentfulProjectTemplateOne.nodes.forEach(edge => {
    const slug = edge
    const parsedSlug = mySlug(slug.title.toLowerCase())

    actions.createPage({
      path: "/project/" + parsedSlug,
      component: require.resolve(`./src/pages/page-2.tsx`),
      context: {
        slug: slug.title,
        content: edge,
      },
    })
  })
}
