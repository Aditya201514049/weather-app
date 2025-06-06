export const fetchWeatherData = async (city, units = 'metric') => {
  // Using the API key from your example
  const API_KEY = 'dfd492d5cb817efe3c14d45eca39fe41';
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
  
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error('Weather data not available');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const getWeatherIcon = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

// Weather background images based on condition
export const getWeatherBackground = (weatherCondition) => {
  const backgrounds = {
    'Clear': '/images/clear.jpg',
    'Clouds': '/images/cloudy.jpg',
    'Rain': '/images/rainy.jpg',
    'Snow': '/images/snow.jpg',
    'Thunderstorm': '/images/thunder.jpg',
    'Drizzle': '/images/rainy.jpg',
    'Mist': '/images/mist.jpg',
    'Fog': '/images/mist.jpg',
    'default': '/images/default.jpg'
  };

  return backgrounds[weatherCondition] || backgrounds.default;
};

// Helper function to format temperature based on unit
export const formatTemperature = (temp, unit) => {
  return Math.round(temp) + (unit === 'metric' ? '°C' : '°F');
};

// Helper function to format wind speed based on unit
export const formatWindSpeed = (speed, unit) => {
  if (unit === 'metric') {
    return `${speed} m/s`;
  } else {
    return `${Math.round(speed * 2.237)} mph`;
  }
};
