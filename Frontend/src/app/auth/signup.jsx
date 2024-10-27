import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Implement your sign-up logic here
    // For demonstration, we will log the email and password
    console.log({ email, password });
    // Redirect or handle success/error
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSignUp}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-lg font-semibold mb-4">Create New Account</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Sign Up
        </button>
        <p className="mt-4 text-sm">
          Already have an account?{' '}
          <Link href="/auth/signin" className="text-blue-500">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
