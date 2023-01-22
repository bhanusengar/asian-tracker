import React from 'react'
import { allMustSee  } from '../../http'
import Link from 'next/link'
import { formatDate } from '../../../utils'
const MustSee = ({ data }) => {

  return (
    <>
    <section class="section-banner-in-0 mt-1">
  <div class="container ">
    <div class="row felis-bt">
      {
        data.bool && data.data.length != 0 && data.data.map((item, key) => {
          return <div class="col-md-3 farme_in_meun_12 mb-4 banner-meun">
            <div class="farme_col_meun-_img">
              <img src={item.image}  height={179} width={284}  />
            </div>
            <div class="farme-meun-toggole_12">

              <Link className='text-dark' href={`podcaste/${item.slug}`} > <h6>{item.title}</h6></Link>
              <p>{item.short_desc}</p>
             
            </div>
            {formatDate(item.created_at)}|<span className='text-capitalize'>{item.category.title}</span>
          </div>
        })
      }
    </div>

</div>
</section>
    </>
  )
}

export default MustSee

export async function getServerSideProps(context) {

    const { data } = await allMustSee();
    return {
      props: { data }
    }
}