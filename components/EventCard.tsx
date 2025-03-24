"use client"
import React from 'react'
import {eventCard} from "../Constant"
import Link from 'next/link'
import Image from 'next/image'
import logo from "../public/images/logomie.png"
import { motion } from "framer-motion";

const EventCard = () => {
  return (
    <div className='py-6'>
        <h2 className='text-lime-400 font-orbitron text-2xl font-bold mb-4'>ALL SEGMENTS . . .</h2>
        <div className='flex flex-col sm:flex-row w-full grid grid-cols-2 sm:grid-cols-4'>
            {eventCard.map((item,index)=>(
                <Link href={`/eventDetails/${item.id}`} key={index}>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }} // Start hidden and move up
                        whileInView={{ opacity: 1, x: 0 }} // Animate when it comes into view
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }} // Trigger only once
                        className=""
                        >
                    <div className='flex flex-col bg-neutral-900 mx-4 my-4 rounded-lg border-0.5 border-lime-400 hover:border-1 transition-all duration-300 ease-in '>
                        <Image
                            src={item.image}
                            alt='logo'
                            width={100}
                            height={100}
                            className='w-128  overflow-hidden rounded-xl'
                            unoptimized
                        />
                        <div className='px-4 py-4 flex flex-col items-center'>
                            <p className=' py-4 text-2xl font-bold text-lime-300 font-orbitron mt-4 text-start'>{item.title}</p>
                            <p className=' py-4'>{item.intro}</p>
                            <button className='bg-lime-400 rounded-md text-black text-md font-orbitron py-4 my-2 px-6 mx-10 hover:bg-neutral-900 hover:text-lime-400 hover:border-1 transition-all duration-300 cursor-pointer'>
                                Learn More
                            </button>
                        </div>
                    </div>
                    </motion.div>
                </Link>
                
            ))}
        </div>

    </div>
  )
}

export default EventCard
