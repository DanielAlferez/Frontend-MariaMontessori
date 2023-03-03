import React from 'react'

function Footer() {
  return (
    <div className='text-white bg-principal flex flex-col gap-10 lg:grid grid-cols-7 divide-y-4 lg:divide-y-0 lg:divide-x-4 p-20 content-center items-center justify-center'>
      <div className='flex justify-center col-span-3'>
        <img src="https://acacias.edu.co/images/MariaMontesori/escudomariamontesori.png" className='h-52 w-52'/>
      </div>
      <div className='px-20 py-5 col-span-2'>
        <h1 className='font-bold'>Siguenos:</h1>
        <div>
          <p>Whatsapp</p>
        </div>
        <div>
          <p>Facebook</p>
        </div>
        <div>
          <p>Twitter</p>
        </div>
      </div>
      <div className='px-20 py-5 col-span-2'>
        <h1 className='font-bold'>Contactanos:</h1>
        <div>
          <p>(+57) 3115187384</p>
        </div>
        <div>
          <p>Carrera 17A # 9-49 Barrio Jardín, Acacias, Meta</p>
        </div>
      </div>
    </div>
  )
}

export default Footer