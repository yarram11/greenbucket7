// src/components/MapSection.jsx
import React from 'react';

const MapSection = () => {
  return (
    <section className="map-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2359828367557!2d80.62648537592784!3d16.514179927371067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35ef1ae57dd679%3A0x7cb6882a4c6d38f!2sGreen%20Bucket%20Biryani%20Governorpet%20Vijayawada!5e0!3m2!1sen!2sin!4v1728126175298!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Location Map"
      ></iframe>
    </section>
  );
};

export default MapSection;
