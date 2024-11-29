"use client"

import React from 'react'
import Nav from './nav'



const Header = () => {
  return (
    <>
       <div className='bg-black/35 w-full h-40 flex justify-center items-center p-5 '>
        <Nav/>
       </div>
    </>
  )
}

export default Header