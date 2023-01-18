import Head from "./head"
import Navbar from './NavbarSecond'
import Footer from "./Footer"
import 'bootstrap/dist/css/bootstrap.css'
// import { useEffect } from "react"
import NavbarSecond from "./NavbarSecond"
import FirstNavbar from "./FirstNavbar"

export default function Layout(props) {

  return (<>
    <Head { ...props } ></Head>
    <FirstNavbar />
    <NavbarSecond />
    { props.children }
     <Footer /> 
  </>
  )
}