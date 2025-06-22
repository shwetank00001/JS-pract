import React from 'react'
import { useErrorBoundary } from 'react-error-boundary'

const Error = () => {
    const { resetBoundary} = useErrorBoundary();
  return (
    <div>
        <p>Something went wrong!!!</p>
        <button onClick={resetBoundary}>Reload</button>
    </div>
  )
}

export default Error