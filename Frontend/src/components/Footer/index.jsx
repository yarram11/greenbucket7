"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; // New icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-10">
        
        {/* Contact Us Section */}
        <div className="contact-us text-center md:text-left">
          <h4 className="font-bold mb-2 text-lg">Contact Us</h4>
          <p className="flex items-center mb-2">
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> 
            Phone: 123-456-7890
          </p>
          <p className="flex items-center mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> 
            Email: info@greenbucketbiryanis.com
          </p>
          <p className="flex items-center mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> 
            Address: Green Bucket, Governorpet, Vijayawada.
          </p>
        </div>

        {/* Send Us a Message Section */}
        <div className="send-us w-full md:w-1/3 bg-[#7da640] rounded-lg shadow-lg" style={{ marginLeft: '0' }}>
          <h4 className="text-3xl font-bold mb-8 text-gray-800 font-serif tracking-wide italic text-center">Send Us a Message</h4>
          <form className="send-us-form p-5 rounded">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-2 mb-2 border rounded"
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 mb-2 border rounded"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded w-full"
            >
              Send Us
            </button>
          </form>
        </div>

        {/* Social Media Section */}
        <div className="social-media text-center md:text-left">
          <h4 className="font-bold mb-2">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="text-blue-400 hover:text-blue-600" /> 
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} size="2x" className="text-blue-600 hover:text-blue-800" /> 
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-pink-500 hover:text-pink-700" /> 
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-5">
        <p>&copy; 2024 Green Bucket Biryanis. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
