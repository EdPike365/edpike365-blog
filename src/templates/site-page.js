import * as React from "react"
import { graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import "./styles.css"

import Layout from "../components/layout/Layout"
import Seo from "../components/SEO"

const headerCSS = css`
  & > h1 {
    margin-top: 0rem;
    margin-bottom: 0.5rem;
    font-weight: var(--font-weight-light);
    text-align: center;
  }
`

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const title = post.frontmatter.title || post.fields.slug
  const postDate = post.frontmatter.date

  const { ogimage } = post.frontmatter
  // const ogImagePath = ogimage && ogimage.childImageSharp.fixed.src
  const ogImagePath = ogimage && getSrc(ogimage)
  // https://juliangaramendy.dev/blog/custom-open-graph-images-in-gatsby-blog

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={ogImagePath}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header css={headerCSS}>
          <h1 itemProp="headline">{title}</h1>
          <span className="overline">{postDate}</span>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <footer />
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query SitePageBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
