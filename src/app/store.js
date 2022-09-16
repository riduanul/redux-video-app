import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/Videos/VideosClice'
import videoReducer from '../features/video/VideoSlice'
import relatedVideosReducer from '../features/RelatedVideos/RelatedVideosSlice'
import tagsReducer from '../features/Tags/TagsSlice'
import filterReducer from '../features/Filter/filterSlice'


export const store = configureStore({
  reducer: {
  videos: videosReducer,
  video: videoReducer,
  relatedVideos: relatedVideosReducer,
  tags: tagsReducer,
  filter: filterReducer,
  },
});
