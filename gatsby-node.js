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
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              src
            }
          }
          postContent {
            ... on ContentfulImageGallery {
              id
              images {
                fluid {
                  sizes
                  aspectRatio
                  base64
                  src
                  srcSet
                }
              }
            }
            ... on ContentfulVideoGallery {
              id
              content {
                json
              }
              videos {
                file {
                  url
                }
              }
            }

            ... on ContentfulTextArea {
              id
              content {
                id
                json
              }
            }
            ... on ContentfulSingleImage {
              id
              title
              imageSize
              mainImage {
                fluid {
                  sizes
                  aspectRatio
                  base64
                  src
                  srcSet
                }
              }
            }
            ... on ContentfulTwoColumnText {
              id
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
                fluid {
                  sizes
                  aspectRatio
                  base64
                  src
                  srcSet
                }
              }
              imageRight {
                fluid {
                  sizes
                  aspectRatio
                  base64
                  src
                  srcSet
                }
              }
            }
          }
          backgroundMedia {
            fluid {
              sizes
              aspectRatio
              base64
              src
              srcSet
            }
            file {
              contentType
              url
            }
          }
          thumbnailMedia {
            fluid {
              sizes
              aspectRatio
              base64
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
