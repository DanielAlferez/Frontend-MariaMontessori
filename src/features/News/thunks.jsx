import axios from "axios";
import { setPosts, startLoadingPosts } from "./newsSlice";

export const getPosts = () => {
    return async (dispatch, getState) => {
        dispatch( startLoadingPosts() );
        const response = await axios.get("https://backendmariamontessori-production.up.railway.app/api/posts/");

        //TODO: Realizar peticion HTTP
        dispatch(setPosts(response.data) )
    }
}
