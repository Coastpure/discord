// this displays the objects in Discover.jsx
import React from 'react'

const Topic = ({title, icon}) => {
  return (
    <div className='flex text-white/50 items-center text-[15px] '>
      <button className='flex items-center hover:bg-[#5865f2] hover:text-white focus:bg-[#5865f2] focus:text-white duration-100 ease-out  w-full py-1.5 rounded-[0.4rem] font-semibold'>
        <div className="pl-4 text-[20px]">{icon}</div>
        <p className='ml-2'>{title}</p>
      </button>
    </div>
  )
}

export default Topic