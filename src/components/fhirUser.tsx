import React, { Fragment } from 'react'
import { PageHeader, Pre, Paragraph, Code } from './core'
import jwtDecode from 'jwt-decode'
import FhirRequest from './fhirRequest'

const FhirUserPage: React.FC<{
  accessToken: string
  idToken: string
  onRefClick: (ref: string) => void
}> = ({ accessToken, idToken, onRefClick }) => {
  const decoded = jwtDecode(idToken) as { [key: string]: string }
  const { fhirUser } = decoded
  return (
    <Fragment>
      <PageHeader text='openid and fhirUser content' />

      <Paragraph>
        Here's the recevied <Code>id_token</Code>
      </Paragraph>
      <Pre>{idToken}</Pre>

      <Paragraph>Here's the decoded token</Paragraph>
      <Pre>{JSON.stringify(decoded, null, 2)}</Pre>

      {fhirUser ? (
        <FhirRequest
          onRefClick={onRefClick}
          accessToken={accessToken}
          request={{ type: 'url', url: fhirUser }}
        />
      ) : (
        <Paragraph>
          No <Code>fhirUser</Code> in token
        </Paragraph>
      )}
    </Fragment>
  )
}
export default FhirUserPage
