import React from 'react'
import Layout from './layout/Layout'
import News from '../features/News/News'
import Information from './Home/Information'
import AboutUs from './Home/AboutUs'
import Slide from './Home/Slide'
import ContactUs from './Home/ContactUs'
import IMG from '../assets/img_home.webp'

export default function Home() {


  return (
    <div className='overflow-x-clip'>
      <Layout>
        {/* <div className='mt-10 flex flex-col gap-y-5 justify-center items-center text-principal font-bold text-4xl'>
          <p className='max-w-sm'>Nuestro reto es</p>
          <p className='max-w-sm'>LA EXCELENCIA</p>
        </div> */}
        <div className='flex flex-col items-center'>
          <div className='relative h-screen'>
              <div className='w-full '>
                <img src={IMG} className='object-cover w-screen h-[40rem]' /> 
              </div>
              <div className='bg-principal bottom-0 w-full -mt-5 '>
                  <h1 className='text-white font-bold text-3xl lg:text-5xl text-center p-10'>Nuestro reto es la excelencia</h1>
              </div>
          </div>
          <div className='text-center text-black text-xl py-14'>
            <p className='lg:mx-80 mx-10'>Somos una Institución Educativa de carácter oficial mixto ubicada en el
              barrio el jardín en pleno centro de Acacias Meta, en nuestra institución
              ofrecemos los niveles de Educación Preescolar, Educación Básica
              Secundaria, Educación Media, se fundamenta en el aspecto humano, la
              formación de la persona (Ser), la integración de forma productiva con la
              sociedad y el respeto por los valores, base fundamental de la institución
              educativa, con el propósito de generar logros en la apropiación de la
              ciencia, la técnica y el avance tecnológico. <br/><br/>
              El estudiante es un compendio de dimensiones atendidas desde la
              educación de forma integral, por este motivo nuestro currículo esta
              diversificado de forma para que el estudiante obtenga aprendizajes
              desde la educación física y deportiva, sociocultural, espiritual, afectiva,
              psicológica e intelectual.
            </p>
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
