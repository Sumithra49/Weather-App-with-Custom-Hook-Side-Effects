import { useState, useEffect } from 'react';

// You'll need to replace this with your actual API key from OpenWeatherMap
const API_KEY = 'b9a5e26b51c0693236e47544dad05d18'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const useFetchWeather = (city) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Don't fetch if the city is empty
    if (!city.trim()) {
      return;
    }

    const fetchWeather = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
          throw new Error(
            response.status === 404
              ? `City "${city}" not found`
              : 'Failed to fetch weather data'
          );
        }

        const weatherData = await response.json();
        
        setData({
          cityName: weatherData.name,
          country: weatherData.sys.country,
          temperature: Math.round(weatherData.main.temp),
          condition: weatherData.weather[0].main,
          description: weatherData.weather[0].description,
          humidity: weatherData.main.humidity,
          windSpeed: weatherData.wind.speed,
          icon: weatherData.weather[0].icon,
          feelsLike: Math.round(weatherData.main.feels_like),
          pressure: weatherData.main.pressure
        });
      } catch (error) {
        setError({ 
          message: error instanceof Error ? error.message : 'An unknown error occurred' 
        });
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { data, isLoading, error };
};