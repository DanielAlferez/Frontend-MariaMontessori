import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/News/newsSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})
