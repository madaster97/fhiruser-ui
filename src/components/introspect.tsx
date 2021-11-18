import React, { Fragment } from 'react'
import { PageHeader, Pre, Paragraph } from './core'

const IntrospectPage: React.FC<{
  introspectEndpoint: string
  accessToken: string
}> = ({ accessToken, introspectEndpoint }) => {
  return (
    <Fragment>
      <PageHeader text='token introspection' />

      <Paragraph>Here's the content of the HTTP request.</Paragraph>
      <Pre>
        <p>POST {introspectEndpoint}</p>
        <p>Authorization: Bearer {accessToken}</p>
        <p>Content-Type: application/x-www-form-urlencoded</p>
        <br />
        <p>token={accessToken}</p>
      </Pre>
    </Fragment>
  )
}
export default IntrospectPage
