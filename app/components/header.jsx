"use client"

import React from 'react'
import Nav from './nav'



const Header = () => {
  return (
    <>
       <div className='lg:bg-black bg-transparent/5 w-full h-20 flex justify-center items-center p-5 sticky top-0 '>
        <Nav/>
       </div>
    </>
  )
}

export default Header