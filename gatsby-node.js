/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: 'next-apps*',
    toPath: 'https://practice-nextjs.netlify.com/:splat',
    statusCode: 200
  })
}