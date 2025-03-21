import React from 'react'
import Image from 'next/image'
import logo from "../public/images/logomie.png"
const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Image 
      src={logo}
      alt='logo'
      width={100}
      height={100}
      className='w-256'
      unoptimized
      />
      <div className='mt-10'>
        <button className='bg-lime-400 rounded-full text-black font-orbitron px-8 py-4 text-xl hover:bg-white transition-all duration-300 cursor-pointer mx-4'>EXPLORE ALL</button>
        <button className='bg-neutral-900 rounded-full text-lime-400 font-orbitron px-8 py-4 text-xl hover:bg-lime-400 hover:text-black border-2 border-lime-400 transition-all duration-300 cursor-pointer mx-4'>LEARN MORE</button>
      </div>
    </div>
  )
}

export default Hero
