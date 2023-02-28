import React from 'react'
import img1 from '../photos/img1.png'
import img2 from '../photos/img2.png'
import img3 from '../photos/img3.png'
import img4 from '../photos/img4.png'
import dc from '../photos/dc.png'
import { FiPlus} from 'react-icons/fi';
import { AiFillCompass} from 'react-icons/ai';

const Groups = () => {
  const groups = [img1, img2, img3, img4, img1, img2]
  return (
    <div className='hidden sm:flex bg-[#212226] w-[4rem] shrink-0 h-screen sticky top-0 pt-6'>
        
        
        {/* Groups */}
        <div className="flex flex-col items-center w-full space-y-4">
        {/* Discord Avi*/}
        <div className='bg-[#36393f] p-0.5 rounded-[1.3rem] hover:rounded-full duration-100 ease-in-out cursor-pointer'> 
            <img src={dc} className="w-10 h-10 brightness-[80%]"/>
        </div>

        {/* Avatars */}
        <div className="space-y-2 pt-3">
          {groups.map((group) => ( 
        <div className='w-12 h-12 flex cursor-pointer' key={group}> 
            <img src={group} className="object-cover rounded-full hover:rounded-[1.3rem] duration-100 ease-in-out"/>
        </div>
         ))}
        </div>

         {/* plus */}
         <div className='bg-[#36393f] p-3 rounded-full hover:rounded-[1.3rem] duration-100 ease-in-out'> 
            <FiPlus className="w-6 h-6 text-green-700 cursor-pointer"/>
        </div>
        {/* compass */}
        <div className='bg-[#3ba55d] p-2 rounded-[1.3rem] hover:rounded-full duration-100 ease-in-out cursor-pointer'> 
            <AiFillCompass className="w-8 h-8 text-white"/>
        </div>
      </div>
    </div>
  )
}

export default Groups