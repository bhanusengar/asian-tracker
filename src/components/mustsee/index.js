import React from 'react'
import { formatDate } from './../../../utils'
const index = ({ mustItem, title = '' }) => {

  return (

    <div class="farme-meun-toggole mb-4">
      <div class="farme-meun-9">
        <img className='mustseeImage' src={mustItem.image} />
      </div>
      <div class="farme-meun10">
        <div class="farme-meun-in">
          <h1>{mustItem.title}</h1>
          <p>{mustItem.description}</p>
        </div>
        <span>{formatDate(mustItem.created_at)}|<span className='text-capitalize'>{title}</span>| 2hrs</span>
      </div>
    </div>

  )
}

export default index