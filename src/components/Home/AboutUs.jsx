import React from 'react'

function AboutUs() {
  return (
    <div>
        <div className='flex flex-col items-center my-20'>
            <h1 className='font-bold text-3xl lg:mx-80 mx-14 text-center mb-20'>Trabajamos furtemente para asistir, proteger y empoderar a comunidades vulnerables</h1>
            <div className='grid lg:grid-cols-2 gap-y-10 justify-center mx-10'>
                {/* mision */}
                <div className='lg:pl-48 lg:pr-16 flex flex-col items-center'>
                    <img className='rounded-full' src="https://cloudfront-us-east-1.images.arcpublishing.com/semana/NEDRHM3KONAINNZNFXGHSVR73E.jpg" alt="" />
                    <h1 className='text-center font-bold text-xl my-5'>Misión</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptates minus voluptatum saepe aliquam distinctio, et ducimus cupiditate temporibus quisquam. Nobis blanditiis aliquam molestiae odit quo nihil! Molestiae commodi distinctio delectus consequuntur mollitia fugiat non explicabo quaerat quis id nostrum, quia, ex odio. Numquam doloremque voluptas est eveniet. Molestias, incidunt!</p>
                </div>
                {/* vision */}
                <div className='lg:pl-16 lg:pr-48 flex flex-col items-center'>
                    <img className='rounded-full' src="https://cloudfront-us-east-1.images.arcpublishing.com/semana/NEDRHM3KONAINNZNFXGHSVR73E.jpg" alt="" />
                    <h1 className='text-center font-bold text-xl my-5'>Visión</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptates minus voluptatum saepe aliquam distinctio, et ducimus cupiditate temporibus quisquam. Nobis blanditiis aliquam molestiae odit quo nihil! Molestiae commodi distinctio delectus consequuntur mollitia fugiat non explicabo quaerat quis id nostrum, quia, ex odio. Numquam doloremque voluptas est eveniet. Molestias, incidunt!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs