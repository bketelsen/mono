import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const Nav = () => (
  <div>
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link activeStyle={{ color: "red" }} to="/">Home</Link>
            </li>
          </ul>
        </div>

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">

            <li>                            
              <Link     activeStyle={{ color: "red" }}
 to={`/pages/about`}>About</Link>
            </li>
            <li>                            
              <Link activeStyle={{ color: "red" }} to={`/projects`}>Projects</Link>
            </li>
            <li>
              <a href="#">Categories</a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <StaticQuery
                    query={graphql`
                query {
                  allStrapiCategory {
                    edges {
                      node {
                        strapiId
                        slug
                        display
                      }
                    }
                  }
                }
              `}
                    render={data =>
                      data.allStrapiCategory.edges.map((category, i) => {
                        return (
                          <li key={category.node.strapiId}>
                            <Link to={`/category/${category.node.slug}`}>
                              {category.node.display}
                            </Link>
                          </li>
                        )
                      })
                    }

                  />

                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div >
)

export default Nav
