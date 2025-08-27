import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button';

function Navbar() {
  
  return (
    <div className="max-w-screen-xl py-6 flex items-center mx-auto font-regular justify-between border-b-[1px] border-zinc-700">
      <div className='flex items-center'>
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="logo"
        />
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((items, index) => {
            return items.length === 0 ? (

              <span key={index} className="h-7 w-[2px] bg-zinc-800"></span>
            ) : (

              <a key={index} className="text-sm flex items-center gap-1" href="#">
                {index === 1 && (
                  <span className="h-1 w-1 rounded-full bg-green-500 inline-block shadow-[0_0_8px_2px_rgba(34,197,94,0.8)]"></span>
                )}
                {items}
              </a>
            );
          })}
        </div>
      </div>
      <Button />
    </div>
  )
}

export default Navbar
