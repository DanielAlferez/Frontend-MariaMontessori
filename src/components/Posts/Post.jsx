import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchPosts } from '../../features/News/thunks';
import Layout from '../layout/Layout';

function Post() {

    const params = useParams();
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchPosts());
      }, [dispatch])

    const posts = useSelector((state) => state.posts.posts)
    const post = posts.find(objeto => objeto.id == params.id)
    console.log(post.titulo)
    return (
    <div>
        <Layout>
            {post.titulo}
            {post.imagen}
        </Layout>
    </div>
  )
}

export default Post