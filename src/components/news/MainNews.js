import React from 'react'
import { formatDate } from './../../../utils'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { makeTitleUrl } from './../../../utils'
const MainNews = ({ newsItem, title = '' }) => {

    const router = useRouter();

    const navigate = (id) =>
        router.push({
            pathname: '/news/something',
            query:'id='+newsItem.id

        });
    return (
        <div className="farme-meun-box">
            <div className="sideber-menu">
                <div className="sideber-menu-text">
                    <img src={newsItem.urltoimage} />
                    <div className="text-conter">
                        <span onClick={() => navigate()} href={'#'} className="text-decoration-none cursor-pointer text-default"><h1>{newsItem.title}</h1></span>
                        <p>{newsItem.description}</p>
                    </div>
                    <span>{formatDate(newsItem.publishedAt)}|<span className='text-capitalize'>{title}</span>| 2hrs</span>
                </div>
            </div>
        </div>
    )
}

export default MainNews