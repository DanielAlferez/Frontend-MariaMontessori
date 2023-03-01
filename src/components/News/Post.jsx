import React from 'react'

function Post() {
  return (
    <div className='lg:grid grid-cols-5 items-center lg:mr-10 my-5'>
      <div className='col-span-2 h-full w-full'>
        <img className='object-cover h-full w-full' src="https://scontent.fvvc1-1.fna.fbcdn.net/v/t39.30808-6/305028827_2641914535943275_927229141139691863_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Owd11zzvKuoAX9K2FDS&_nc_ht=scontent.fvvc1-1.fna&oh=00_AfBzqCtMgOEOuvXrII2bNSOOCiRBQMdKZBVILQXWik6Fow&oe=6404893A"/>
      </div>
      <div className='col-span-3 flex flex-col lg:ml-10'>
        <h1 className='font-bold text-xl mb-5'>Narrando la justicia desde el territorio</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores laboriosam aliquid, a, excepturi, nesciunt quibusdam vitae laborum deserunt quo facilis assumenda vel iusto minima itaque odit numquam fugit?</p>
        <div className='flex justify-end'>
          <button className='py-2 px-6 text-white hover:bg-green-600 rounded-2xl mt-5 mr-5 bg-principal w-fit'>Leer mas</button>
        </div>
        </div>
    </div>
  )
}

export default Post 