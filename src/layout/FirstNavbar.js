import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import $ from 'jquery'
import { menuCategory, menuCountry } from './../http';
import { useRouter } from 'next/router';
const FirstNavbar = () => {
    const { query } = useRouter();
    const router = useRouter();
    const [cotegory, setCotegory] = useState([]);
    const [country, setCountry] = useState([]);

    const { cu:countryid } = router.query;
    const getCotegory = async () => {
        
        try {
            const { data } = await menuCategory();
            setCotegory(data.data);
        } catch (err) {
            console.log("message:", err.message);
        }
    }
   
    const getCountry = async () => {
        try {
            const { data } = await menuCountry();
            setCountry(data.data);
        } catch (err) {
            console.log("message:", err.message);
        }
    }
    const navigate = (id) =>
        router.push({
            pathname: `/category/${id}`,
            query: countryid?"="+countryid:null
        });
    // console.log(menu);

    useEffect(() => {
        getCotegory();
        getCountry();

    }, [])
    let cotegorySlug = ''
    let cot = '';
    let cu = '';
    return (
        <>
            <Head>
                <link href={'/css/navbar.css'} rel={'stylesheet'} />
            </Head>

            <header>
                <section className="header-social">
                    <div className="header-social-box scrn-container">
                        <div className="social-icon-box">
                            <p>Follow Us : </p>
                            <ul className="socail-list">
                                <li><a href="#" className="socail-link" target="_blank"><img
                                    src="/images/social-icon/face.svg" /></a></li>
                                <li><a href="#" className="socail-link" target="_blank"><img
                                    src="/images/social-icon/image 1.svg" /></a></li>
                                <li><a href="#" className="socail-link" target="_blank"><img
                                    src="/images/social-icon/image 10.svg" /> </a></li>
                                <li><a href="#" className="socail-link" target="_blank"><img
                                    src="/images/social-icon/image 5.svg" /></a></li>
                                <li><a href="#" className="socail-link" target="_blank"><img
                                    src="/images/social-icon/image 7.svg" /></a></li>
                                <li><a href="#" className="socail-link" target="_blank"><img
                                    src="/images/social-icon/koo.svg" /></a></li>
                                <li><a href="#" className="socail-link" target="_blank"><img src="/images/social-icon/twiter.svg" />
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="header-main-menu">
                    <div className="header-container">
                        <nav className="navbar navbar-expand-lg main-navbar">
                            <div className="scrn-container header-mani-container container-fluid">
                                <Link className="navbar-brand" href="/"><img src="/icons/logo.svg" /></Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav my-main-menu">
                                        {
                                            cotegory.length != 0 && cotegory.map((menu) => {

                                                cot = menu.id;

                                                return (
                                                    <li className="nav-item" key={menu.id}>
                                                        <span onClick={() => navigate(menu.slug)} className='cursor-pointer text-capitalize nav-link link-color'


                                                        >{menu.title}</span>

                                                    </li>
                                                )
                                            })
                                        }
                                        {/* <li className="nav-item">
                                    <a className="nav-link active link-color" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-color" href="#">News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-color" href="#">Defense</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-color" href="#">Economy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-color" href="#">Sci-tech</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link link-color" href="#">Opinion</a>
                                </li>
                                <li className="nav-item dropdown menu-has-deropdown">
                                    <a className="nav-link link-color dropdown-toggle has-menu-toggle" href="#"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More
                                    </a>
                                    <ul className="dropdown-menu menu-has-deropdown-submenu">
                                        <li><a className="dropdown-item link-color" href="#">Action</a></li>
                                        <li><a className="dropdown-item link-color" href="#">Another action</a></li>
                                        <li><a className="dropdown-item link-color" href="#">Something else here</a></li>
                                    </ul>
                                </li> */}
                                    </ul>
                                </div>
                                <div className="user-and-search-box">
                                    <div className="search-box">
                                        <form className="d-flex" role="search">
                                            <button className="btn search-btn" type="submit"><img src="/images/Search.svg" /></button>
                                            <input className="form-control shadow-none bg-none bg-default me-2" type="search" placeholder="Search"
                                                aria-label="Search" required />
                                        </form>
                                    </div>

                                    <div className="user-auth">
                                        <div className="dropdown user-dropdown">
                                            <a className="dropdown-toggle user-toggle link-color" href="#" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src="/images/Profile.svg" /> <span>Login</span>
                                            </a>
                                            {/* <!-- <ul className="dropdown-menu  user-dropdown-menu">
                                        <h2>Pradeep Kumar</h2>
                                        <a href="#">xya2468@gmail.com</a>
                                    </ul> --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </section>
                <section className="color-header">
                    <div className="scrn-container">
                        <ul className="color-menu">

                            {
                                country.length != 0 && country.map((item) => {

                                    cu = item.slug;
                                    return (
                                        <li className="nav-item" key={item.id}>
                                            <Link className='text-capitalize color-li-link'
                                                href={{
                                                    pathname: router.pathname,
                                                    query: { ...query, cu },
                                                }}
                                            // passHref
                                            // shallow
                                            // replace
                                            >{item.title}</Link>

                                        </li>
                                    )
                                })
                            }

                            {/* <li className="color-li"><a href="#" className="color-li-link">War in Ukraine</a></li>
                    <li className="color-li"><a href="#" className="color-li-link">COVID-19</a></li>
                    <li className="color-li"><a href="#" className="color-li-link">World</a></li>
                    <li className="color-li"><a href="#" className="color-li-link">Middle East</a></li>
                    <li className="color-li"><a href="#" className="color-li-link">Africa</a></li>
                    <li className="color-li"><a href="#" className="color-li-link">Asia</a></li>
                    <li className="color-li"><a href="#" className="color-li-link">US & Canada</a></li>
                    <li className="color-li"><a href="#" className="color-li-link">Latin America</a></li>
                    <li className="color-li"><a href="#" className="color-li-link">Europe</a></li>
                    <li className="color-li"><a href="#" className="color-li-link">Asia Pacific</a></li> */}
                        </ul>
                    </div>
                </section>
            </header>
        </>


    )

}

export default FirstNavbar