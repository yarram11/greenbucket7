// src/pages/know-more.js
import React from "react";
import Link from "next/link";

const KnowMore = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-600 restaurant-heading text-center">
        We Invite You to Savor the Flavors of Our Restaurant!
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-6 restaurant-description max-w-2xl text-center">
        Experience the rich and vibrant tastes of India right here at Green Bucket Biryanis. From the aromatic spices of our biryanis to the delightful crunch of our starters, every dish is crafted with love and tradition. Join us for a culinary journey that pays homage to our rich heritage, where every meal tells a story of flavor and culture.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <img
          src="/biryani.png" // Replace with your actual image path
          alt="Delicious Biryani"
          className="rounded-lg shadow-lg object-cover w-full h-64"
        />
        <img
          src="/starter1.jpeg" // Replace with your actual image path
          alt="Crispy Starters"
          className="rounded-lg shadow-lg object-cover w-full h-64"
        />
      </div>

      <Link
        href="/"
        className="mt-4 inline-block px-6 py-2 md:px-8 md:py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default KnowMore;
