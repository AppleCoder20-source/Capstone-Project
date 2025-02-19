import React, { useState } from 'react';
import axios from 'axios';

export default function SettingsPage() {
  // Track active tab
  const [activeTab, setActiveTab] = useState('update');

  // "currentName" is the state  user's current name in the DB
  const [currentName, setcurrentName] = useState('');
  // "newName" is the state  new name we want to update to
  const [newName, setNewName] = useState('');

  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setPassword] = useState('');
  const [newUserName, setUserName] = useState('');

  const [message, setMessage] = useState('');
  const API_URL = import.meta.env.VITE_API_URL;

  // DELETE user
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${API_URL}/update/clear/${currentName}`);
      setMessage(response.data.msg);
    } catch (error) {
      setMessage(error.response?.data?.msg || "Error deleting user");
      console.error("Error deleting user:", error);
    }
  };

  // PATCH /update user
  const handleUpdate = async () => {
    try {
      const response = await axios.patch(`${API_URL}/update`, {
        currentName,         // used to find the existing user in the DB
        newName,         // the new name to update to
        email: newEmail,
        password: newPassword,
        userName: newUserName,
      });
      setMessage(response.data.msg);
    } catch (error) {
      setMessage(error.response?.data?.msg || "Error updating information");
      console.error("Error updating information:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-600 to-blue-800">
      <div className="bg-blue-300 p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold text-center mb-6">Settings</h1>

        {/* Tabs */}
        <div className="flex justify-around mb-6">
          <button
            onClick={() => setActiveTab('update')}
            className={`py-2 px-4 rounded ${
              activeTab === 'update'
                ? 'bg-teal-600 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            Update Info
          </button>
          <button
            onClick={() => setActiveTab('delete')}
            className={`py-2 px-4 rounded ${
              activeTab === 'delete'
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            Delete User
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'update' && (
          <div>
            <h2 className="text-xl font-bold text-center mb-4">Update Information</h2>

            <input
              type="text"
              placeholder="Enter your current name"
              value={currentName}
              onChange={(e) => setcurrentName(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />

            <input
              type="text"
              placeholder="Enter your new name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />

            <input
              type="email"
              placeholder="Enter new email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />

            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />

            <input
              type="text"
              placeholder="Enter new Username"
              value={newUserName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />

            <button
              onClick={handleUpdate}
              className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 w-full"
            >
              Update Info
            </button>
          </div>
        )}

        {activeTab === 'delete' && (
          <div>
            <h2 className="text-xl font-bold text-center mb-4">Delete User</h2>
            <input
              type="text"
              placeholder="Enter your name"
              value={currentName}
              onChange={(e) => setcurrentName(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
            >
              Delete User
            </button>
          </div>
        )}

        {/* Message */}
        {message && (
          <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
        )}
      </div>
    </div>
  );
}
