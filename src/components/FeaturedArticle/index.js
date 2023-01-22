import React from 'react'
import Image from 'next/image'
export const Article1 = ({ articleItem }) => {
  console.log(articleItem,'articleItem')
  return (
    <>

      <div class="farme-meun_in_11_box">
        <div class="farme_meun_in_img featuredArticle">
          <img src={articleItem.image} height={283} width={600} />
        </div>
        <div class="farme_meun_11_text">
          <div class="farme_meun_conter">
            <h1>{articleItem.title}</h1>
            <p>{articleItem.description}
            </p>
          </div>
          <span>December 22, 2022 | Politics</span>
        </div>
      </div>

    </>
  )
}
export const Article2 = ({ articleItem }) => {
  return (
    <>

      <div class="farme_meun_text_12">
        <div class="farme_col_meun-_img ">
        <img src={`${articleItem.image}`} height={179} width={284} />
        </div>
        <div class="farme_in_meun_12">
          <div class="farme-meun-toggole_12">
          <h1>{articleItem.title}</h1>
            <p>{articleItem.description}</p>
          </div>
          <span>December 22, 2022 | Politics</span>
        </div>
      </div>

    </>
  )
}
