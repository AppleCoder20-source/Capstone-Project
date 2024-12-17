import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import ChatBox from './pages/Chat';
import SignUpPage from './components/SignUp';
import LoginForm from './components/Login';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-600 p-4 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Routed Content */}
      <div className="flex-grow p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat" element={<ChatBox />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpPage />} />


        </Routes>
      </div>
    </div>
  );
}
