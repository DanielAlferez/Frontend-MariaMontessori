import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostPrimary from '../../components/Posts/PostPrimary'
import PostSecondary from '../../components/Posts/PostSecondary'
import { Skeleton } from '@mui/material'
import { fetchPosts } from './thunks'

function News() {

  const dispatch = useDispatch();
  const principalPost = useSelector(((state) => state.posts.primaryPosts))
  const secondaryPost = useSelector((state) => state.posts.secondaryPosts)
  const isLoading = useSelector((state) => state.posts.loading)

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch])

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
              <PostPrimary key={post.id} id={post.id} title={post.titulo} description={post.descripcion} image={post.imagen}/>
            ))}
          </div>
          <div className='flex flex-wrap lg:flex-col justify-center'>
            {secondaryPost.map((post) => (
              <PostSecondary key={post.id} id={post.id} title={post.titulo} description={post.descripcion} image={post.imagen}/>
            ))}
          </div>
        </div>
    </div>
  )
}

export default News