'use client';

import { useState, useEffect, useRef } from 'react';
import { filterCities } from '../utils/cityData';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef(null);
  
  useEffect(() => {
    // Handle clicks outside the suggestion dropdown
    function handleClickOutside(event) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setShowSuggestions(false);
    }
  };
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    setCity(value);
    
    if (value.length >= 2) {
      const filteredSuggestions = filterCities(value);
      setSuggestions(filteredSuggestions);
      setShowSuggestions(filteredSuggestions.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };
  
  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  };
  
  return (
    <div className="w-full max-w-md relative">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative flex items-center">
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            onFocus={() => city.length >= 2 && suggestions.length > 0 && setShowSuggestions(true)}
            placeholder="Enter city name..."
            className="w-full px-4 py-3 pr-12 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none placeholder-gray-400 shadow-sm text-white bg-black/40 backdrop-blur-sm"
            autoComplete="off"
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
      
      {showSuggestions && (
        <div 
          ref={suggestionsRef}
          className="absolute z-10 mt-1 w-full bg-black/70 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/10"
        >
          <ul className="py-1">
            {suggestions.map((suggestion, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left px-4 py-2 text-white hover:bg-white/10 transition-colors"
                >
                  {suggestion}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
