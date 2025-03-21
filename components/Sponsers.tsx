import { GoldenSponsers, TitleSponsers } from '@/Constant'
import Image from 'next/image'
import React from 'react'

const Sponsers = () => {
  return (
    <div className='w-full py-10 my-10'>
      <h2 className='text-2xl text-lime-400 font-orbitron mb-10 font-bold'>OUR PROUD SPONSERS . . .</h2>
      <h4 className='text-center text-xl font-semibold mb-4 font-orbitron text-white'>Title Sponsers</h4>
      <div className='flex flex-row justify-evenly my-4'>
        {TitleSponsers.map((item,index)=>(
            <div key={index} className='flex flex-col items-center mt-4'>
                <Image 
                src={item.image}
                alt="title_sponser_image"
                width={100}
                height={100}
                className='mb-4 w-[120px] h-[100px] drop-shadow-[0_0_2px_gray]'
                />
                <p>{item.title}</p>
            </div>
        ))}
      </div>
      <h4 className='text-center text-xl font-semibold mb-4 font-orbitron text-white mt-20'>Golden Sponsers</h4>
      <div className='flex flex-row justify-evenly mt-4'>
        {GoldenSponsers.map((item,index)=>(
            <div key={index} className='flex flex-col items-center mt-4'>
                <Image 
                src={item.image}
                alt="title_sponser_image"
                width={100}
                height={100}
                className='mb-4 w-[100px] h-[84px] drop-shadow-[0_0_2px_gray]'
                />
                <p>{item.title}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Sponsers
