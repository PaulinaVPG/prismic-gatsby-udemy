import React from "react"
import Hero from "./hero"
import CallToActionGrid from "./callToActionGrid"
import PriceList from "./priceList"

const SliceZone = ({ body }) => {
  return (
    <>
      {body.map((bodyContent, i) => {
        if (bodyContent.type === "hero") {
          return (
            <Hero
              key={i}
              backgroundImage={bodyContent.primary.background_image.url}
              title={bodyContent.primary.hero_title}
              content={bodyContent.primary.hero_content}
            />
          )
        } else if (bodyContent.type === "call_to_action_grid") {
          return (
            <CallToActionGrid
              key={i}
              title={bodyContent.primary.section_title}
              callToActions={bodyContent.fields}
            />
          )
        } else if (bodyContent.type === "price_list") {
            return (
              <PriceList
                key={i}
                title={bodyContent.primary.title}
                prices={bodyContent.fields}
              />
            )
          } else {
          return null
        }
      })}
    </>
  )
}

export default SliceZone
