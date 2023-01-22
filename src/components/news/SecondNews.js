import React from 'react'
import {formatDate} from './../../../utils'
import Link from 'next/link'
import { useRouter } from 'next/router';
const SecondNews = ({newsItem, title=''}) => {
  const router = useRouter();

  const navigate = (id) =>
      router.push({
          pathname: '/news/something',
          query:'id='+newsItem.id

      });
  return (
    <div className="farme-meun">
      <div className="farme-meun-in-9">
        <div className="imgex-in">
        <img src={newsItem.urltoimage} />
          <div className="farme-meun-9">
            <div className="farme-meun-in-all">
              <div className="farme-meun-in">
             
              <span onClick={() => navigate()} className="text-decoration-none cursor-pointer text-default"><h1>{newsItem.title}</h1></span>
                        <p>{newsItem.description}</p>
              </div>
              <span>{formatDate(newsItem.publishedAt)}|<span className='text-capitalize'>{title}</span>| 2hrs</span>
            </div>
          </div>
        </div>
      </div>
      <div className="top-line"></div>
    </div>
  )
}

export default SecondNews