import React from "react"
import RichText from "./richText"
import styled from "styled-components"
import CallToActionBlock from "./callToActionBlock"

const CallToActionGridWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
`

const CallToActionHero = ({ title, callToActions }) => {
  return (
    <CallToActionGridWrapper>
      <RichText render={title} />
      {callToActions.map((callToAction, i) => {
        return (
          <CallToActionBlock
            key={i}
            featuredImage={callToAction.featured_image.url}
            title={callToAction.action_title}
            content={callToAction.content}
            buttonDestination={`/${callToAction.link_destination._meta.uid}`}
            buttonLabel={callToAction.button_text}
          />
        )
      })}
    </CallToActionGridWrapper>
  )
}

export default CallToActionHero
