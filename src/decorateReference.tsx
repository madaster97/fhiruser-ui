import React, { Fragment } from 'react'
import DecorateString from './decorateString'
const findRefRegex = /"(?:reference)": "\S+?"/g

const DecorateReference: React.FC<{
  jsonString: string
  onRefClick: (ref: string) => void
}> = ({ jsonString, onRefClick }) => {
  const plain = (s: string) => <Fragment>{s}</Fragment>
  const reference = (ref: string) => (
    <span
      className='hover:bg-blue-100 bg-green-200'
      onClick={() => onRefClick(ref.split(' "')[1].slice(0, -1))}
    >
      {ref}
    </span>
  )
  return (
    <Fragment>
      {DecorateString(findRefRegex, plain, reference, jsonString)}
    </Fragment>
  )
}
export default DecorateReference
