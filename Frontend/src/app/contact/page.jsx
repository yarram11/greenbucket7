"use client"; // Declare as a client component

import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'; // Import icons

const ContactUs = () => {
  return (
    <section id="contact" className="contact-section bg-gray-100 py-20 relative">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/rest1.jpg" // Image path
          alt="Restaurant"
          layout="fill"
          objectFit="cover"
          className="opacity-30" // Adjust opacity if needed
        />
      </div>

      <div className="container mx-auto px-5 lg:px-20 text-center relative z-10">
        <h2 className="text-6xl font-bold mb-10 text-gray-800">Contact Us</h2> {/* Increased size to 6xl */}

        <div className="flex flex-col md:flex-row justify-center md:justify-between">
          {/* Contact Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
            {/* Location Details */}
            <div className="contact-box">
              <div className="icon-container">
                <FaMapMarkerAlt size={40} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-700">Green Bucket, Governorpet, Vijayawada.</p>
            </div>
            {/* Phone Number */}
            <div className="contact-box">
              <div className="icon-container">
                <FaPhoneAlt size={40} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-700">+91 123 456 7890</p>
            </div>
            {/* Email Address */}
            <div className="contact-box">
              <div className="icon-container">
                <FaEnvelope size={40} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-700">info@yourrestaurant.com</p>
            </div>
            {/* Opening Timings */}
            <div className="contact-box">
              <div className="icon-container">
                <FaClock size={40} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Opening Timings</h3>
              <p className="text-gray-700">Mon-Sun: 10 AM - 10 PM</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          position: relative;
          padding: 4rem 0; /* Added padding for top and bottom */
        }

        .contact-box {
          border: 2px solid #38a169; /* Green border */
          border-radius: 8px; /* Rounded corners */
          padding: 2rem; /* Padding for better spacing */
          background: white; /* White background */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
          transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
          display: flex; /* Flex to center text vertically */
          flex-direction: column; /* Stack children vertically */
          align-items: center; /* Center align children */
          justify-content: flex-start; /* Align items to the top */
          height: 100%; /* Full height to maintain uniformity */
        }

        .icon-container {
          margin-bottom: 1rem; /* Space below the icon */
          color: #38a169; /* Icon color */
        }

        .contact-box:hover {
          transform: translateY(-5px); /* Lift effect on hover */
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
          background-color: #f0fff4; /* Light green background on hover */
          border-color: #2f855a; /* Darker green border on hover */
        }

        h2 {
          font-size: 3rem; /* Adjusted size for the main heading */
          font-weight: 700; /* Bold weight */
          color: #2d3748; /* Darker text color */
          margin-bottom: 2rem; /* Spacing below the heading */
        }

        h3 {
          font-size: 1.5rem; /* Size for subheadings in boxes */
          font-weight: 600; /* Slightly bold */
          color: #2d3748; /* Darker text color */
          margin-bottom: 1rem; /* Spacing below subheadings */
        }

        p {
          font-size: 1rem; /* Font size for paragraph text */
          color: #4a5568; /* Text color */
          text-align: center; /* Center text in boxes */
        }

        /* Responsive adjustments */
        @media (min-width: 768px) {
          .contact-box {
            margin: 0 1rem; /* Add spacing between boxes */
          }
        }

        /* Background Image */
        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1; /* Send background image behind content */
        }
      `}</style>
    </section>
  );
};

export default ContactUs;
