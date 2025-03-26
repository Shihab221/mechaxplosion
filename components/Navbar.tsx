import Image from 'next/image'
import React from 'react'
import logo from "../public/images/logomie.png"
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className=' flex flex-row justify-between py-4 bg-neutral-900 px-10'>
      <Image 
      src={logo}
      alt='logo'
      width={100}
      height={100}
      className='w-32'
      unoptimized
      />
      <div className='flex flex-row justify-between text-white font-orbitron list-none w-full px-10 ml-10 items-center max-w-5xl'>
        <li className='hover:text-lime-400 text-xl cursor-pointer transition-all duration-300 hover:font-semibold'>About</li>
        <li className='hover:text-lime-400 text-xl cursor-pointer transition-all duration-300 hover:font-semibold'>Events</li>
        <Link href="/#schedule" className='hover:text-lime-400 text-xl cursor-pointer transition-all duration-300 hover:font-semibold'>Schedule</Link>
        <li className='hover:text-lime-400 text-xl cursor-pointer transition-all duration-300 hover:font-semibold'>Gallery</li>
        <li className='hover:text-lime-400 text-xl cursor-pointer transition-all duration-300 hover:font-semibold'>Sponsers</li>
        <li className='hover:text-lime-400 text-xl cursor-pointer transition-all duration-300 hover:font-semibold'>Organizer</li>
        <li className='hover:text-lime-400 text-xl cursor-pointer transition-all duration-300 hover:font-semibold'>About</li>
        <li className='hover:text-lime-400 text-xl cursor-pointer transition-all duration-300 hover:font-semibold'>Contact</li>
      </div>
    </div>
  )
}

export default Navbar
