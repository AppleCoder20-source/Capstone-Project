import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-sky-700 text-white text-1xl py-4 px-8">
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About Us</Link>
        <Link to="/chat" className="hover:text-gray-300">Chat</Link>
      </div>
    </nav>
  );
};

export default Navbar;
