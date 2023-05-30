import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { GlobalContextProvider } from '@/states/context'

export default function App({ 
  Component, 
  pageProps: {session, ...pageProps}
}: AppProps) {
  return(
    <SessionProvider session={session}>
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </SessionProvider>
  )
}
