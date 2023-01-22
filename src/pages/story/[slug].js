import React from 'react'
import { allStory, } from '../../http'

const Story = ({ data }) => {

  return (
  <>
   <section class="section-banner-in-0 mt-1">
  <div class="container ">
    <div class="row felis-bt">
      {
        data.bool && data.data.length != 0 && data.data.map((story, key) => {
          return <div class="col-md-3 farme_in_meun_12 mb-4 banner-meun">
            <div class="farme_col_meun-_img">
              <img src={story.image}  height={179} width={284}  />
            </div>
            <div class="farme-meun-toggole_12">

              <Link href={`podcaste/${story.slug}`} > <h5>{story.title}</h5></Link>
              <p>{story.short_desc}</p>
             
            </div>
            {formatDate(story.created_at)}|<span className='text-capitalize'>{story.category.title}</span>
          </div>
        })
      }
    </div>

</div>
</section>
  </>
  
  )
}

export default Story

export async function getServerSideProps(context) {

  const { slug } = context.query;


    const { data } = await allStory();

    return {
      props: { data,lable }
    }
  }
