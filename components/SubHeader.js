import React from 'react';
import Image from 'next/image';

const Footer = () => (
  <footer className="footer">
    <Image src="/Fractional CFO Logo.png" alt="Fractional CFO Logo" width={100} height={100} />
    <a href="#subscribe" className="subscribe-button">SUBSCRIBE</a>
  </footer>
);

export default Footer;
