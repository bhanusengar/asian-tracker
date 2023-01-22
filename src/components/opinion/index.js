import React from 'react'
import Link from 'next/link'
import { formatDate } from '../../../utils'
const OpinionComponent = ({opinionItem}) => {
 
  return (
    <div class="farme-meun_in_11_box card-new">
      <div class="farme_meun_in_img">
        <img className='opinionImg' src={opinionItem.image} />
      </div>
      <div class="farme_meun_11_text">
        <div class="farme_meun_conter">
          <Link href={`opinion/${opinionItem.slug}`} ><h1>{opinionItem.title}</h1></Link>
          <p>{opinionItem.short_desc}</p>
        </div>
        <span>{formatDate(opinionItem.created_at)}|<span className='text-capitalize'>{opinionItem.category.title}</span></span>
      </div>
    </div>
  )
}

export default OpinionComponent