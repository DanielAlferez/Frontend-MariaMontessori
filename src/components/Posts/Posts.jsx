import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../features/News/thunks';
import Layout from '../layout/Layout';
import PostPrimary from './PostPrimary'

function Posts() {

  const posts = useSelector((state) => state.posts.posts)

  const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

  return (
    <Layout>
      <div>
        {posts.map((post) => (
          <PostPrimary key={post.id} id={post.id} title={post.titulo} description={post.descripcion} image={post.imagen}/>
        ))}
      </div>
    </Layout>
  )
}

export default Posts