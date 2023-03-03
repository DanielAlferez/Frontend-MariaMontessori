import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    isLoading: false,
    primaryPosts: [],
    secondaryPosts: []
}

const newsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
            const sortedPosts = action.payload.sort((a, b) => b.id - a.id);
            state.primaryPosts = sortedPosts.slice(0, 2)
            state.secondaryPosts = sortedPosts.slice(2, 5)
        },
        startLoadingPosts: (state) => {
            state.isLoading = true
        }
    }
})

export const { setPosts, startLoadingPosts } = newsSlice.actions;

export default newsSlice.reducer;