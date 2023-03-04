import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/News/newsSlice'
import postReducer from '../features/Posts/postSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        post: postReducer
    }
})
