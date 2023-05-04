import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import logo from '../../assets/logo.webp'

function Navbar() {

  return (
    <div className='sticky z-50 top-0 bg-white'>
      <div className='drop-shadow-sm py-3 grid grid-cols-2 items-center px-10 lg:px-20 border-y border-gray-200'>
        <img src={logo} className='w-20 h-20 lg:w-24 lg:h-24' />
        <div className='justify-end  '>
          <ul className='text-xl font-bold flex justify-end gap-x-5 lg:gap-x-10'>
            <li className='hover:text-principal'><Link to="/">Inicio</Link></li>
            <li className='hover:text-principal'><Link to="/posts">Posts</Link></li>
            <li className='group relative hover:text-principal'>
              {/* <button>
                Ingresa
              </button>
              <div className='right-0 absolute group-hover:visible invisible rounded-lg border p-5 bg-white'>
                <a href="https://backendmariamontessori-production.up.railway.app/admin">Admin</a>
              </div> */}
              <a href="https://backendmariamontessori-production.up.railway.app/admin">Admin</a>
            </li>
          </ul>
        </div>
        {/* <div className='block lg:hidden'>
          <div className='text-xl font-bold flex justify-end gap-x-10'>
            <AiOutlineMenu className='w-7 h-7'/>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Navbar