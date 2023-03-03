import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post'
import PostSecondary from './PostSecondary'
import { getPosts } from './thunks'
import { Skeleton } from '@mui/material'

function News() {

  const dispatch = useDispatch();
  const principalPost = useSelector(((state) => state.posts.primaryPosts))
  const secondaryPost = useSelector((state) => state.posts.secondaryPosts)
  const isLoading = useSelector((state) => state.posts.isLoading)

  React.useEffect(() => {
    dispatch(getPosts())
  }, [])

  if (isLoading) {
    return(
      <div className='flex justify-center relative'>
        <Skeleton width={1200} height={900}/>
      </div>
    )
  }
  
  return (
    <div>
        <h1 className='text-principal text-5xl font-bold pt-28 pl-20 lg:pl-36'>Noticias Recientes</h1>
        <div className='lg:grid grid-cols-3 lg:divide-x-8 m-20'>
          <div className='col-span-2'>
            {principalPost.map((post) => (
              <Post key={post.id} title={post.titulo} description={post.descripcion} image={post.imagen}/>
            ))}
          </div>
          <div className='flex flex-wrap lg:flex-col justify-center'>
            {secondaryPost.map((post) => (
              <PostSecondary key={post.id} title={post.titulo} description={post.descripcion} image={post.imagen}/>
            ))}
          </div>
        </div>
    </div>
  )
}

export default News