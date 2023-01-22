import React from 'react'

const index = ({ storyItem }) => {
  // console.log("storyItem", storyItem)
  return (
    <div className="stories-menu">
      <div className="text-conter-tgooel">
        <img src={storyItem.image} className="img-thumbnail img-fluid" />
      </div><div className="text-tolyy">
        <div className="farme-9">
          <h1>{storyItem.title}</h1>
          <p>{storyItem.description}</p>
        </div>
        <span>December 22, 2022 | Politics</span>
      </div>
    </div>
  )
}

export default index