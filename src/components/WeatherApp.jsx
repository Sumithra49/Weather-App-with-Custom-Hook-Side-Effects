import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
import Loading from './Loading';
import Error from './Error';
import { useFetchWeather } from '../hooks/useFetchWeather';
import { CloudSun } from 'lucide-react';

const WeatherApp = () => {
  const [searchCity, setSearchCity] = useState('');
  const { data, isLoading, error } = useFetchWeather(searchCity);

  const handleSearch = (city) => {
    setSearchCity(city);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 flex flex-col items-center p-6">
      <header className="text-center mb-8">
        <div className="flex items-center justify-center mb-2">
          <CloudSun className="w-10 h-10 text-sky-500 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Weather App</h1>
        </div>
        <p className="text-gray-600">Check the weather in your city</p>
      </header>
      
      <SearchBar onSearch={handleSearch} />
      
      <div className="mt-8 w-full max-w-md">
        {isLoading && <Loading />}
        
        {error && <Error message={error.message} />}
        
        {!isLoading && !error && data && <WeatherInfo data={data} />}
        
        {!isLoading && !error && !data && searchCity && (
          <div className="text-center text-gray-500 p-4">
            No weather data available
          </div>
        )}
        
        {!isLoading && !error && !data && !searchCity && (
          <div className="text-center p-8 bg-white bg-opacity-50 rounded-lg border border-gray-200 animate-pulse">
            <CloudSun className="w-16 h-16 text-sky-300 mx-auto mb-4" />
            <p className="text-gray-600">Enter a city name to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;