import React from 'react'
import { AiFillCompass} from 'react-icons/ai';
import { GiGamepad} from 'react-icons/gi';
import { HiMusicNote} from 'react-icons/hi';
import { FaGraduationCap} from 'react-icons/fa';
import { VscSettingsGear} from 'react-icons/vsc';
import { SlScreenDesktop} from 'react-icons/sl';
import { BsFillEmojiSmileFill, BsHeadphones} from 'react-icons/bs';
import Topic from './Topic';


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
    <div className='hidden xl:flex flex-col bg-[#303136] w-[18rem] shrink-0 p-4 h-screen sticky top-0 '>

      {/* Title */}
      <p className=' font-bold text-[24px] text-white'>Discover</p>
      {/* Topics */}
      <div className="mt-4 space-y-4">
        {topics.map((topic) => (
          <Topic title = {topic.title} icon = {topic.icon}/>
        ))}
      </div>
      {/* ProfileSettings */}
      <div className="bg-[#292b2f]">

      </div>
    </div>
  )
}

export default Discover