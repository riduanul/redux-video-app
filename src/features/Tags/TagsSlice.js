import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTags } from "./TagApi"

const initialState = {
    tags : [],
    isLoading: false,
    isError: false,
    error:''
}
//async thunk
export const fetchTags = createAsyncThunk('videos/fetchTags',
 async()=> {
        const videos = await getTags();
        
        return videos;
       
})


const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase(fetchTags.pending, (state)=> {
            state.isError = false;   
            state.isLoading = true;
        })
        .addCase(fetchTags.fulfilled, (state, action) => {
            state.isLoading = false;
            state.tags = action.payload;
        })
        .addCase(fetchTags.rejected, (state, action)=> {
            state.isLoading = false;
            state.tags = [];
            state.isError = true;
            state.error = action.error?.message;
        })
    }

})

export default tagsSlice.reducer;