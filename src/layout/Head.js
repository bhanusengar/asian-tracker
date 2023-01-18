import Head from "next/head"
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from "react";

export default function Header(children) {
  const router = useRouter();

  
  return (
    <>

      <Head>

        {/* Meta */}
        <meta charSet={'utf-8'} />
        <meta name={'viewport'} content={'width=device-width, initial-scale=1, shrink-to-fit=no'} />
        <meta name="google-site-verification" content="A-2wTKInJgPeZBUQnYLPGAffZ_YmNF-ARQxpu3twdGw" />
        <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled"></meta>
        <title>Asian Tracker</title>
     
        {/* Favicon */}
        {/* <link href={'/favicon.ico'} rel={'icon'} type={'image/x-icon'} /> */}
        {/* core Custom css */}

        
       
      
      </Head>
      




    </>
  )
}
