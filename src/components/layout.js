/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Emoji from "../components/Emoji"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"
import "./styles.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container className="body-wrapper">
      <Header siteTitle={data.site.siteMetadata.title} />
      <Wrapper>
        <Main>{children}</Main>
        <Footer>
          © {new Date().getFullYear()}, Made with{" "}
          <Emoji label="heart" symbol="❤️" /> from The Cribbington
        </Footer>
      </Wrapper>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Footer = styled.footer`
  padding: 2.5rem 0;
`

const Main = styled.main``

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  position: relative;
  z-index: 1;
`

const Container = styled.div``
