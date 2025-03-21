import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-t-1 border-lime-600 text-slate-300 flex flex-col px-10 py-6">
      <div className="flex flex-col sm:flex-row sm:space-x-8 pt-4">
        <div className='max-w-md'>
            <h2 className="text-lg font-bold mb-2 text-lime-400 font-orbitron mb-4">About Event</h2>
            <p className="mb-4 ">
            MechaXplosion 1.0 is the premier robotics and automation event at KUET, bringing together innovative minds and cutting-edge technology.
            </p>
        </div>
        <div className="pb-10">
          <h2 className="font-bold text-lg text-lime-400 font-orbitron mb-4">Contact Info</h2>
          <p>Department of Mechanical Engineering</p>
          <p>Khulna University of Engineering & Technology (CUET)</p>
          <p>Email: headme@kuet.ac.bd, mechaXplosion2025@gmail.com</p>
          <p>Contact: +8801770-716570</p>
        </div>
        
      </div>
      <div className="text-sm text-center pt-4 w-full border-t border-lime-800">
          © 2025 MechaXplosion. Made by Shihab Ahemed
        </div>
    </footer>
  );
};

export default Footer;