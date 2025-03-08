import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to the Book Store</h1>
        <p className="text-gray-600 mb-6">Explore a wide collection of books and movies.</p>
        <div className="flex flex-col gap-4">
          <Link to={'/login'} className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition">
            Login or Sign Up
          </Link>
          <Link to={'/movies'} className="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 transition">
            Visit the Movie Store
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;