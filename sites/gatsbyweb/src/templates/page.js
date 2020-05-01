import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"

export const query = graphql`
  query PageQuery($id: String!) {
    strapiPage(slug: { eq: $id }) {
      strapiId
      slug
      title
      content
      featured_image {
        publicURL
      }
      photo_credit
      photo_credit_url
    }
  }
`

const Article = ({ data }) => {
  const article = data.strapiPage
  return (
    <Layout>
      <div>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={article.featured_image.publicURL}
          data-srcset={article.featured_image.publicURL}
          data-uk-img
        >
          <h1>{article.title}</h1>
        </div>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown source={article.content} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article
