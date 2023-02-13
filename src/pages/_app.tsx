import type { AppProps } from 'next/app'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import DisableSSRWrapper from '@/components/DisableSSRWrapper'
import '@/styles/globals.css'
import BackgroundFilter from '@/components/BackgroundFilter'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60000,
    },
  },
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <DisableSSRWrapper>
        <BackgroundFilter />
        <Component {...pageProps} />
      </DisableSSRWrapper>
    </QueryClientProvider>
  )
}

export default App
