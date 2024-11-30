"use client"

import React from 'react'
import Image from 'next/image'
import Button from './button'

const Hero = () => {
  return (
    <>
      <div className='flex flex-col  bg-gradient-to-t from-black via-black to-black" justify-center items-center py-40' >
          <div className=' lg:flex  flex lg:flex-col flex-col justify-center items-center gap-10  '>
            <h1 className='lg:flex lg:justify-center   m-auto lg:items-center ml-9 text-5xl font-extrabold text-white'>Gérer vos évènements en ligne</h1>
            <p className='text-white w-96 flex justify-center   text-center'>La plateforme de gestion événementielle tout-en-un garantit une expérience fluide, permet d'économiser du temps et d'accroitre vos événements.`</p>
          </div>
          <Button/>
      </div>
    </>
  )
}

export default Hero