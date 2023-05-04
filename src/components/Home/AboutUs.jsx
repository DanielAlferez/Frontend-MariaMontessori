import React from 'react'
import mision from '../../assets/mision_img.webp'
import vision from '../../assets/vision_img.webp'

function AboutUs() {
  return (
    <div>
        <div className='flex flex-col items-center my-20'>
            <h1 className='font-bold text-3xl lg:mx-80 mx-14 text-center mb-20'>Trabajamos furtemente para asistir, proteger y empoderar a comunidades vulnerables</h1>
            <div className='grid lg:grid-cols-2 gap-y-10 justify-center mx-10'>
                {/* mision */}
                <div className='lg:pl-48 lg:pr-16 flex flex-col items-center'>
                    <img className='rounded-full' src={mision} alt="" />
                    <h1 className='text-center font-bold text-xl my-5'>Misión</h1>
                    <p>Somos la Institución Educativa María Montessori, de Acacias Meta, fundada en el año 1971, de carácter público, la cual ofrece un
                        servicio educativo incluyente en los ciclos de educación preescolar, básica, media académica y técnica con modalidades turística y
                        ambiental; trabajamos pedagógicamente el “Aprender a Aprehender Haciendo”, comprometidos en la formación integral de estudiantes
                        autónomos y competentes, líderes transformadores de su entorno.
                    </p>
                </div>
                {/* vision */}
                <div className='lg:pl-16 lg:pr-48 flex flex-col items-center'>
                    <img className='rounded-full' src={vision} alt="" />
                    <h1 className='text-center font-bold text-xl my-5'>Visión</h1>
                    <p>Al año 2028 seremos una Institución incluyente, reconocida por la excelencia y calidad educativa, formadora de ciudadanos críticos,
                        resilientes y gestores de paz comprometidos con la justicia social; con identidad cultural; principios turísticos, ambientales sostenibles y
                        tecnológicos; líderes del desarrollo local y regional.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs