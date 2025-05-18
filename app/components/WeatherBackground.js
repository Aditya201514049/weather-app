'use client';

import Image from 'next/image';
import { getWeatherBackground } from '../utils/weatherApi';

export default function WeatherBackground({ weatherCondition }) {
  const bgImage = getWeatherBackground(weatherCondition);
  
  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src={bgImage}
        alt={`${weatherCondition} weather`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 backdrop-blur-[2px]"></div>
    </div>
  );
}
