import React from "react"
import styled from "styled-components"

class Faq extends React.Component {
  render() {
    return (
      <Container>
        <Item>
          <Question>{this.props.question}</Question>
          <Answer>{this.props.answer}</Answer>
        </Item>
      </Container>
    )
  }
}

export default Faq

const Container = styled.div``
const Item = styled.div``
const Question = styled.h4``
const Answer = styled.p``
