/* eslint react/prop-types:0 */

import React from 'react'

const runtime = {
  setQuery: () => {},
  account: 'account',
  hints: { mobile: false },
  culture: { currency: 'USD' },
}

export const withRuntimeContext = Comp =>
  function WrappedRuntimeContext(props) {
    return <Comp {...props} runtime={runtime} />
  }

export const Link = ({ children }) => <a href="dummy">{children}</a>

export const NoSSR = ({ children }) => (
  <div className="NoSSR-mock">{children}</div>
)

export const useRuntime = () => runtime
