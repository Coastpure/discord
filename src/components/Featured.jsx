import React from 'react'
import picture2 from '../photos/lmfao.jpg'
import picture1 from '../photos/background2.jpg'
import Card from './Card'

const Featured = () => {
      const cards = [
      {
        bg: picture1,
        profile: picture2, 
        title: "Fire Emblem Heroes", 
        description: "We are a community for Fire Emblem Heroes. Enjoy lore, get help and FE fandom", 
        size: <p> 85,532 Online &#8226; 234,986 Members</p>},

      {
        bg: picture1,
        profile: picture2, 
        title: "Fire Emblem Heroes", 
        description: "We are a community for Fire Emblem Heroes. Enjoy lore, get help and FE fandom", 
        size: <p> 85,532 Online &#8226; 234,986 Members</p>},

      {
        bg: picture1,
        profile: picture2, 
        title: "Fire Emblem Heroes", 
        description: "We are a community for Fire Emblem Heroes. Enjoy lore, get help and FE fandom", 
        size: <p> 85,532 Online &#8226; 234,986 Members</p>},
      {
        bg: picture1,
        profile: picture2, 
        title: "Fire Emblem Heroes", 
        description: "We are a community for Fire Emblem Heroes. Enjoy lore, get help and FE fandom", 
        size: <p> 85,532 Online &#8226; 234,986 Members</p>},

      ]
  return (
    <div className='pt-6'>
      {/* Titles */}
      <div className="text-white pb-4">
        <p className='font-bold text-[20px]'>Featured Servers</p>
        <p className='text-white/50' >Some awesome Discords we think you'd love</p>
      </div>

      {/* Cards */}
    <div className="grid grid-cols-1 xs:grid-cols-2 lmd:grid-cols-3 xl:grid-cols-4 gap-y-6 xs:gap-x-2 sm:gap-x-4 mb-4 ">
      {cards.map((card) => <Card 
       bg={card.bg} profile={card.profile}  title={card.title} description={card.description} size={card.size} />)}
    </div>

    </div>
  )
}

export default Featured