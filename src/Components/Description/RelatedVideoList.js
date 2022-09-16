import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RelatedVideoItem from './RelatedVideoItem'
import {fetchRelatedVideos} from '../../features/RelatedVideos/RelatedVideosSlice'
import Loading from '../UI/Loading'

function RelatedVideoList({currentVideoId, tags}) {

  const dispatch = useDispatch()
  const {relatedVideos, isLoading, isError, error} = useSelector(state => state.relatedVideos)
 
  useEffect(()=>{
    dispatch(fetchRelatedVideos({tags, id: currentVideoId}))
  },[dispatch, tags, currentVideoId])
  

//decide what to rander

let content = null;
if(isLoading) content = <Loading/>;
if(!isLoading && isError) content = <div className= "col-span-12">{error}</div>
if(!isLoading && !isError && relatedVideos?.length === 0) content = <div className= "col-span-12">No Reladed Videos Found!</div>
if(!isLoading && !isError && relatedVideos?.length > 0) {
  content = relatedVideos.map(video => <RelatedVideoItem key={video.id} video={video}/>)
}

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {content}
    </div>
  )
}

export default RelatedVideoList