import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
const FirstNavbar = () => {

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
                                <li><a href="#">Defense</a>
                                    <i className="fa fa-caret-down"></i>
                                    <ul>
                                        <li><a href="#">Web Designing</a></li>
                                        <li><a href="#">Web Development</a></li>
                                        <li><a href="#">Digital Marketing</a>
                                            <i className="fa fa-caret-down"></i>
                                            <ul>
                                                <li><a href="#">Service 11</a></li>
                                                <li><a href="#">Service 11</a></li>
                                                <li><a href="#">Service 11</a>
                                                    <i className="fa fa-caret-down"></i>
                                                    <ul>
                                                        <li><a href="#">Service 111</a></li>
                                                        <li><a href="#">Service 111</a></li>
                                                        <li><a href="#">Service 111</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact Us</a></li>
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