import React from 'react'
import Link from 'next/link'

export const FeaturedImage = ({ imageItem1 }) => {

  return (
    <div class="carousel-item active">
      <div class="claim-text">
        <div class="imex-lift">
          <img src="images/Rectangle 2497.png" />
        </div>
        <div class="farme_31">
          <div class="farme_30_0">
          <Link href={`image/${imageItem1.id}`} > <h1>{imageItem1.title}</h1></Link>
            
            <p>{imageItem1.short_desc}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export const LikeImage = ({ imageItem2 }) => {
console.log(imageItem2,'imageItem2')
  return (
    <div class="carousel-item active">
      <div class="farme-meun_32">
        <div class="farme-meun_30-in">
          <div class="farme-lift-side-imges">
            <img src="images/cortoon.png" />
          </div>
          <div class="farme-meun_right-text">
          <Link href={`image/${imageItem2.id}`} > <h1>{imageItem2.title}</h1></Link>
            <p>{imageItem2.short_desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export const MostViewedImage = ({ multipleimage }) => {
  
  return (
    <div class="farme_meun_text_12 banner-meun">
      {
        multipleimage.bool && multipleimage.data.length != 0 && multipleimage.data.slice(0, 2).map((elem, key) =>

        (
          <>
            <div class="farme_col_meun ">
              <img className='mostviewedimage' src="/images/Rectangle 2500.png" />
            </div>
            <div class="farme_in_meun_12">
              <div class="farme-meun-toggole_12">
                <Link href={`image/${elem.id}`} ><h1 className='px-2'>{elem.title}</h1></Link>
              </div>
              <span className='px-2'>December 22, 2022 | Politics</span>
            </div>
          </>
        )
        )
      }

    </div>
  )
}
