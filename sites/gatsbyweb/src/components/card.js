import React from "react"
import { Link } from "gatsby"

const Card = ({ article }) => {
  return (
    <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
      <div className="uk-card uk-card-default uk-card-hover">
        <div className="uk-card-media-top">
          <img
            src={article.node.image.publicURL}
            alt={article.node.image.publicURL}
            height="100"
          />
        </div>
        <div className="uk-card-body">


          {article.node.categories.map((cat, i) => {
            return (
              <div key={`category-${cat.name}`} className="uk-badge uk-label">{cat.display}</div>
              )
          })}

          <p id="title" className="uk-text-large">
            {article.node.title}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card
