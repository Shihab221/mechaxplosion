import Image from 'next/image'
import React from 'react'
import logo from "../public/images/logomie.png"
const Navbar = () => {
  return (
    <div className=' flex flex-row justify-between py-4 bg-teal-950 px-10'>
      <Image 
      src={logo}
      alt='logo'
      width={100}
      height={100}
      className=''
      />
      <p>Options</p>
    </div>
  )
}

export default Navbar
