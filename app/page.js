'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherBackground from './components/WeatherBackground';
import ErrorDisplay from './components/ErrorDisplay';
import { fetchWeatherData } from './utils/weatherApi';

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Dhaka'); // Default city

  const handleSearch = async (searchCity) => {
    setCity(searchCity);
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherData(searchCity);
      setWeatherData(data);
    } catch (err) {
      console.error('Error fetching weather:', err);
      setError(`We couldn't find "${searchCity}" in our database.`);
    } finally {
      setLoading(false);
    }
  };

  // Fetch weather data when component mounts
  useEffect(() => {
    handleSearch(city);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6">
      {/* Dynamic background based on weather */}
      {weatherData && (
        <WeatherBackground weatherCondition={weatherData.weather[0].main} />
      )}
      
      <header className="w-full max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
          Weather App
        </h1>
        <p className="text-xl text-white/90 mb-8 drop-shadow-md">
          Check the current weather anywhere in the world
        </p>
      </header>
      
      <main className="w-full max-w-4xl mx-auto flex flex-col items-center gap-6 z-10">
        <SearchBar onSearch={handleSearch} />
        
        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : error ? (
          <ErrorDisplay message={error} />
        ) : weatherData ? (
          <WeatherCard weatherData={weatherData} />
        ) : null}
      </main>
      
      <footer className="mt-auto pt-8 text-center text-white/80 text-sm z-10">
        <p>© {new Date().getFullYear()} Weather App | Powered by OpenWeatherMap</p>
      </footer>
    </div>
  );
}
