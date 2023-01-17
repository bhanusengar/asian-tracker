import '@/styles/globals.css'
import Layout from '@/layout'
import { useEffect } from 'react';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
  
   <Layout {...Component}>
      <Component {...pageProps} />
    </Layout>

 
  )
}
