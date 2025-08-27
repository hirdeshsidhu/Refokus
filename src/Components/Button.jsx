import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
function Button({title = "Get Started"}) {
  return (
    <div className='w-40 px-4 py-2 bg-white text-black text-sm flex items-center justify-between rounded-full cursor-pointer'>
      {title}
      <IoIosReturnRight />
    </div>
  )
}

export default Button
