import React from 'react'

const MoreLikeVideo = ({videoItem,title=''}) => {
  return (
    <div class="farme-meun_30-in">
      <div class="farme-lift-side-imges">
        <img className=' likevideoImg' src={videoItem.image} />
      </div>
      <div class="farme-meun_right-text">
        <h1>{videoItem.title}</h1>
        <p>{videoItem.description}</p>
      </div>
    </div>
  )
}

export default MoreLikeVideo