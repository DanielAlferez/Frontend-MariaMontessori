import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import logo from '../../assets/logo.webp'

function Navbar() {

  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      navbar.classList.add('fixed');
      navbar.classList.add('bg-white/95');
      navbar.classList.remove('absolute');
      navbar.classList.remove('bg-white/10');
    } else {
      navbar.classList.remove('fixed');
      navbar.classList.add('absolute');
      navbar.classList.remove('bg-white/95');
      navbar.classList.add('bg-white/10');
    }
  });
  
  return (
    <div className='absolute navbar w-full z-50 top-0 bg-white/10'>
      <div className='drop-shadow-sm py-2 grid grid-cols-2 items-center px-10 lg:px-32 '>
        <img src={logo} className='w-20 h-20 lg:w-28 lg:h-28' />
        <div className='justify-end  '>
          <ul className='text-2xl font-bold flex justify-end gap-x-5 lg:gap-x-10'>
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