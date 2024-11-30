import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex  justify-center items-center p-16 bg-gradient-to-t from-black via-white to-black'>
     
      <form id="" action="" className=' lg:w-2/4 justify-center   lg:p-16 p-10 gap-10 border border-blue-400 rounded-2xl'>
      <h1 className='text-blue-600 font-semibold flex justify-center text-3xl mb-5'>Inscription</h1>
        <input id='' type="text" placeholder='' required='' className='lg:w-full border-2 h-8 p-7 rounded-lg'/>
        <p className='ml-1'>Votre nom</p>
        <input id='' type="email" placeholder=''required='' className='lg:w-full border-2 h-8 mt-5 p-7 rounded-lg'/> 
        <p className=' ml-1'>Votre adresse email</p>
        <input id='' type="password"  placeholder='' required='' className='lg:w-full border-2 h-8 mt-5 p-7 rounded-lg'/>
        <p  className=' ml-1'>Votre mot de passe</p>
       <Link href="/connexion"> <button className='lg:w-24 h-10 w-full text-center bg-slate-950 mt-8 text-white' id='' type="submit">Sinscrire</button></Link>

      </form>
    </div>
  )
}

export default page