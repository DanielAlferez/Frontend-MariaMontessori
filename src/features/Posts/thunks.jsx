import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = createAsyncThunk('posts/fetchPost', async (postId) => {
        const response = await axios.get(`https://backendmariamontessori-production.up.railway.app/api/post/${postId}`);
        return response.data;
})
