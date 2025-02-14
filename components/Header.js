import React from 'react';
import Link from 'next/link';

const Header = () => (
  <header id="header">
    <nav className="nav-links">
      <Link href="#about-us">
        <a>About Us</a>
      </Link>
      <Link href="/fractional-cfo-services">
        <a>Fractional CFO Services</a>
      </Link>
      <Link href="#media">
        <a>Media</a>
      </Link>
    </nav>
    <div className="contact-container">
      <Link href="#contact-us">
        <a className="contact-button">CONTACT US</a>
      </Link>
    </div>
  </header>
);

export default Header;
