import { createSlice } from "@reduxjs/toolkit";
import { fetchPost } from "./thunks";

const initialState = {
    post: {},
    loading: false,
    error: null,
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.loading = false;
                state.post = action.payload
            })
            .addCase(fetchPost.rejected, (state, action) => {
                state.error = action.error.message
            })
    }
})

export default postSlice.reducer;