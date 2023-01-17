import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const NavbarSecond = () => {

    return (

        <>
            <Head>
                <link href={'/css/navbar1.css'} rel={'stylesheet'} />
            </Head>
            <nav className="navbar navbar-expand-lg " id='secondNavbar'>
                <ul>
                    <li><Link href={'#'}>War in Ukraine</Link></li>
                    <li><Link href={'#'}>COVID-19</Link></li>
                    <li><Link href={'#'}>World</Link></li>
                    <li><Link href={'#'}>Middle East</Link></li>
                    <li><Link href={'#'}>Africa</Link></li>
                    <li><Link href={'#'}>Asia</Link></li>
                    <li><Link href={'#'}>US & Canada</Link></li>
                    <li><Link href={'#'}>Latin America</Link></li>
                    <li><Link href={'#'}>Europe</Link></li>
                    <li><Link href={'#'}>Asia Pacific</Link></li>
                </ul>
            </nav>
        </>
    )

}

export default NavbarSecond