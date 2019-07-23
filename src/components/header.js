import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <Container>
    <HeaderWrapper>
      <Link className="site-link" to="/">
        <Title>{siteTitle}</Title>
      </Link>
    </HeaderWrapper>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const Container = styled.header`
  padding: 3.4rem 0 1rem;
`

const HeaderWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.0875rem;
  position: relative;
  z-index: 1;
`

const Title = styled.h1``
