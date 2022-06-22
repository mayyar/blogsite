import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "../styles/index.scss"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Jim, currently an swe intern living in California.</h2>
      <h4>
        Software Engineer, Frontend Engineer and Full Stack Developer with
        extensive knowledge and years of experience, working in web technologies
        and data engineering, delivering quality work.
      </h4>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
