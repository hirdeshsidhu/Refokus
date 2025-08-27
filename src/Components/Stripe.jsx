import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] px-10 py-3 border-zinc-700 border-t-[1.2px] border-r-[1.2px] border-b-[1.2px] flex items-center justify-between'>
      <img src={val.url} alt="" />
      <span>{val.number}</span>
    </div>
  )
}

export default Stripe
