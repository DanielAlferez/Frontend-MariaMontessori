import React from 'react'
import img1 from '../../assets/information_img3.webp'
import img2 from '../../assets/information_img4.webp'
import img3 from '../../assets/img_home.webp'

function Slide() {
  return (
    <div className='my-20 -mx-10 lg:-mx-20'>
      <div className='grid grid-cols-3 gap-x-3 lg:gap-x-10 '>
        <img className='w-full h-52 lg:h-72 object-cover'  src={img1} alt="" />
        <img className='w-full h-52 lg:h-72 object-cover'  src={img2} alt="" />
        <img className='w-full h-52 lg:h-72 object-cover'  src={img3} alt="" />
      </div>
    </div>
  )
}

export default Slide