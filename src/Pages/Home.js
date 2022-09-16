import React from 'react'
import Tags from '../Components/tags/Tags';
import VideoGrid from '../Components/Grid/VideoGrid';
import Pagination from '../Components/UI/Pagination';

function Home() {
  return (
  <>
     <Tags/>
      <VideoGrid/>
      <Pagination/>
   
   </>
  )
}

export default Home