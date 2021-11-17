import React, { useState, useEffect } from 'react';
import { Paragraph, Pre } from './core';
import { Request } from '../fhirRequest';
import FhirReference from '../decorateReference';

type Props = {
    request: { type: 'resource', iss: string, resource: string } | { type: 'url', url: string },
    accessToken: string,
    onRefClick: (ref: string) => void
};

const FhirRequest: React.FC<Props> = ({ request, accessToken, children, onRefClick }) => {
    const [response, setResponse] = useState<object | undefined>(undefined);
    const { url, display } = request.type === 'url'
        ? { url: request.url, display: request.url }
        : { url: request.iss + '/' + request.resource, display: request.resource };
    useEffect(() => {
        Request(url, accessToken).then(res => {
            setResponse(res.data);
        }).catch(err => setResponse(err));
    }, [accessToken, url]);
    return (
        typeof response === 'undefined'
            ? <Paragraph>Loading: {display}</Paragraph>
            : <>
                <Paragraph>Viewing: {display}</Paragraph>
                {children}
                <Pre><FhirReference onRefClick={onRefClick} jsonString={JSON.stringify(response, null, 2)} /></Pre>
            </>
    );
}
export default FhirRequest;