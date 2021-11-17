import axios from 'axios';

export const Request = (resource: string, accessToken: string) => {
    return axios.get(resource, {
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Accept': 'application/fhir+json'
        },
        responseType: 'json',
        timeout: 1000
    });
}