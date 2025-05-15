import React from 'react';
import { 
  Droplets, 
  Wind, 
  Thermometer, 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  CloudFog, 
  CloudLightning
} from 'lucide-react';

// Function to get the appropriate weather icon based on condition
const getWeatherIcon = (condition) => {
  const iconMap = {
    'Clear': <Sun className="w-12 h-12 text-yellow-500" />,
    'Clouds': <Cloud className="w-12 h-12 text-gray-500" />,
    'Rain': <CloudRain className="w-12 h-12 text-blue-500" />,
    'Drizzle': <CloudRain className="w-12 h-12 text-blue-300" />,
    'Thunderstorm': <CloudLightning className="w-12 h-12 text-purple-500" />,
    'Snow': <CloudSnow className="w-12 h-12 text-sky-200" />,
    'Mist': <CloudFog className="w-12 h-12 text-gray-400" />,
    'Smoke': <CloudFog className="w-12 h-12 text-gray-600" />,
    'Haze': <CloudFog className="w-12 h-12 text-gray-400" />,
    'Dust': <CloudFog className="w-12 h-12 text-yellow-700" />,
    'Fog': <CloudFog className="w-12 h-12 text-gray-400" />
  };
  
  return iconMap[condition] || <Thermometer className="w-12 h-12 text-gray-600" />;
};

// Function to get temperature-based background class
const getTemperatureClass = (temp) => {
  if (temp < 0) return 'bg-gradient-to-br from-blue-50 to-blue-200';
  if (temp < 10) return 'bg-gradient-to-br from-sky-50 to-sky-200';
  if (temp < 20) return 'bg-gradient-to-br from-green-50 to-green-100';
  if (temp < 30) return 'bg-gradient-to-br from-yellow-50 to-yellow-100';
  return 'bg-gradient-to-br from-orange-50 to-orange-200';
};

const WeatherInfo = ({ data }) => {
  const tempClass = getTemperatureClass(data.temperature);
  
  return (
    <div className={`animate-fadeIn w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-md transition-all ${tempClass}`}>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {data.cityName}
              {data.country && (
                <span className="ml-2 text-sm font-medium px-2 py-1 bg-gray-200 rounded-full">
                  {data.country}
                </span>
              )}
            </h2>
            <p className="text-gray-600 capitalize">{data.description}</p>
          </div>
          <div className="flex flex-col items-center">
            {getWeatherIcon(data.condition)}
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex items-center justify-center">
            <span className="text-6xl font-bold text-gray-800">{data.temperature}°</span>
            <div className="ml-4 text-gray-600">
              <p>Feels like: {data.feelsLike}°</p>
              <p>Pressure: {data.pressure} hPa</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="flex items-center bg-white bg-opacity-70 p-3 rounded-lg">
            <Droplets className="w-5 h-5 text-blue-500 mr-2" />
            <div>
              <p className="text-xs text-gray-500">Humidity</p>
              <p className="font-semibold">{data.humidity}%</p>
            </div>
          </div>
          <div className="flex items-center bg-white bg-opacity-70 p-3 rounded-lg">
            <Wind className="w-5 h-5 text-blue-500 mr-2" />
            <div>
              <p className="text-xs text-gray-500">Wind Speed</p>
              <p className="font-semibold">{data.windSpeed} m/s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;