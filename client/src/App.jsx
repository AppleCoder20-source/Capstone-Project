import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Chat } from './pages/Chat';

export default function App() {
  return (
    <div className="min-h-screen bg-sky-600 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Routed Content */}
      <div className="flex-grow p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </div>
  );
}
