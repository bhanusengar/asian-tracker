import React from 'react'

const FeaturedVideo = ({videoItem,title=''}) => {
  console.log(videoItem,'videoItem')
  return (
    <div class="claim-text ">
                <div class="imex-lift">
                  <img className='img-fluid featuredImg' src={videoItem.image} />
                </div>
                <div class="farme_31">
                  <div class="farme_30_0">
                    <h1>{videoItem.title}</h1>
                    <p>{videoItem.description}</p>
                  </div>
                  <div class="right-side-imges">
                    <img src=" images/pngwing.com (30).png" />
                  </div>
                </div>
                </div>
  )
}

export default FeaturedVideo