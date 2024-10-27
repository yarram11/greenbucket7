// components/LoginPopup.jsx
"use client";
import { useState } from "react";

const LoginPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleTwitterLogin = () => {
    // Add your Twitter login logic here
    console.log("Twitter login clicked");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4">Login</h2>
        <button
          onClick={handleTwitterLogin}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login with Twitter
        </button>
        <button
          onClick={onClose}
          className="mt-4 w-full border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;
