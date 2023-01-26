import React from 'react'
import hero from '../photos/hero2.jpg'
import { FiSearch} from 'react-icons/fi';

const Hero = () => {
  return (
    <div className='relative h-[13rem] sm:h-[16rem]  rounded-[0.3rem] z-20'>

        {/* background image */}
        <div className=" absolute flex  w-full">
            < img src={hero} className="object-cover w-full rounded-[0.3rem] h-[13rem] "/>
        </div>

        {/* Overlay */}
        <div className=" absolute flex  w-full h-full bg-black/20 z-10"></div>

        {/* search */}
        <div className="relative z-20  flex flex-col items-center justify-center h-full font-bold text-white pb-0 space-y-2">
            <p className='text-[19px] font-black'>Find your community on Discord</p>
            <p className='pb-2 text-[13.5px] text-white/70 max-w-[18rem] xs:max-w-sm'>From gaming to music to study; there's a place for you</p>

            <div className="relative flex items-center  mb-4 ">
                <input type="search" placeholder='Explore Servers..' className='rounded-[0.3rem] pl-3 placeholder:text-[14px] placeholder:text-gray-500 outline-0  py-2 w-[18rem] xs:w-[25rem] ' />
                < FiSearch className='absolute text-black right-2'/>
            </div>
        </div>
    </div>
  )
}

export default Hero