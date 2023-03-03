import React from 'react'
import { Link } from 'react-router-dom'

function PostSecondary({id, title}) {
  return (
    <div className='p-3 lg:px-5 lg:py-0 max-w-xl'>
        <p className='text-lg font-light '>Fecha</p>
        <h1 className='font-bold text-xl'>{title}</h1>
        <div className='flex justify-end'>
            <Link className='py-2 px-4 text-white hover:bg-green-600 rounded-2xl m-2 bg-principal ' to={`/post/${id}`}>Leer Más</Link>
        </div>
    </div>
  )
}

export default PostSecondary