import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [error, setError] = useState(null); // Track errors
  const API_URL = import.meta.env.url;


  const navigate = useNavigate();

  // Redirect to /chat on successful login
  useEffect(() => {
    if (isLoggedIn) {
      console.log("Login successful, navigating to /chat...");
      navigate("/chat");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, userName, email, password }), // Send form data
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.msg || "An error occurred. Please try again.");
        return;
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Set login as succesful 
      setIsLoggedIn(true);
    } catch (err) {
      console.error("Error during login:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-600 to-blue-800 p-10">
      <div className="bg-blue-300 p-10 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Welcome Back!</h2>
        <p className="text-center mb-6 text-sm text-gray-600">Please log in to your account</p>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Show error message */}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="name">Name</label>
            <input
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border-none focus:ring-2 focus:ring-teal-500 outline-none"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="userName">User Name</label>
            <input
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border-none focus:ring-2 focus:ring-teal-500 outline-none"
              type="text"
              placeholder="Enter your username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="email">Email</label>
            <input
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border-none focus:ring-2 focus:ring-teal-500 outline-none"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="password">Password</label>
            <input
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 border-none focus:ring-2 focus:ring-teal-500 outline-none"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="w-full py-3 mt-4 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-bold text-lg transition duration-300 focus:ring-4 focus:ring-teal-500"
            type="submit"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account? <a href="/signup" className="text-teal-700 hover:text-teal-500 underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
