import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './thunks';
import Layout from '../../components/layout/Layout';
import PostPrimary from '../../components/Posts/PostPrimary'

function Posts() {

  const posts = useSelector((state) => state.posts.posts)

  const dispatch = useDispatch();
  React.useEffect(() => {
      dispatch(fetchPosts());
  }, [dispatch])

  

  return (
    <Layout>
      <div className='m-10 lg:m-32' >
        {posts.map((post) => (
          <PostPrimary key={post.id} id={post.id} title={post.titulo} description={post.descripcion} image={post.imagen}/>
        ))}
      </div>
    </Layout>
  )
}

export default Posts