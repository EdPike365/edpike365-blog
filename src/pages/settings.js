import * as React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout/Layout"
import Seo from "../components/SEO"
import Section from "../components/Section"
import DarkModeToggle from "gatsby-head-style-boss/components/DarkModeToggle"
import StyleSelector from "gatsby-head-style-boss/components/StyleSelector"
import StylesSummary from "gatsby-head-style-boss/components/StylesSummary"
import PrefersDarkMode from "gatsby-head-style-boss/components/PrefersDarkMode"

const DarkModeToggleIconDiv = styled.div`
  display: inline-flex;
  align-items: center;
  height: 2.8rem;
  & > .dark-mode-toggle {
    background-color: var(--color-background-paper);
    transition: color 400ms ease-in-out, background-color 400ms ease-in-out;
  }
`

const Settings = () => {
  return (
    <Layout>
      <Seo title="Settings" />
      <h2>Settings</h2>I put the link to this page up high in the nav to make it
      more likely that you'll come here to see my stuff. The widgets on this
      page are part of a library that I wrote called{" "}
      <a href="https://www.gatsbyjs.com/plugins/gatsby-head-style-boss/">
        gatsby-head-style-boss
      </a>
      .
      <Section title="Style Settings">
        <hr />
        NOTE!!!! Fire Theme is has a max-width setting as a demostration. If you
        don't see a change, change to a lower browser width. (ctrl + mouse
        scroll) <br />
        <DarkModeToggleIconDiv>
          Dark Mode Toggle: <DarkModeToggle />
        </DarkModeToggleIconDiv>{" "}
        <br />
        Style Selector: <StyleSelector />
        <hr />
        <PrefersDarkMode />
        <hr />
        <StylesSummary />
      </Section>
    </Layout>
  )
}

export default Settings
