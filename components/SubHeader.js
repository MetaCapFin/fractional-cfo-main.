import React from 'react';
import Image from 'next/image';

const Footer = () => (
  <footer className="footer">
    <Image src="/Fractional CFO Logo.png" alt="Fractional CFO Logo" width={100} height={100} />
    <a href="#contact" className="contact-button">CONTACT US</a>
  </footer>
);

const SubHeader = () => (
  <div className="sub-header">
    <div className="text-container">
      <h1>Fractional CFO</h1>
      <p>by MetaCap</p>
    </div>
  </div>
);

export { Footer, SubHeader };
