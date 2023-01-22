import React from 'react'
import hero from '../photos/hero.jpg'
import { FiSearch} from 'react-icons/fi';

const Hero = () => {
  return (
    <div className='relative h-[17rem] mx-8 mt-6 rounded-[0.3rem]'>
        {/* background image */}
        <div className=" absolute flex  w-full">
            < img src={hero} className="object-cover w-full rounded-[0.3rem] h-[17rem]"/>
        </div>
        {/* search */}
        <div className="relative z-10  flex flex-col items-center justify-end h-full font-bold text-white pb-0">
            <p className='text-[22px] font-black'>Find your community on Discord</p>
            <p className='pb-2 text-[15px]'>From gaming to music to study; there's a place for you</p>

            <div className="relative flex items-center  mb-4 ">
                <input type="search" placeholder='Explore Servers..' className='rounded-[0.3rem] pl-3 placeholder:text-[14px] placeholder:text-gray-500 outline-0 w-full max-w-[70vw] py-1.5' />
                < FiSearch className='absolute text-black right-2'/>
            </div>
        </div>
    </div>
  )
}

export default Hero