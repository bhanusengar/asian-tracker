import React from 'react'
import { formatDate } from './../../../utils'
import Link from 'next/link'
import { useRouter } from 'next/router';
const ThirdNews = ({ newsItem, title = '' }) => {
  const router = useRouter();

  const navigate = (id) =>
      router.push({
          pathname: '/news/something',
          query:'id='+newsItem.id

      });
  return (

    <div className="right-side-text">
       <img src={newsItem.urltoimage} />
      <div className="right-side-text-in">
        <div className="text-conter-0">
        <span onClick={() => navigate()} className="text-decoration-none cursor-pointer text-default"><h1>{newsItem.title}</h1></span>
                        <p>{newsItem.description}</p>
        </div>
        <span>{formatDate(newsItem.publishedAt)}|<span className='text-capitalize'>{title}</span>| 2hrs</span>
      </div>
    </div>
  )
}

export default ThirdNews