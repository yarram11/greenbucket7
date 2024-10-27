"use client";
import React, { useState } from 'react';
import { signIn } from 'next-auth/react'; // Import signIn from next-auth
import { FaEye, FaEyeSlash, FaTwitter } from 'react-icons/fa';

const LoginPopup = ({ isOpen, onClose }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  const handleTwitterLogin = () => {
    signIn('twitter');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 w-1/4 h-full bg-white shadow-lg p-6 transition-transform transform">
      <button className="absolute top-4 right-4 text-xl" onClick={onClose}>
        &times;
      </button>
      <h2 className="text-3xl font-bold mb-6 text-black">
        {isSignup ? 'Create Account' : 'Welcome Back!'}
      </h2>

      {!isSignup && (
        <p className="mb-8 text-gray-600">
          We’d love for you to join our 100% remote network of creators and freelancers.
        </p>
      )}

      <button
        onClick={handleTwitterLogin}
        className="w-full bg-blue-500 text-white p-2 rounded-md flex items-center justify-center space-x-2 mb-4 hover:bg-blue-600 transition"
      >
        <FaTwitter className="text-lg" />
        <span>Continue with Twitter</span>
      </button>

      <div className="text-center text-gray-500 mb-4">
        or {isSignup ? 'sign up' : 'sign in'} with email & password
      </div>

      <form className="flex flex-col space-y-4">
        {isSignup && (
          <>
            <div className="flex flex-col">
              <label className="text-sm mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-md p-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Mobile Number"
                className="border rounded-md p-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </>
        )}

        <div className="flex flex-col">
          <label className="text-sm mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="border rounded-md p-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="flex flex-col relative">
          <label className="text-sm mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            className="border rounded-md p-2 focus:outline-none focus:border-blue-500"
            required
          />
          <span
            className="absolute right-3 top-9 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">
          {isSignup ? 'Sign Up' : 'Sign In'}
        </button>
      </form>

      <p className="mt-4 text-center">
        {isSignup ? (
          <>
            Already have an account?{" "}
            <button onClick={toggleSignup} className="text-blue-500">
              Sign In
            </button>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <button onClick={toggleSignup} className="text-blue-500">
              Sign Up
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default LoginPopup;
