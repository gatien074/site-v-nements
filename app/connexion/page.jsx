import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex  justify-center items-center h-full '>
 <form action="" className='m-auto justify-center-items w-full  p-48  h-[100vh] bg-blue-400 items-center justify-center '>
    <h1 className='text-white text-4xl flex justify-center'>Connexion</h1>
     <p>Nom</p>
    <input type="text" placeholder='' className='w-full p-2 mb-5 border-1 border-stone-400'/>

    <p>Adresse email</p>
    <input type="email" placeholder=''  className='w-full p-2 '/>
    
    <Link href=""><button className='lg:w-24 h-10 w-full text-center bg-slate-950 mt-8 text-white' id='' type="submit">Connexion</button></Link>

 </form>
     <div className='bg-cover bg-center w-full max-h-full  h-[100vh]' style={{backgroundImage: `url(/form.jpg)`}}>
        <div className=' text-4xl flex text-white justify-center items-center mt-80 font-bold'>
       <h1>Voir vos évènements  </h1>
       </div>
     </div>
    </div>
  )
}

export default page