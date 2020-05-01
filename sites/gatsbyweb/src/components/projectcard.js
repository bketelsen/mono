import React from "react"
import { Link } from "gatsby"

const ProjectCard = ({ article }) => {
  return (
    <Link to={`/projects/${article.node.slug}`} className="uk-link-reset">
      <div className="uk-card uk-card-default uk-card-hover">
        <div className="uk-card-media-top">
        <div className="uk-card-media-top">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt={article.node.title}
            height="100"
          />
        </div>
        </div>
        <div className="uk-card-body">

        <p id="title" className="uk-text-large">
            {article.node.title}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
