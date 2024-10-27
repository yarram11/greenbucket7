"use client";

import React from 'react';
import { useCart } from '@/context/CartContext';

// Sample menu items (you can replace these with actual data or fetch from an API)
const menu = {
  Starters: [
    {
      name: "Creamy Mushroom Soup",
      price: "₹350",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/starter1.jpeg" // Replace with actual image path
    },
    {
      name: "Stuffed Mushrooms",
      price: "₹250",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/starter1.jpeg" // Replace with actual image path
    },
    {
      name: "Grilled Caesar Salad",
      price: "₹180",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/starter1.jpeg" // Replace with actual image path
    },
    {
      name: "Signature Autumn Salad",
      price: "₹250",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/starter1.jpeg" // Replace with actual image path
    },
    {
      name: "Glazed Tomato Bruschetta",
      price: "₹350",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/starter1.jpeg" // Replace with actual image path
    },
  ],
  Seafood: [
    {
      name: "Baked Oysters Rockefeller",
      price: "₹130",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/starter1.jpeg" // Replace with actual image path
    },
    {
      name: "Grilled Shrimp Skewers",
      price: "₹150",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/starter1.jpeg" // Replace with actual image path
    },
    {
      name: "Seafood Linguine",
      price: "₹140",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/starter1.jpeg" // Replace with actual image path
    },
    {
      name: "Shrimp Scampi",
      price: "₹200",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/starter1.jpeg" // Replace with actual image path
    },
  ],
  Drinks: [
    {
      name: "Cranberry Juice",
      price: "₹100",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/drink1.jpeg" // Replace with actual image path
    },
    {
      name: "Hot Chocolate",
      price: "₹140",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/drink1.jpeg" // Replace with actual image path
    },
    {
      name: "Lemon-Lime Soda",
      price: "₹180",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/drink1.jpeg" // Replace with actual image path
    },
    {
      name: "Alcoholic beverages",
      price: "₹250",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/drink1.jpeg" // Replace with actual image path
    },
  ],
  Specials: [
    {
      name: "Beef Tenderloin & Red Wine",
      price: "₹130",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/biryani2.jpeg" // Replace with actual image path
    },
    {
      name: "Mushroom Risotto",
      price: "₹150",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/biryani2.jpeg" // Replace with actual image path
    },
    {
      name: "Lobster Thermidor",
      price: "₹140",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/biryani2.jpeg" // Replace with actual image path
    },
    {
      name: "Beef Bourguignon",
      price: "₹200",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/biryani2.jpeg" // Replace with actual image path
    },
  ],
  Meat: [
    {
      name: "Beef Bourguignon",
      price: "₹300",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/starter4.png" // Replace with actual image path
    },
    {
      name: "Barbecue Ribs",
      price: "₹280",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/starter4.png" // Replace with actual image path
    },
    {
      name: "Roasted Turkey",
      price: "₹400",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/starter4.png" // Replace with actual image path
    },
    {
      name: "Beef Stroganoff",
      price: "₹920",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/starter4.png" // Replace with actual image path
    },
  ],
};

const Menu = () => {
  const { addToCart } = useCart(); // Access addToCart from context

  return (
    
      <div className="Menu-section bg-gray-300 py-20">

      <section className="menu-section bg-gray-300 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-10 text-gray-800">Our Delicious Menu</h1>

          {Object.entries(menu).map(([category, items]) => (
            <div key={category} className="menu-category mb-12">
              <h2 className="text-3xl font-semibold mb-8 capitalize text-gray-700 border-b-4 inline-block border-yellow-500 pb-2">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="menu-item border bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between"
                  >
                    <div>
                      <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md mb-5" />
                      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.name}</h3> {/* Fixed item property from soupName to name */}
                      <p className="text-xl font-medium text-yellow-600 mb-3">{item.price}</p>
                      <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300 mt-auto"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
