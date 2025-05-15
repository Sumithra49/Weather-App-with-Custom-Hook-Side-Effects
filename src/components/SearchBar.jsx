import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="relative flex items-center">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 focus:outline-none transition-all shadow-sm"
        />
        <Search className="absolute left-4 w-5 h-5 text-gray-400" />
        <button
          type="submit"
          className="absolute right-2 bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-full transition-colors duration-200 shadow-sm"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;