import React from "react"
import { graphql } from "gatsby"

import ArticlesComponent from "../components/articles"
import Layout from "../components/layout"

export const query = graphql`
  query Category($id: String!) {
    articles: allStrapiArticle(filter: {categories: {elemMatch: {slug: {eq: $id}}}}) {
      edges {
        node {
          id
          strapiId
          title
          slug
          categories {
            display
            slug
            name
          }
          image {
            publicURL
          }
        }
      }
    }
    category: strapiCategory(slug: { eq: $id }) {
      name
      slug
      display
    }
  }
`

const Category = ({ data }) => {
  const articles = data.articles.edges
  const category = data.category.display

  return (
    <Layout>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category}</h1>
          <ArticlesComponent articles={articles} />
        </div>
      </div>
    </Layout>
  )
}

export default Category
