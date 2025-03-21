"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { eventCard } from '@/Constant';
import Image from 'next/image';
const page = () => {
    const params = useParams();
    const id = params?.id;

    const eventId = Array.isArray(id)? id[0] : id;

    if(!eventId || isNaN(parseInt(eventId,10))){
        return <p>Invalid event id</p>
    }
    const event = eventCard.find((item)=> item.id === parseInt(eventId,10));

    if (!event) {
        return <p className="text-red-500">Event not found</p>;
      }

  return (
    <div className='flex flex-col items-center w-full mx-10 my-20'>
      <div className='flex flex-col max-w-4xl bg-neutral-900 rounded-xl w-full border border-lime-900'>
        <Image 
        src={event.image}
        alt='image_image'
        width={100}
        height={100}
        className='w-full rounded-xl'
        unoptimized
        />
            <div className='mx-10 my-10'>
                <h2 className='font-orbitron text-4xl font-bold text-lime-400'>{event.title}</h2>
                <div className='flex flex-row max-w-lg justify-between text-lg border-b border-lime-700 mb-10'>
                    <li className=''>
                        <p>{event.date}</p>
                    </li>
                    <li>
                        <p>{event.time}</p>
                    </li>
                    <li>
                        <p>{event.location}</p>
                    </li>
                </div>

                <p className='text-lg bg-neutral-800 rounded-lg p-4 text-justify'>{event.description}</p>

                <div>
                    <p>Prizes</p>
                    <p>Winner:<span>{event.price1st}</span></p>
                    <p>1st Runner Up:<span>{event.price2nd}</span></p>
                    <p>2nd Runner Up:<span>{event.price3rd}</span></p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default page
