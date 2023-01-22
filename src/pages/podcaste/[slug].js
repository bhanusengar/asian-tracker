import React from 'react'
import { singlePodcast,allPodcast } from '../../http'
import AllPodcaste from '../../components/podcaste/AllPodcaste'
const PodcateSingle = ({ data,lable }) => {

  return (
  <>
  {lable === 'single'?'signle':<AllPodcaste data={data} />}
  </>
  
  )
}

export default PodcateSingle

export async function getServerSideProps(context) {

  const { slug } = context.query;
  let object = {};
  let lable = 'single'

  if (slug) {
    object['slug'] = slug;
  }
if(slug === 'all'){
  lable = 'all';
}
  if(lable === 'single'){
    const { data } = await singlePodcast(object);
    return {
      props: { data,lable }
    }
  }else{
    const { data } = await allPodcast();

    return {
      props: { data,lable }
    }
  }

  
}