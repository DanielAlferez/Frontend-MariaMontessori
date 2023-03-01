import React from 'react'

function PostSecondary() {
  return (
    <div className='p-3 lg:px-5 lg:py-0 max-w-xl'>
        <p className='text-lg font-light '>Fecha</p>
        <h1 className='font-bold text-xl'>Todos contra el riesgo</h1>
        <div className='flex justify-end'>
          <button className='py-2 px-4 text-white hover:bg-green-600 rounded-2xl m-2 bg-principal '>Leer mas</button>
        </div>
    </div>
  )
}

export default PostSecondary