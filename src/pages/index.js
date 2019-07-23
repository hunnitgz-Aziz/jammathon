import React from "react"
import styled from "styled-components"
import "../components/styles.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Faq from "../components/Faq"
import About from "../components/About"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About></About>
    <ButtonContainer>
      <a
        className="button-cta"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfTb23cq03PzPOXH8fTBteA03l-zvTtA6vdQJnvhWY0Texi-Q/viewform"
        target="_blank"
      >
        Apply
      </a>
    </ButtonContainer>
    <FaqContainer>
      <h3>FAQ</h3>
      {Faqs.map((faq, index) => (
        <Faq key={index} question={faq.question} answer={faq.answer} />
      ))}
    </FaqContainer>
  </Layout>
)

export default IndexPage

const FaqContainer = styled.div`
  margin-top: 4rem;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  align-content: center;
  align-items: center;
`

const Faqs = [
  {
    question: "Who can come?",
    answer:
      "Anyone who enjoys creating something and meeting people, especially within 12 hours.",
  },
  {
    question: "Do I need an idea?",
    answer:
      "Nope, but if you have one that's cool! Share it, but also be open to new open and unrelated ideas.",
  },
  {
    question: "What should I bring?",
    answer:
      "If you have one, laptops go a long way. But also bring anything you tinker with -- from pocket operators to sewing machines, anything is welcomed.",
  },
  {
    question: "Is there food?",
    answer: "Barely, bring whatcha got.",
  },
  {
    question: "When is it?",
    answer: "Saturday, August 17th @ 12pm",
  },
  {
    question: "Parking?",
    answer: "Get here early, because the block fills up. Carshare if you can.",
  },
]
