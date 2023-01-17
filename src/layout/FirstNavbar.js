import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import $ from 'jquery'
const FirstNavbar = () => {
   
    if (typeof window !== 'undefined') {

       
            $(".nav_ico").click(function(){
                $(".main_nav").toggleClass("active");
            });
            $(".main_nav").click(function(){
                $(this).removeClass("active");
            });
            $( ".main_nav ul" ).click(function( event ) {
                event.stopImmediatePropagation();
            });	
    
    }

    return (
        <>
            <Head>
                <link href={'/css/navbar.css'} rel={'stylesheet'} />
            </Head>

            <header id="header" className='bg-white'>
                <div id="container">
                    <div className="header_left">
                        <a className="logo" href="#"><Image src="/icons/logo.svg" alt="logo" width="231" height="50" /></a>
                    </div>
                    <div className="header_right">
                        <label htmlFor="menuTrigger" className="nav_ico"><i className="fa fa-bars"></i></label>
                        <input id="menuTrigger" type="checkbox" name="" />
                        <nav className="main_nav">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Defense</a></li>
                                <li><a href="#">Economy</a></li>
                                <li><a href="#">Sci-tech</a></li>
                                <li><a href="#">Opinion</a></li>
                                <li><a href="#">More</a>
                                    <i className="fa fa-caret-down"></i>
                                    <ul>
                                        <li><a href="#">Web Designing</a></li>
                                        <li><a href="#">Web Development</a></li>
                                       
                                    </ul>
                                </li>
                                
                            </ul>
                        </nav>
                    </div>
                    <div className="search">
                        <i className="fa fa-search"></i>
                        <input type="text" className="form-control shadow-none" placeholder="Search..." />
                    </div>
                    <div className="pe-4">
                        <Link href={'#'} className="text-dark bg-none text-decoration-none fw-semi-bold"> <i className="fa fa-user pe-2"></i>Login</Link>
                    </div>

                  
                </div>
            </header>
        </>


    )

}

export default FirstNavbar