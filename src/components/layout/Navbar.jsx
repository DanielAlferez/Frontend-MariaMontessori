import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='mb-10 flex items-center gap-x-40 mt-10'>
      <img src="https://acacias.edu.co/images/MariaMontesori/escudomariamontesori.png" className='w-32 h-32  ml-20' />
      <ul className='text-xl font-bold flex flex-wrap gap-x-10'>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><a href="#">Inicio de Sesión</a></li>
        <li><a href="#">Inicio</a></li>
      </ul>
    </div>
  )
}

export default Navbar