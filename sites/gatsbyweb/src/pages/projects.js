import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import ProjectsComponent from "../components/projects"

import "../assets/css/main.css"

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          allStrapiProject {
            edges {
              node {
                content
                description
                github
                slug
                strapiId
                title
              }
            }
          }
        }
      `}
      render={data => (
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>Projects</h1>
            <ProjectsComponent articles={data.allStrapiProject.edges} />
          </div>
        </div>
      )}
    />
  </Layout>
)

export default IndexPage
