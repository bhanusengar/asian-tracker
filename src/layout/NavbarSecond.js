import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { menuCountry } from '@/http';
const NavbarSecond = () => {
    const [menu, setMenu] = useState([]);
    const getMenu = async ()=>{
        try{
            const {data} = await menuCountry();
            setMenu(data.data);
        }catch(err){
            console.log("message:", err.message);
        }
    }
   
    console.log(menu);

     useEffect(()=> {
        getMenu();
    },[])
    return (

        <>
            <Head>
                <link href={'/css/navbar1.css'} rel={'stylesheet'} />
            </Head>
            <nav className="navbar navbar-expand-lg py-0 " id='secondNavbar'>
                <ul>

                {
                    menu.length !=0 && menu.map((item)=>(
                    <li key={item.id}>
                        <Link className='text-capitalize'  href={item.slug} >{item.title}
                        </Link>
                    </li>
                    ))
                }


                    <li><Link href={'/test'}>War in Ukraine</Link></li>
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