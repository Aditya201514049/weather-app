'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getWeatherIcon, formatTemperature, formatWindSpeed } from '../utils/weatherApi';

export default function WeatherCard({ weatherData, unit = 'metric' }) {
  if (!weatherData) return <div>Loading...</div>;

  const { name, main, weather, wind, sys } = weatherData;
  
  // Format date
  const today = new Date();
  const date = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg max-w-md w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{name}</h2>
          <p className="text-gray-600">{date}</p>
          <p className="text-gray-600">{weather[0].description}</p>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src={getWeatherIcon(weather[0].icon)}
            alt={weather[0].description}
            width={100}
            height={100}
            className="w-[100px] h-[100px]"
          />
        </div>
      </div>
      
      <div className="border-t border-gray-200 my-4"></div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <p className="text-5xl font-bold text-gray-800">{formatTemperature(main.temp, unit)}</p>
          <p className="text-gray-600">Feels like: {formatTemperature(main.feels_like, unit)}</p>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Humidity:</span>
            <span className="font-medium">{main.humidity}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Wind:</span>
            <span className="font-medium">{formatWindSpeed(wind.speed, unit)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Pressure:</span>
            <span className="font-medium">{main.pressure} hPa</span>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 my-4"></div>
      
      <div className="flex justify-between text-sm text-gray-600">
        <div className="flex flex-col items-center">
          <span>Min</span>
          <span className="font-medium">{formatTemperature(main.temp_min, unit)}</span>
        </div>
        <div className="flex flex-col items-center">
          <span>Max</span>
          <span className="font-medium">{formatTemperature(main.temp_max, unit)}</span>
        </div>
        <div className="flex flex-col items-center">
          <span>Sunrise</span>
          <span className="font-medium">{new Date(sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
        <div className="flex flex-col items-center">
          <span>Sunset</span>
          <span className="font-medium">{new Date(sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
      </div>
    </div>
  );
}
