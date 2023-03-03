import React from 'react'
import Layout from './layout/Layout'
import News from '../features/News/News'
import Information from './Home/Information'
import AboutUs from './Home/AboutUs'
import Slide from './Home/Slide'
import ContactUs from './Home/ContactUs'

export default function Home() {

  const image = "https://scontent.fvvc1-1.fna.fbcdn.net/v/t39.30808-6/305665277_521963996597078_5034068545273866825_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=04h48Nf3D_4AX8nlm5E&_nc_ht=scontent.fvvc1-1.fna&oh=00_AfClEdsO1UxCg2vQQMu6J-nGhOyJa8GWbgIwV1Fexv7deA&oe=64032BED"

  return (
    <div className='bg-gray-50 overflow-x-hidden'>
      <Layout>
        <div className='flex flex-col gap-y-5 justify-center items-center text-principal font-bold text-4xl'>
          <p className='max-w-sm'>Nuestro reto es</p>
          <p className='max-w-sm'>LA EXCELENCIA</p>
        </div>
        <div className='mt-10 flex flex-col items-center'>
          <img src={image} className='h-[30rem] object-cover w-screen' />
          <div className='text-center bg-principal text-white text-xl py-14'>
            <p className='lg:mx-80 mx-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime nostrum at culpa eum in cupiditate soluta repudiandae deleniti. Cupiditate temporibus ut quaerat nesciunt, culpa maiores voluptatum tenetur unde voluptates ipsam reprehenderit soluta repellendus consequatur saepe doloribus hic quae, natus rerum pariatur in? Velit provident at maiores earum, nemo voluptas!</p>
          </div>
        </div>
        <News/>
        <Information/>
        <AboutUs/>
        <Slide/>
        <ContactUs/>
      </Layout>
    </div>
  )
}
