import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null); // Clear previous errors

    try {
      const response = await axios.post("http://localhost:3001/api/signup", {
        name,
        userName,
        email,
        password,
      });

      console.log('Signup successful', response.data);
      alert('Signup successful! Redirecting...');
      navigate('/login');
    } catch (error) {
      console.error('Signup error:', error);
      setError(error.response?.data?.msg || error.message || 'Signup failed'); // Simplified error message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-600 to-blue-800 p-10">
      <div className="bg-blue-800 p-10 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-black">Create Your Account</h2>
        <p className="text-center mb-6 text-sm text-">Join us and start your journey</p>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Show error message */}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-black" htmlFor="name">Name</label>
            <input
              className="w-full p-3 rounded-lg bg-gray-100 text-black border-none focus:ring-2 focus:ring-teal-500 outline-none"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-black" htmlFor="userName">User Name</label>
            <input
              className="w-full p-3 rounded-lg bg-gray-100 text-black border-none focus:ring-2 focus:ring-teal-500 outline-none"
              type="text"
              placeholder="Enter your username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-black" htmlFor="email">Email</label>
            <input
              className="w-full p-3 rounded-lg bg-gray-100 text-black border-none focus:ring-2 focus:ring-teal-500 outline-none"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-black" htmlFor="password">Password</label>
            <input
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border-none focus:ring-2 focus:ring-teal-500 outline-none"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
          </div>

          <button
            className="w-full py-3 mt-4 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-bold text-lg transition duration-300 focus:ring-4 focus:ring-teal-500"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-teal-700 hover:text-teal-500 underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
