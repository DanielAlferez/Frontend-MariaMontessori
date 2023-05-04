import React from 'react'
import INFO1 from "../../assets/information_img1.webp";
import INFO2 from "../../assets/information_img2.webp";
import INFO3 from "../../assets/information_img3.webp";
import INFO4 from "../../assets/information_img4.webp";

function Information() {
  return (
    <div className='flex flex-col items-center'>
        <h1 className=' my-20 uppercase text-principal font-bold text-4xl text-center max-w-lg'>Estos son nuestros niveles y grados</h1>
        <div className='flex flex-wrap uppercase justify-center gap-14 z-10'>   
            
            <div 
            style={{backgroundImage: `url(${INFO1})`,
                backgroundRepeat: false,
                backgroundSize: 'cover',
            }}
            className='w-64 h-72 relative'
            >
                <div className='bg-yellow-600 h-full w-full opacity-40'/>
                <p className='top-2/3 left-1/2 -translate-x-1/2  absolute text-3xl font-semibold text-white'>Preescolar</p>

            </div>


            <div 
            style={{backgroundImage: `url(${INFO2})`,
                backgroundRepeat: false,
                backgroundSize: 'cover',
            }}
            className='w-64 h-72 relative'
            >
                <div className='bg-yellow-600 h-full w-full opacity-40'/>
                <p className='top-2/3 left-1/2 -translate-x-1/2  absolute text-3xl font-semibold text-white'>Primaria</p>
            </div>


            <div 
            style={{backgroundImage: `url(${INFO3})`,
                backgroundRepeat: false,
                backgroundSize: 'cover',
            }}
            className='w-64 h-72 relative'
            >
                <div className='bg-yellow-600 h-full w-full opacity-40'/>
                <p className='top-2/3 left-1/2 -translate-x-1/2  absolute text-3xl font-semibold text-white'>Secundaria</p>
            </div>


            <div 
            style={{backgroundImage: `url(${INFO4})`,
                backgroundRepeat: false,
                backgroundSize: 'cover',
            }}
            className='w-64 h-72 relative'
            >
                <div className='bg-yellow-600 h-full w-full opacity-40'/>
                <p className='top-2/3 left-1/2 -translate-x-1/2  absolute text-3xl font-semibold text-center text-white'>Educacion media</p>
            </div>


        </div>
        <div className='items-center flex-col bg-green-100 p-20 -mt-20 z-0 w-full text-center flex '>
            <h1 className='md:w-80 text-principal font-bold text-2xl mt-20' >Modalidades academicas para la educacion media</h1>
            <div className='grid md:grid-cols-2 gap-10 mt-20'>
                <div>
                    <h2 className='font-semibold text-lg'>Técnico en Animación Turistica</h2>
                    <p>Aprovechando que Acacias es la capital turística de los llanos orientales,
                        dotamos al estudiante de herramientas para emprender o estar capacitado para suplir la
                        demanda laboral del sector
                    </p>
                </div>
                <div>
                    <h2 className='font-semibold text-lg'>Conservacion de Recursos Naturales</h2>
                    <p>Preparando a los estudiantes a tener una visión del cuidado ambiental desde
                        las actividades empresariales.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Information