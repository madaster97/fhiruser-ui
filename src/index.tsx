import React, { useState } from 'react'
import './App.css'
import fhirLogo from './favicon.png'
import ContextPage from './components/context'
import { TokenSetPage, TokenResponse } from './components/tokenSet'
import IntrospectPage from './components/introspect'
import FhirUserPage from './components/fhirUser'
import ResourcePage from './components/resource'

type PageName = 'tokenSet' | 'fhirUser' | 'introspect'
type NavState =
  | { type: 'page'; pageName: PageName }
  | { type: 'context'; keyName: string; id: string }
  | { type: 'reference'; reference: string; display?: string }

const navButtonClassName =
  'block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4'

const App: React.FunctionComponent<{
  tokenResponse: TokenResponse
  iss: string
  introspectEndpoint?: string
}> = ({ iss, tokenResponse, introspectEndpoint }) => {
  const [navState, setNavState] = useState<NavState>({
    type: 'page',
    pageName: 'tokenSet'
  })
  const {
    // eslint-disable-next-line camelcase
    access_token,
    // eslint-disable-next-line camelcase
    id_token,
    // eslint-disable-next-line camelcase
    token_type,
    // eslint-disable-next-line camelcase
    expires_in,
    // eslint-disable-next-line camelcase
    refresh_token,
    scope,
    state,
    ...context
  } = tokenResponse
  const contextKeys = Object.keys(context).filter((s) => /^[A-Za-z]+$/.test(s))
  const pages: PageName[] = ['tokenSet']
  const handleReference = (reference: string) => {
    setNavState({ type: 'reference', reference })
  }
  // eslint-disable-next-line camelcase
  if (typeof id_token === 'string') {
    pages.push('fhirUser')
  }
  if (typeof introspectEndpoint === 'string') {
    pages.push('introspect')
  }
  return (
    <div className='App bg-gray-200'>
      <nav className='flex items-center justify-between flex-wrap bg-gray-800 p-6'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
          <img
            src={fhirLogo}
            alt='fhirUser logo'
            className='fill-current h-8 w-8 mr-2'
            width='49'
            height='54'
          />
          <span className='font-semibold text-xl tracking-tight'>
            fhirUser: SMART on FHIR App
          </span>
        </div>
        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div className='text-sm lg:flex-grow'>
            {pages.map((pageName) => {
              return (
                <button
                  onClick={() => {
                    setNavState({ type: 'page', pageName })
                  }}
                  key={pageName}
                  className={navButtonClassName}
                >
                  {pageName}
                </button>
              )
            })}
            {contextKeys.map((keyName) => {
              return (
                <button
                  onClick={() => {
                    setNavState({
                      type: 'context',
                      keyName,
                      id: context[keyName] as string
                    })
                  }}
                  key={keyName}
                  className={navButtonClassName}
                >
                  {keyName}
                </button>
              )
            })}
          </div>
          <div>
            <a
              href='https://github.com/madaster97/fhiruser-ui'
              target='blank'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0'
            >
              <span className='font-semibold text-xl tracking-tight'>
                GitHub
              </span>
            </a>
          </div>
        </div>
      </nav>
      <div className='flex justify-center py-4'>
        <div className='w-5/6 lg:w-3/4 bg-white p-4 rounded overflow-hidden shadow-lg'>
          {(() => {
            switch (navState.type) {
              case 'context':
                return (
                  <ContextPage
                    onRefClick={handleReference}
                    // eslint-disable-next-line camelcase
                    accessToken={access_token}
                    iss={iss}
                    keyName={navState.keyName}
                    value={navState.id}
                  />
                )
              case 'reference':
                return (
                  <ResourcePage
                    onRefClick={handleReference}
                    resource={navState.reference}
                    headerText={
                      navState.display || `Resource: ${navState.reference}`
                    }
                    iss={iss}
                    // eslint-disable-next-line camelcase
                    accessToken={access_token}
                  />
                )
              case 'page':
                switch (navState.pageName) {
                  case 'fhirUser':
                    return (
                      <FhirUserPage
                        onRefClick={handleReference}
                        // eslint-disable-next-line camelcase
                        accessToken={access_token}
                        // eslint-disable-next-line camelcase
                        id_token={id_token as string}
                      />
                    )
                  case 'introspect':
                    return (
                      <IntrospectPage
                        // eslint-disable-next-line camelcase
                        accessToken={access_token}
                        introspect_endpoint={introspectEndpoint as string}
                      />
                    )
                  case 'tokenSet':
                    return <TokenSetPage tokenResponse={tokenResponse} />
                }
            }
          })()}
        </div>
      </div>
    </div>
  )
}
export default App
