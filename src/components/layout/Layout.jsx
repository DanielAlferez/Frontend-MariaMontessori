import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div >
          <Navbar/>
            {props.children}
          <Footer/>
        </div>
    </div>
  )
}

export default Layout