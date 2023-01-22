import React from 'react'
import Link from 'next/link'
import { formatDate } from '../../../utils'
const AllPodcaste = ({ data }) => {
  return (
    <section class="section-banner-in-0 mt-1">
  
        <div class="container ">

          <div class="row felis-bt">

            {
              data.bool && data.data.length != 0 && data.data.map((podcastItem, key) => {
                return <div class="col-md-3 farme_in_meun_12 mb-4 banner-meun">
                  <div class="farme_col_meun-_img">
                    <img src={podcastItem.image}  height={179} width={284}  />
                  </div>
                  <div class="farme-meun-toggole_12">

                    <Link href={`podcaste/${podcastItem.slug}`} > <h5>{podcastItem.title}</h5></Link>
                    <p>{podcastItem.short_desc}</p>
                    <audio id="squiggle" src={podcastItem.audio} controls>
        Squiggle
      </audio>
                  </div>
                  {formatDate(podcastItem.created_at)}|<span className='text-capitalize'>{podcastItem.category.title}</span>
                </div>
              })
            }


          </div>
      
      </div>
    </section>
 
  )

}

export default AllPodcaste