import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = ({ chatbotAccessed }) => {
  return (
    <nav className="bg-blue-600 text-white text-1xl py-4 px-8">
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About Us</Link>
        <Link to="/signup" className="hover:text-gray-300">Chat</Link>
        <Link to="/login" className="hover:text-gray-300">Login</Link>
        {/* Conditionally render the Settings link */}
        {chatbotAccessed && <Link to="/settings" className="hover:text-gray-300">Settings</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
