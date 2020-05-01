import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"

export const query = graphql`
  query ProjectQuery($id: String!) {
    strapiProject(slug: { eq: $id }) {
      strapiId
      slug
      title
      content
      description
      github
    }
  }
`

const Article = ({ data }) => {
  const article = data.strapiProject
  return (
    <Layout>
      <div>
          <h1>{article.title}</h1>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <a href={article.github}>View on Github</a>
            <ReactMarkdown source={article.content} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article
