import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./VideosApi"

const initialState = {
    videos : [],
    isLoading: false,
    isError: false,
    error:''
}
//async thunk
export const fetchVedios = createAsyncThunk('videos/fetchVideos',
 async({tags, search})=> {
        const videos = await getVideos(tags, search);
        
        return videos;
       
})


const videoSlice = createSlice({
    name: 'videos',
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase(fetchVedios.pending, (state)=> {
            state.isError = false;   
            state.isLoading = true;
        })
        .addCase(fetchVedios.fulfilled, (state, action) => {
            state.isLoading = false;
            state.videos = action.payload;
        })
        .addCase(fetchVedios.rejected, (state, action)=> {
            state.isLoading = false;
            state.videos = [];
            state.isError = true;
            state.error = action.error?.message;
        })
    }

})

export default videoSlice.reducer;