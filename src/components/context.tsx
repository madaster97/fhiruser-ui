import React from 'react';
import ResourcePage from './resource';

function capitalizeFirstLetter(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
const ContextToResource: { [key: string]: string | undefined } = {
    loginDepartment: "Location"
}
const ContextPage: React.FC<{ keyName: string, value: string, iss: string, accessToken: string, onRefClick: (ref: string) => void }> =
    ({ keyName, value, iss, accessToken, onRefClick }) => {
        const maybeMapped = ContextToResource[keyName];
        const resourceType = !!maybeMapped ? maybeMapped : capitalizeFirstLetter(keyName);
        const resource = `${resourceType}/${value}`;
        return <ResourcePage onRefClick={onRefClick} resource={resource} headerText={`${keyName} context`} iss={iss} accessToken={accessToken} />
    }
export default ContextPage;