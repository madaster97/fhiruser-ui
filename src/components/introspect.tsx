import React from 'react';
import { PageHeader, Pre, Paragraph } from './core';

const IntrospectPage: React.FC<{ introspect_endpoint: string, accessToken: string }> = ({ accessToken, introspect_endpoint }) => {
    return (<>
        <PageHeader text={"token introspection"} />

        <Paragraph>Here's the content of the HTTP request.</Paragraph>
        <Pre>
            <p>POST {introspect_endpoint}</p>
            <p>Authorization: Bearer {accessToken}</p>
            <p>Content-Type: application/x-www-form-urlencoded</p>
            <br/>
            <p>token={accessToken}</p>
        </Pre>
    </>);
}
export default IntrospectPage;