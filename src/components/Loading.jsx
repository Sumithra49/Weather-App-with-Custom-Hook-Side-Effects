import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 w-full h-full border-4 border-t-sky-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 w-12 h-12 border-4 border-t-transparent border-r-sky-300 border-b-transparent border-l-transparent rounded-full animate-spin animation-delay-200"></div>
        <div className="absolute inset-4 w-8 h-8 border-4 border-t-transparent border-r-transparent border-b-sky-100 border-l-transparent rounded-full animate-spin animation-delay-400"></div>
      </div>
      <p className="mt-4 text-sky-700 font-medium">Fetching weather data...</p>
    </div>
  );
};

export default Loading;