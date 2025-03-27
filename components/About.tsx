import React from 'react'
import about from "@/public/images/about.png"
import Image from 'next/image'
const About = () => {
  return (
    <div className='flex flex-col sm:flex-row py-10 grid grid-cols-2'>
      <div className='flex flex-col w-full justify-evenly'>
        <h4 className='text-2xl font-bold font-orbitron text-lime-400 mb-6'>About KUET MechaXplosion 4.0</h4>
        <p className='text-justify text-lg'>The ME Department at KUET, established in 2003, addresses the growing demand for automation and industrial innovation in Bangladesh. Integrating mechanical, electronics, and control systems, it prepares 30 students annually for careers in precision engineering, automation, and industrial research. With a strong curriculum and advanced labs, ME aims to be a hub for innovation and industry-driven research, producing globally competitive engineers.
        <br/><br/>
        MechaXplosion is a first-of-its-kind robotics and automation festival hosted by KUET ME. It is designed to bring together the brightest minds, challenging them in robotics competitions. The event aims to bridge academia and industry, inspiring the next generation of engineers to take on global technological challenges.
        <br/><br/>
        With a grand prize pool of 480,000 BDT, this competition is set to be a groundbreaking event in Bangladesh's robotics and automation landscape.</p>

        <div className='flex flex-row justify-evenly mt-10'>
          <div className='flex flex-col items-center'>
            <p className='text-5xl font-semibold text-lime-400 font-orbitron'>1,000+</p>
            <p>Participants</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-5xl font-semibold text-lime-400 font-orbitron'>10+</p>
            <p>Events</p>
          </div>
        </div>
      </div>


      <div className='pl-10'>
        <Image 
        alt="about_image"
        src={about}
        width={100}
        height={100}
        className='w-full rounded-xl'
        unoptimized
        />
      </div>
    </div>
  )
}

export default About
