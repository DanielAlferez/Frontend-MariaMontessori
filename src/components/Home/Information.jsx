import React from 'react'

function Information() {
  return (
    <div className='flex flex-col items-center'>
        <h1 className=' my-20 uppercase text-principal font-bold text-4xl text-center max-w-lg'>Estos son nuestros niveles y grados</h1>
        <div className='flex flex-wrap uppercase justify-center gap-14 z-10'>   
            <div 
            style={{backgroundImage: 'url("https://scontent.fvvc1-1.fna.fbcdn.net/v/t39.30808-6/297896028_2619574144843981_3493594073497542593_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2ozio7gjeGsAX-5kSpc&_nc_ht=scontent.fvvc1-1.fna&oh=00_AfCwVgz_QG1nG-JIo9iPLXgNpYbKtO2RduJ7waa0VFIZlQ&oe=6404642A")',
                backgroundRepeat: false,
                backgroundSize: 'cover',
            }}
            className='w-64 h-72 relative'
            >
                <div className='bg-yellow-600 h-full w-full opacity-40'/>
                <p className='top-2/3 left-1/2 -translate-x-1/2  absolute text-3xl font-semibold text-white'>Preescolar</p>

            </div>
            <div 
            style={{backgroundImage: 'url("https://scontent.fvvc1-1.fna.fbcdn.net/v/t39.30808-6/297896028_2619574144843981_3493594073497542593_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2ozio7gjeGsAX-5kSpc&_nc_ht=scontent.fvvc1-1.fna&oh=00_AfCwVgz_QG1nG-JIo9iPLXgNpYbKtO2RduJ7waa0VFIZlQ&oe=6404642A")',
                backgroundRepeat: false,
                backgroundSize: 'cover',
            }}
            className='w-64 h-72 relative'
            >
                <div className='bg-yellow-600 h-full w-full opacity-40'/>
                <p className='top-2/3 left-1/2 -translate-x-1/2  absolute text-3xl font-semibold text-white'>Primaria</p>
            </div>
            <div 
            style={{backgroundImage: 'url("https://scontent.fvvc1-1.fna.fbcdn.net/v/t39.30808-6/297896028_2619574144843981_3493594073497542593_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2ozio7gjeGsAX-5kSpc&_nc_ht=scontent.fvvc1-1.fna&oh=00_AfCwVgz_QG1nG-JIo9iPLXgNpYbKtO2RduJ7waa0VFIZlQ&oe=6404642A")',
                backgroundRepeat: false,
                backgroundSize: 'cover',
            }}
            className='w-64 h-72 relative'
            >
                <div className='bg-yellow-600 h-full w-full opacity-40'/>
                <p className='top-2/3 left-1/2 -translate-x-1/2  absolute text-3xl font-semibold text-white'>Secundaria</p>
            </div>
            <div 
            style={{backgroundImage: 'url("https://scontent.fvvc1-1.fna.fbcdn.net/v/t39.30808-6/297896028_2619574144843981_3493594073497542593_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2ozio7gjeGsAX-5kSpc&_nc_ht=scontent.fvvc1-1.fna&oh=00_AfCwVgz_QG1nG-JIo9iPLXgNpYbKtO2RduJ7waa0VFIZlQ&oe=6404642A")',
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fuga tempore id dolore est reprehenderit iste hic voluptatum? Quaerat, qui.</p>
                </div>
                <div>
                    <h2 className='font-semibold text-lg'>Conservacion de Recursos Naturales</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fuga tempore id dolore est reprehenderit iste hic voluptatum? Quaerat, qui.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Information