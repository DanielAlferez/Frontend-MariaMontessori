import React from 'react'
import Post from './Post'
import PostSecondary from './PostSecondary'

function News() {
    
  return (
    <div>
        <h1 className='text-principal text-5xl font-bold pt-28 pl-36'>Noticias Recientes</h1>
        <div className='lg:grid grid-cols-3 lg:divide-x-8 m-20'>
          <div className='col-span-2'>
            <Post/>
            <Post/>
          </div>
          <div className='flex flex-wrap lg:flex-col justify-center'>
            <PostSecondary/>
            <PostSecondary/>
            <PostSecondary/>
            <PostSecondary/>
          </div>
        </div>
    </div>
  )
}

export default News