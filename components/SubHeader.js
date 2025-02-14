import React from 'react';
import Image from 'next/image';

const SubHeader = () => (
  <div className="sub-header">
    <Image src="/Fractional CFO Logo.png" alt="Fractional CFO Logo" className="sub-header-logo" />
    <div className="text-container">
      <h1>Fractional CFO</h1>
      <p>by MetaCap</p>
    </div>
  </div>
);

export default SubHeader;
