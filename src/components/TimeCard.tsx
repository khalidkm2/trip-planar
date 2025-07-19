import { useUnsplashImage } from '@/lib/useUnsplashImage';
// import React from 'react'

const TimeCard = ({timeData}:any) => {
    const {title,description,duration,cost} = timeData
      const { image } = useUnsplashImage(title);
    
  return (
   <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer h-[180px]">
  <img
    src={image}
    className="w-[130px] h-[130px] rounded-xl object-cover flex-shrink-0"
  />
  <div className="flex flex-col justify-between overflow-hidden w-full">
    <div>
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
    </div>
    <div>
      <h2 className="mt-2">🕙 {duration}</h2>
      <h2 className="mt-1">🎟️ {cost}</h2>
    </div>
  </div>
</div>

  )
}

export default TimeCard