import React from 'react'
import { IoLogoWhatsapp, IoLogoFacebook, IoLogoTwitch, IoLogoTwitter } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <div className='text-white bg-principal flex flex-col gap-10 lg:grid grid-cols-8 divide-y-4 lg:divide-y-0 lg:divide-x-4 p-14 lg:p-20 content-center items-center justify-center'>
      <div className='flex justify-center col-span-3'>
        <img src="https://acacias.edu.co/images/MariaMontesori/escudomariamontesori.png" className='h-52 w-52'/>
      </div>
      <div className='px-10 py-5 col-span-2 flex flex-col gap-2'>
        <h1 className='font-bold'>Siguenos:</h1>
        <div className='flex items-center gap-2'>
          <IoLogoWhatsapp className='w-10 h-10'/>
          <p>Whatsapp</p>
        </div>
        <div className='flex items-center gap-2'>
          <IoLogoFacebook className='w-10 h-10'/>
          <p>Facebook</p>
        </div>
        <div className='flex items-center gap-2'>
          <IoLogoTwitter className='w-10 h-10'/>
          <p>Twitter</p>
        </div>
      </div>
      <div className='px-5 py-5 col-span-3 flex flex-col gap-2'>
        <h1 className='font-bold'>Contactanos:</h1>
        <div className='flex items-center gap-2 ml-1.5'>
          <div className='w-7 h-7'>
            <BsFillTelephoneFill className='w-7 h-7'/>
          </div>
          <p>(+57) 3115187384</p>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-7 h-7 mr-1'>
            <MdLocationOn className='w-10 h-10'/>
          </div>
          <p>Carrera 17A # 9-49 Barrio Jardín, Acacias, Meta</p>
        </div>
      </div>
    </div>
  )
}

export default Footer