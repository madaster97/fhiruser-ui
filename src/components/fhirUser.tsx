import React from 'react';
import { PageHeader, Pre, Paragraph, Code } from './core';
import jwt_decode from 'jwt-decode';
import FhirRequest from './fhirRequest';

const FhirUserPage: React.FC<{
    accessToken: string, id_token: string, onRefClick:
        (ref: string) => void
}> = ({ accessToken, id_token, onRefClick }) => {
    const decoded = jwt_decode(id_token) as { [key: string]: string };
    const { fhirUser } = decoded;
    return (<>
        <PageHeader text={"openid and fhirUser content"} />

        <Paragraph>Here's the recevied <Code>id_token</Code></Paragraph>
        <Pre>{id_token}</Pre>

        <Paragraph>Here's the decoded token</Paragraph>
        <Pre>{JSON.stringify(decoded, null, 2)}</Pre>

        {!!fhirUser
            ? <FhirRequest onRefClick={onRefClick} accessToken={accessToken} request={{ type: 'url', url: fhirUser }} />
            : <Paragraph>No <Code>fhirUser</Code> in token</Paragraph>
        }
    </>);
}
export default FhirUserPage;