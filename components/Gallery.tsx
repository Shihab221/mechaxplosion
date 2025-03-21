"use client"
import React from 'react'
import ReactPlayer from 'react-player'
import { GalleryPic } from '@/Constant'
import Image from 'next/image'


const Gallery = () => {
  return (
    <div className='w-full'>
      <h2 className='text-2xl text-lime-400 font-bold font-orbitron mb-10'>GALLERY . . .</h2>
      <div className='flex flex-row grid grid-cols-2 sm:grid-cols-4'>
            {GalleryPic.map((item,index)=>(
                <Image 
                key={index}
                alt='Gallery_picture'
                src={item.image}
                width={100}
                height={100}
                className='w-[340px] h-[260px] mt-10 rounded-md'
                unoptimized
                />
            ))}
      </div>

      <div className='flex flex-row justify-center mt-10'>
        <ReactPlayer url="/kuetVid.mp4" controls width="1000px" height="600px"/>
      </div>
    </div>
  )
}

export default Gallery
