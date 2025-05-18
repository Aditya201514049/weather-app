'use client';

import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative flex items-center">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="w-full px-4 py-3 pr-12 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none placeholder-gray-400 shadow-sm"
        />
        <button 
          type="submit"
          className="absolute right-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </div>
    </form>
  );
}
