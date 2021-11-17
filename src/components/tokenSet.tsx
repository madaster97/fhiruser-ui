import React from 'react';
import { PageHeader, Pre, Paragraph, Code } from './core';

export type TokenResponse = {
    access_token: string,
    token_type: string,
    expires_in?: number,
    scope: string,
    id_token?: string,
    refresh_token?: string,
    state?: string,
    [key: string]: string | number | undefined
}

export const TokenSetPage: React.FC<{ tokenResponse: TokenResponse }> = ({ tokenResponse }) => {
    return (<>
        <PageHeader text={"token endpoint response"} />

        <Paragraph>Here's the current <Code>access_token</Code>. Go wild.</Paragraph>
        <Pre>{tokenResponse.access_token}</Pre>

        <Paragraph>
            This is the returned <Code>tokenSet</Code>.
            Check that the scope string contains <Code>openid</Code> and <Code>fhirUser</Code>.<br />
            Those claims must be requested to obtain proper OIDC data, and the app must have a <strong>base fhir version of R4</strong> in order to receive a fhirUser claim.</Paragraph>
        <Pre>{JSON.stringify(tokenResponse, null, 2)}</Pre>
    </>)
}