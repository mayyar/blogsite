import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>
        I'm currently working as a software engineering intern at ServiceNow.
        <br />
        MS ECE @ Georgia Tech | EX-Microsoft Student Partner | Software Engineer
        | Full-Stack Developer | Data Engineer | Actively seeking Fall 2022 SWE
        Internship/Co-op
      </p>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
