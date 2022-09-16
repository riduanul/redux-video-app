import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideo } from "./VideoApi"

const initialState = {
    video : {},
    isLoading: false,
    isError: false,
    error:''
}
//async thunk
export const fetchVideo = createAsyncThunk('video/fetchVideo',
 async(id)=> {
        const video = await getVideo(id);
        
        return video;
       
})


const VideoSlice = createSlice({
    name: 'video',
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase(fetchVideo.pending, (state)=> {
            state.isError = false;   
            state.isLoading = true;
        })
        .addCase(fetchVideo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.video = action.payload;
        })
        .addCase(fetchVideo.rejected, (state, action)=> {
            state.isLoading = false;
            state.video = {};
            state.isError = true;
            state.error = action.error?.message;
        })
    }

})

export default VideoSlice.reducer;