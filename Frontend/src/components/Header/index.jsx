"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { MdOutlinePhone } from 'react-icons/md';
import { BiShoppingBag } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa'; 
import LoginPopup from './LoginPopup'; 
import CartPopup from './CartPopup'; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false); 
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false); 
  // Local state for cart items and count
  const [cartItems, setCartItems] = useState([]); // Initialize as needed
  const getCartCount = () => cartItems.length; // Function to get cart item count

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Functions to open and close popups
  const openLoginPopup = () => setIsLoginPopupOpen(true);
  const closeLoginPopup = () => setIsLoginPopupOpen(false);
  const openCartPopup = () => setIsCartPopupOpen(true);
  const closeCartPopup = () => setIsCartPopupOpen(false);

  // Close cart popup on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isCartPopupOpen && !event.target.closest('.cart-popup')) {
        closeCartPopup();
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartPopupOpen]);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 h-16 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} flex items-center justify-between px-6`}
    >
      {/* Logo */}
      <div className="logo">
        <Link href="/">
          <Image
            src="/logo.png"
            width={150}
            height={80}
            alt="logo"
            priority
            className="object-contain"
          />
        </Link>
      </div>

      {/* Navigation links */}
      <nav className="flex-grow flex justify-center py-4">
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className={`hover:text-blue-500 transition ${isScrolled ? "text-black" : "text-white"}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`hover:text-blue-500 transition ${isScrolled ? "text-black" : "text-white"}`}>
              About
            </Link>
          </li>
          <li>
            <Link href="/menu" className={`hover:text-blue-500 transition ${isScrolled ? "text-black" : "text-white"}`}>
              Menu
            </Link>
          </li>
          <li>
            <Link href="/blog" className={`hover:text-blue-500 transition ${isScrolled ? "text-black" : "text-white"}`}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`hover:text-blue-500 transition ${isScrolled ? "text-black" : "text-white"}`}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Right section: Phone, Cart, and Login */}
      <div className="flex items-center space-x-6">
        <span className="ml-6 flex items-center">
          <MdOutlinePhone className="mr-2" />
          +91-9887776666
        </span>

        <div className="flex items-center space-x-4">
          {/* Cart Icon Box */}
          <div className={`relative p-2 rounded-md shadow-lg ${isScrolled ? 'bg-[#4caf50]' : 'bg-white'}`}>
            <button onClick={openCartPopup}>
              <BiShoppingBag className="text-2xl text-gray-700 hover:text-blue-600 transition" />
              <span className="absolute top-[-5px] right-[-10px] flex items-center justify-center w-4 h-4 bg-blue-300 text-white rounded-full">
                {getCartCount()} 
              </span>
            </button>
          </div>

          {/* Login Icon Box */}
          <div className={`p-2 rounded-md shadow-lg ${isScrolled ? 'bg-[#4caf50]' : 'bg-white'}`}>
            <button onClick={openLoginPopup} className="text-2xl text-gray-700 hover:text-blue-600 transition">
              <FaUser />
            </button>
          </div>
        </div>
      </div>

      {/* Login and Cart Popups */}
      <LoginPopup isOpen={isLoginPopupOpen} onClose={closeLoginPopup} />
      {isCartPopupOpen && (
        <div className="absolute top-16 right-6 cart-popup">
          <CartPopup cartItems={cartItems} closeCartPopup={closeCartPopup} />
        </div>
      )}
    </header>
  );
};

export default Header;
