import React from "react"
import { graphql } from "gatsby"
import RichText from "../components/richText"
import Layout from "../components/layout"
import SliceZone from "../components/sliceZone"
import styled from "styled-components"

export const query = graphql`
  query PageQuery($id: String) {
    prismic {
      allPages(id: $id) {
        edges {
          node {
            content
            page_title
            body {
              ... on PRISMIC_PageBodyCall_to_action_grid {
                type
                primary {
                  section_title
                }
                fields {
                  action_title
                  button_text
                  content
                  featured_image
                  link_destination {
                    ... on PRISMIC_Contact_page {
                      _meta {
                        uid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const PageWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
`

const Page = props => {
  const data = props.data.prismic.allPages.edges[0].node
  console.log(data)
  const pageTitle = data.page_title
  const content = data.content
  return (
    <Layout>
      <PageWrapper>
        <RichText render={pageTitle} />
        <RichText render={content} />
        {!!data.body && <SliceZone body={data.body} />}
      </PageWrapper>
    </Layout>
  )
}

export default Page
