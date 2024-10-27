import React from 'react';

const About = () => {
  return (
    <div className="about-section bg-gray-300 py-20"> {/* Changed to a lighter gray for a subtle background */}
      <div className="container mx-auto px-5 lg:px-20 text-center">
        <h1 className="text-5xl font-bold mb-10 text-gray-800">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Image */}
          <div className="about-image">
            <img
              src="/about.PNG" // Replace with actual image path
              alt="About Us"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Right Column: Content */}
          <div className="about-content text-left">
            <p className="text-xl text-gray-700 mb-6">
              At GreenBucket Biryanis, we are passionate about serving delicious, authentic biryani made from the finest ingredients. Our journey started with a simple mission – to bring the rich flavors of traditional biryani to your table, using only the freshest ingredients and unique recipes passed down through generations.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              We believe that food is more than just a meal – it's an experience. That's why we craft each dish with care, from the slow-cooked rice to the aromatic spices, ensuring every bite transports you to the heart of a biryani lover's paradise.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              Join us on this flavorful journey, where tradition meets innovation, and every meal is a celebration of taste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
