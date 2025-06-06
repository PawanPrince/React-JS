import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-700 via-gray-800 to-black flex flex-col items-center justify-center text-white px-4 py-83">
      
      <img
        src="./404-illustration.svg" 
        alt="404 Not Found Illustration"
        className="w-72 h-auto mb-8"
      />

      <h1 className="text-5xl font-extrabold mb-4 text-center">
        404 - Page Not Found
      </h1>

      <p className="text-xl text-center mb-6 max-w-lg text-gray-300">
        Sorry, the page you’re looking for doesn’t exist or has been moved. Let’s get you back on track!
      </p>

      <Link to="/">
        <button className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition duration-200">
          🚀 Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
