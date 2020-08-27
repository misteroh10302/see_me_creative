/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const mySlug = (str) => {
  return str.trim().split(' ').join('-').toLowerCase();
}

exports.createPages = async function ({ actions, graphql }) {

  let projects = await graphql(`
      {
        allContentfulProjectTemplateOne {
            nodes {
              title
              tags
              subTitle
              postContent {
                id
                content {
                  json
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
              }
            }
          }
        }
      `)

  console.log(projects)
  projects.data.allContentfulProjectTemplateOne.nodes.forEach(edge => {
    const slug = edge;
    const parsedSlug = mySlug(slug.title.toLowerCase());

    actions.createPage({
      path: '/project/' + parsedSlug,
      component: require.resolve(`./src/pages/page-2.tsx`),
      context: {
        slug: slug.title,
        content: edge
      },
    })
  })
}