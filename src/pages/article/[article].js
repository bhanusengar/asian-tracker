import React from 'react'
import { singleNews,allNews  } from '../../http'
const Article = ({ data,lable }) => {
  return (
    <>
    {lable === 'single'?'signle':'all'}
    </>
  )
}

export default Article

export async function getServerSideProps(context) {

  const { id,slug } = context.query;
  let object = {

  };

  if (id) {
    object['id'] = id;
  }

  let lable = 'single'

if(slug === 'all'){
  lable = 'all';
}
  if(lable === 'single'){
    const { data } = await singleNews(object);
    return {
      props: { data,lable }
    }
  }else{
    const { data } = await allNews();

    return {
      props: { data,lable }
    }
  }

}