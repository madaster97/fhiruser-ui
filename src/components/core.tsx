import React, { useRef, useState, Fragment } from 'react'

// // const findrefs = /"(reference|url)": "(https:\/\/?[-a-zA-Z0-9@:%._\+~#=]{1,256}\/(?:[-a-zA-Z0-9@:%._\+~#=]*\/)*)?([-a-zA-Z0-9@:%._\+~#=]+)\/([-a-zA-Z0-9@:%._\+~#=]+)"/g;
// const findrefs = /"(reference|url)": "(https:\/\/?[-a-zA-Z0-9@:%._+~#=]{1,256}\/(?:[-a-zA-Z0-9@:%._+~#=]*\/)*)?([-a-zA-Z0-9@:%._+~#=]+)
// \/([-a-zA-Z0-9@:%._+~#=]+)"/g;
// const parseref = /"/g

export const PageHeader: React.FC<{ text: string }> = ({ text }) => {
  return <h1 className='text-4xl'>{text}</h1>
}

export const Pre: React.FC<{}> = ({ children }) => {
  const [pressed, setPressed] = useState<boolean>(false)
  const preEl = useRef<HTMLPreElement>(null)
  return (
    <Fragment>
      <button
        className={
          'block p-4 text-sm btn ' + (pressed ? 'bg-green-400' : 'bg-gray-400')
        }
        onClick={async () => {
          if (preEl.current !== null) {
            setPressed(true)
            await navigator.clipboard.writeText(preEl.current.innerText)
            await new Promise((resolve) => setTimeout(resolve, 400))
            setPressed(false)
          }
        }}
      >
        Copy to Clipboard
      </button>
      <pre
        ref={preEl}
        className='block bg-gray-300 p-4 text-sm overflow-scroll'
      >
        {children}
      </pre>
    </Fragment>
  )
}

export const Paragraph: React.FC<{}> = ({ children }) => {
  return <p className='py-3'>{children}</p>
}

export const Code: React.FC<{}> = ({ children }) => {
  return <code className='bg-gray-200'>{children}</code>
}
