// Utility functions for managing search history with localStorage

// Save a city to search history
export const saveToSearchHistory = (cityName) => {
  // Only run in browser, not during server-side rendering
  if (typeof window === 'undefined') return;
  
  try {
    // Get existing history or initialize empty array
    const history = JSON.parse(localStorage.getItem('weatherAppSearchHistory') || '[]');
    
    // Remove the city if it already exists (to avoid duplicates)
    const filteredHistory = history.filter(city => 
      city.toLowerCase() !== cityName.toLowerCase()
    );
    
    // Add new city to beginning of array (most recent first)
    filteredHistory.unshift(cityName);
    
    // Keep only last 10 searches
    const trimmedHistory = filteredHistory.slice(0, 10);
    
    // Save back to localStorage
    localStorage.setItem('weatherAppSearchHistory', JSON.stringify(trimmedHistory));
    
    return trimmedHistory;
  } catch (error) {
    console.error('Error saving to search history:', error);
    return [];
  }
};

// Get search history
export const getSearchHistory = () => {
  // Only run in browser, not during server-side rendering
  if (typeof window === 'undefined') return [];
  
  try {
    return JSON.parse(localStorage.getItem('weatherAppSearchHistory') || '[]');
  } catch (error) {
    console.error('Error retrieving search history:', error);
    return [];
  }
};

// Clear search history
export const clearSearchHistory = () => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem('weatherAppSearchHistory');
    return true;
  } catch (error) {
    console.error('Error clearing search history:', error);
    return false;
  }
};
