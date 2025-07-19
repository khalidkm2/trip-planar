import { useUnsplashImage } from '@/lib/useUnsplashImage';
// import React from 'react';
// import { useUnsplashImage } from '@/hooks/useUnsplashImage';

 const HotelCard = ({ data }:any) => {
  const { name, address, price_per_night, stars } = data;
  const { image: hotelImage } = useUnsplashImage(name);

  return (
    <div>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, ${address}`)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="hover:scale-105 transition-all cursor-pointer">
          <img
            src={hotelImage || '/placeholder.jpg'}
            alt={name}
            className="rounded-xl h-[180px] w-full object-cover"
          />
          <div className="my-2 flex flex-col gap-2">
            <h2 className="font-medium">{name}</h2>
            <h2 className="text-xs text-gray-500">📍 {address}</h2>
            <h2 className="text-sm">💰 {price_per_night}</h2>
            <h2 className="text-sm">⭐ {stars} stars</h2>
          </div>
        </div>
      </a>
    </div>
  );
};


export default HotelCard