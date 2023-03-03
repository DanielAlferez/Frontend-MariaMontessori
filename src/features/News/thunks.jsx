import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
        const response = await axios.get("https://backendmariamontessori-production.up.railway.app/api/posts/");
        return response.data;
})
