import React from "react"
import styled from "styled-components"

class About extends React.Component {
  render() {
    return (
      <HeroContainer>
        <LeadText>A collaboratory art space</LeadText>
        <SubText>
          There’s enough people fucking with the vision, but not enough
          people doing anything about it.
        </SubText>
        <ActionText>
          Make something, meet people in 12 hours. What do you have to lose?
        </ActionText>
      </HeroContainer>
    )
  }
}

export default About

const HeroContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding-bottom: 2rem;
`

const LeadText = styled.p``

const SubText = styled.p`
  max-width: 580px;
`

const ActionText = styled.p``
