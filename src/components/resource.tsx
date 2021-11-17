import React from 'react';
import { PageHeader, Code } from './core';
import FhirRequest from './fhirRequest';

const ResourcePage: React.FC<{ resource: string, headerText: string, iss: string, accessToken: string, onRefClick: (ref: string) => void }> =
    ({ headerText, resource, iss, accessToken,onRefClick }) => {
        return (<>
            <PageHeader text={headerText} />
            <br />
            <Code>{resource}</Code>

            <FhirRequest onRefClick={onRefClick} accessToken={accessToken} request={{ type: 'resource', iss, resource }} ></FhirRequest>
        </>)
    }
export default ResourcePage;