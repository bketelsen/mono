exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        articles: allStrapiArticle(filter: {live: {eq: true}, publication: {id: {eq: 1}}}) {
          edges {
            node {
              strapiId
              slug
            }
          }
        }
        projects: allStrapiProject(filter: {publication: {id: {eq: 1}}}) {
          edges {
            node {
              strapiId
              slug
            }
          }
        }

        pages: allStrapiPage(filter: {publication: {id: {eq: 1}}}) {
          edges {
            node {
              strapiId
              slug
            }
          }
        }
        categories: allStrapiCategory {
          edges {
            node {
              strapiId
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog articles pages.
  const articles = result.data.articles.edges
  const categories = result.data.categories.edges
  const pages = result.data.pages.edges
  const projects = result.data.projects.edges
  
  articles.forEach((article, index) => {
    createPage({
      path: `/article/${article.node.slug}`,
      component: require.resolve("./src/templates/article.js"),
      context: {
        id: article.node.slug,
      },
    })
  })

  categories.forEach((category, index) => {
    createPage({
      path: `/category/${category.node.slug}`,
      component: require.resolve("./src/templates/category.js"),
      context: {
        id: category.node.slug,
      },
    })
  })

  
  projects.forEach((project, index) => {
    createPage({
      path: `/projects/${project.node.slug}`,
      component: require.resolve("./src/templates/project.js"),
      context: {
        id: project.node.slug,
      },
    })
  })

  pages.forEach((page, index) => {
    console.log(page.node.slug);
    createPage({
      path: `/pages/${page.node.slug}`,
      component: require.resolve("./src/templates/page.js"),
      context: {
        id: page.node.slug,
      },
    })
  }) 
  
}
