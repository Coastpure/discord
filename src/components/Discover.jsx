import React from 'react'
import { AiFillCompass} from 'react-icons/ai';
import { GiGamepad} from 'react-icons/gi';
import { HiMusicNote} from 'react-icons/hi';
import { FaGraduationCap, FaMicrophoneSlash} from 'react-icons/fa';
import { VscSettingsGear} from 'react-icons/vsc';
import { SlScreenDesktop} from 'react-icons/sl';
import { BsFillEmojiSmileFill, BsHeadphones} from 'react-icons/bs';
import Topic from './Topic';
import lmfao from '../photos/lmfao.jpg'


const Discover = () => {

  const topics = [
    {title:"Home", icon:<AiFillCompass/>},
    {title:"Gaming", icon:<GiGamepad/>},
    {title:"Music", icon:<HiMusicNote/>},
    {title:"Education", icon:<FaGraduationCap/>},
    {title:"Engineering", icon:<VscSettingsGear/>},
    {title:"Entertainment", icon:<BsHeadphones/>},
    {title:"Anime & Manga", icon:<BsFillEmojiSmileFill/>},
    {title:"Movies & TV", icon:<SlScreenDesktop/>},
  ]

  return (
    <div className='hidden xl:flex flex-col justify-between bg-[#303136] w-[13rem] shrink-0  h-screen sticky top-0 '>
      {/* Title + Topics */}
      <div className="p-4">
          {/* Title */}
          <p className=' font-bold text-[24px] text-white'>Discover</p>
          {/* Topics */}
          <div className="mt-4 space-y-4">
          {topics.map((topic) => (
              <Topic title = {topic.title} icon = {topic.icon}/>
            ))}
          </div>
      </div>
      {/* ProfileSettings */}
        <div className="bg-[#292b2f] h-[3rem] flex items-center text-white px-2 justify-between">
          <div className="flex items-center">
            <img src={lmfao} alt="" className='w-10 h-10 rounded-full'/>
            <div className="pl-2">
              <p className='text-[12px] font-semibold'>coastpure</p>
              <p className='text-[10px] text-gray-400'>#1234</p>
            </div>
            </div>
            <div className="flex space-x-3 text-[15px] text-white/80">
              <FaMicrophoneSlash />
              <BsHeadphones />
              < VscSettingsGear />
            </div>
        </div>
    </div>
  )
}

export default Discover