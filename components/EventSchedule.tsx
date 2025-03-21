import { eventSchedule } from '@/Constant'
import React from 'react'

const EventSchedule = () => {
  return (
    <div className='my-10 flex flex-col w-full items-center'>
      <h2 className='text-2xl mb-10 font-orbitron font-bold text-lime-400'>EVENT SCHEDULE . . .</h2>
      <div className='flex flex-col sm:flex-row sm:justify-evenly w-full items-stretch'>
        <div className='bg-neutral-900 rounded-xl p-4 h-xl w-sm mb-6'>
            <h4 className='font-semibold text-xl text-lime-400 mb-4 font-orbitron'>12th June - THURSDAY</h4>
            {eventSchedule.thursday.map((item,index)=>(
                <div key={index} className='mb-4'>
                    <p className='text-lime-400 font-semibold'>{item.time}</p>
                    <p>{item.event}</p>
                </div>
            ))}
        </div>

        <div className='bg-neutral-900 rounded-xl p-4 h-xl w-sm mb-6'>
            <h4 className='font-semibold text-xl text-lime-400 mb-4 font-orbitron'>12th June - THURSDAY</h4>
            {eventSchedule.friday.map((item,index)=>(
                <div key={index} className='mb-4'>
                    <p className='text-lime-400 font-semibold'>{item.time}</p>
                    <p>{item.event}</p>
                </div>
            ))}
        </div>

        <div className='bg-neutral-900 rounded-xl p-4 h-xl w-sm mb-6'>
            <h4 className='font-semibold text-xl text-lime-400 mb-4 font-orbitron'>12th June - THURSDAY</h4>
            {eventSchedule.saturday.map((item,index)=>(
                <div key={index} className='mb-4'>
                    <p className='text-lime-400 font-semibold'>{item.time}</p>
                    <p>{item.event}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default EventSchedule
