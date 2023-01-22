import React from 'react'
import { singleImage } from '../../http'
const singleImageArticle = ({data, lable }) => {
  return (
    <>
    {lable === 'single'?'signle':'all'}
    </>
  )
}

export default singleImageArticle

export async function getServerSideProps(context) {


  const { slug } = context.query;
  let object = {};
  let lable = 'single'

  if (slug) {
    object['slug'] = slug;
  }

  if (slug) {
    object['slug'] = slug;
  }
if(slug === 'all'){
  lable = 'all';
}
  if(lable === 'single'){
    const { data } = await singleImage(object);
    return {
      props: { data,lable }
    }
  }else{
    const { data } = await allImage();

    return {
      props: { data,lable }
    }
  }
}