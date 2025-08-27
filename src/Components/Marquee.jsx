import React from 'react'

function Marquee({ ImageUrl }) {
    return (
        <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
            {
                ImageUrl.map((item, index) => {
                    return <img src={item} alt="" key={index} className='w-[6vw] flex-shrink-0' />
                })
            }
            {
                ImageUrl.map((item, index) => {
                    return <img src={item} alt="" key={index} className='w-[6vw] flex-shrink-0'/>
                })
            }
        </div>
    )
}

export default Marquee
