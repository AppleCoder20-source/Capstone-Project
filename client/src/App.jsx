import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import ChatBox from './pages/Chat';
import SignUpPage from './pages/SignUp';
import LoginForm from './components/Login';
import SettingsPage from './components/Settings'; 

export default function App() {
  const [chatbotAccessed, setChatbotAccessed] = useState(false); // Track chatbot access
  const location = useLocation(); // Get current route location

  // Update chatbotAccessed when user navigates to /chat
  useEffect(() => {
    if (location.pathname === '/chat') {
      setChatbotAccessed(true);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-600 p-4 flex flex-col">
      {/* Pass chatbotAccessed to Navbar */}
      <Navbar chatbotAccessed={chatbotAccessed} />

      {/* Routed Content */}
      <div className="flex-grow p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat" element={<ChatBox />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route 
            path="/settings" 
            element={chatbotAccessed ? <SettingsPage /> : <Home />} 
          />
        </Routes>
      </div>
    </div>
  );
}
