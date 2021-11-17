import React from 'react';
import DecorateString from './decorateString';
const findRefRegex = /"(?:reference)": "\S+?"/g;

const DecorateReference: React.FC<{jsonString: string, onRefClick: (ref: string) => void}> = ({jsonString,onRefClick}) => {
    const plain = (s: string) => (<>{s}</>);
    const reference = (ref: string) => (<span className="hover:bg-blue-100 bg-green-200" onClick={e => onRefClick(ref.split(" \"")[1].slice(0,-1))}>{ref}</span>);
    return <>{DecorateString(findRefRegex,plain,reference,jsonString)}</>;
}
export default DecorateReference;