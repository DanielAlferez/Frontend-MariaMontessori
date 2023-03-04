import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./thunks";

const initialState = {
    posts: [],
    loading: false,
    error: null,
    primaryPosts: [],
    secondaryPosts: []
}

const newsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload
                const sortedPosts = action.payload.sort((a, b) => b.id - a.id);
                state.primaryPosts = sortedPosts.slice(0, 2)
                state.secondaryPosts = sortedPosts.slice(2, 5)
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.error = action.error.message
            })
    }
})

export default newsSlice.reducer;