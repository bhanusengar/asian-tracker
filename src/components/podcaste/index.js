import React from 'react'
import { formatDate } from '../../../utils'
import Link from 'next/link'
const index = ({ podcast }) => {

  return (

    <>

      <section class="section-banner-in-0">
        <div class="scrn-container">
          <div class="section-scrn_banner ">
            <div class="lift-side_lg">
              <div class="lift-side-text">
                Podcasts
              </div>
              <div class="right-side_lg">
              <Link href={`podcaste/all`}>See All</Link>
              </div>
            </div>
            <div class="row felis-bt">

              {
                podcast.bool && podcast.data.length != 0 && podcast.data.slice(0, 4).map((podcastItem, key) => {
                  return <div class="col-md-3 farme_in_meun_12">
                    <div class="farme_col_meun-_img">
                      <img src={podcastItem.image} />
                    </div>
                    <div class="farme-meun-toggole_12">
                    
                      <Link href={`podcaste/${podcastItem.slug}`} > <h1>{podcastItem.title}</h1></Link>
                      <p>{podcastItem.short_desc}</p>
                    </div>
                    <audio id="squiggle" src={podcastItem.audio} controls>
        Squiggle
      </audio>
                    {formatDate(podcastItem.created_at)}|<span className='text-capitalize'>{podcastItem.category.title}</span>
                  </div>
                })
              }


            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default index