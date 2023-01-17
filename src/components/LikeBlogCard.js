import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
const LikeBlogCard = ({ imgSrc, tittle, description }) => {
  return (
    <>
      <div className=' text-white LikeBlogCard mt-2'>
        <div className='leftSide'>
          <Image src={imgSrc} width={150} height={100} alt="" />
        </div>
        <div className='rightSide '>
          <h6 className=''>{tittle}</h6>
          <p className=''>{description}</p>
        </div>
      </div>
    </>
  )
}

export default LikeBlogCard