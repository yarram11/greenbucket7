// src/components/ScrollToTopButton.jsx
"use client";
import React, { useEffect, useState } from 'react';
import { BiArrowToTop } from 'react-icons/bi';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolling down
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-green-600 text-white rounded-full p-3 shadow-lg transition-opacity duration-300 
                  ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      <BiArrowToTop size={24} />
    </button>
  );
};

export default ScrollToTopButton;
