import Head from "next/head"
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from "react";

export default function Header(children) {
  const router = useRouter();

  
  return (
    <>
      <Head>
        <meta charSet={'utf-8'} />
        <meta name={'viewport'} content={'width=device-width, initial-scale=1, shrink-to-fit=no'} />
        <meta name="google-site-verification" content="A-2wTKInJgPeZBUQnYLPGAffZ_YmNF-ARQxpu3twdGw" />
        <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled"></meta>
        <title>Asian Tracker</title>
        <link href={'./css/style.css'} rel={'stylesheet'} />
        <link href={'/css/custom.css'} rel={'stylesheet'} />
      </Head>
    </>
  )
}
