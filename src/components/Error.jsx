import React from 'react';
import { AlertCircle } from 'lucide-react';

const Error = ({ message }) => {
  return (
    <div className="flex items-center justify-center p-4 bg-red-50 text-red-800 rounded-lg border border-red-200 animate-fadeIn">
      <AlertCircle className="w-5 h-5 mr-2 text-red-600" />
      <p className="font-medium">{message}</p>
    </div>
  );
};

export default Error;