import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Layout from '../../components/layout/Layout';
import { fetchPost } from './thunks';
import { BiMessageError } from "react-icons/bi";

function Post() {

    const { id } = useParams();

    const post = useSelector((state) => state.post.post)
    const error = useSelector((state) => state.post.error)

    const dispatch = useDispatch();
    React.useEffect(() => {
        window.scrollTo(0,0);
        dispatch(fetchPost(id));
    }, [dispatch])

    if (error) {
        return(
            <Layout>
                <div className=' text-gray-400 font-bold gap-10 p-40 text-center text-6xl flex flex-col items-center justify-center'>
                    <BiMessageError className='w-40 h-40'/>
                    <p>No se encontró el post que buscabas</p>
                </div>
            </Layout>
        )
      }

  return (
    <Layout>
        <div className='relative '>
            <div className='w-full h-96 lg:h-[30rem]'>
                <img loading='lazy' className='w-full h-full object-cover' src={post.imagen} alt="" />
            </div>
            <div className='bg-gray-900/80 bottom-0 w-full absolute rounded-t-xl'>
                <h1 className='text-white font-bold text-2xl lg:text-4xl text-center p-10'>{post.titulo}</h1>
            </div>
        </div>
        <div className='m-10 lg:my-10 lg:mx-72'>
            <h1 className='text-xl lg:text-2xl font-bold my-10'>{post.descripcion}</h1>
            <p>{post.body}</p>
            <img className='w-full object-cover h-96 my-5' src={post.imagen} alt="" />
            <div className='grid grid-cols-2 my-10 font-semibold text-lg text-gray-700'>
                <p>{post.categoria}</p>
                <div className='flex justify-end'>
                    <p className='font-bold mr-1'>Creado por:</p>
                    <p className='text-gray-500'>{post.usuarioCreador}</p>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Post