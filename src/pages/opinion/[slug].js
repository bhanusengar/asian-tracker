import React from 'react'
import { singleOpinion,AllOpinion } from '../../http'
const OpinionArticle = ({ data, lable }) => {

  return (
    <>
    {lable === 'single'?'signle':'all'}
    </>
  )
}

export default OpinionArticle

export async function getServerSideProps(context) {

  const { slug } = context.query;
  let object = {
  };

  if (slug) {
    object['slug'] = slug;
  }

  let lable = 'single'

if(slug === 'all'){
  lable = 'all';
}
  if(lable === 'single'){
    const { data } = await singleOpinion(object);
    return {
      props: { data,lable }
    }
  }else{
    const { data } = await AllOpinion();

    return {
      props: { data,lable }
    }
  }

}