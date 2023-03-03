import React from 'react'
import { Link } from 'react-router-dom'

function PostPrimary({id, title, description, image}) {
  return (
    <div className='lg:grid grid-cols-5 items-center lg:mr-10 my-5'>
      <div className='col-span-2 h-full w-full'>
        <img className='object-cover h-full w-full' src={image}/>
      </div>
      <div className='col-span-3 flex flex-col lg:ml-10'>
        <h1 className='font-bold text-xl mb-5'>{title}</h1>
        <p>{description}</p>
        <div className='flex justify-end'>
            <Link className='py-2 px-6 text-white hover:bg-green-600 rounded-2xl mt-5 mr-5 bg-principal w-fit' to={`/post/${id}`}>Leer Más</Link>
        </div>
        </div>
    </div>
  )
}

export default PostPrimary