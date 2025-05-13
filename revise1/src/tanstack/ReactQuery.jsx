import React from 'react'
import WorkingFile from './WorkingFile'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const ReactQuery = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <WorkingFile />
    </QueryClientProvider>
  )
}

export default ReactQuery