import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>thriftingsanu</title>
        <meta name="title" content="thriftingsanu" />
        <meta name="description" content="Our mission is to support local communities by offering them a platform to donate and purchase used clothing in a safe and convenient manner." />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
