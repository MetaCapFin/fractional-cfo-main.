import React from 'react';
import Image from 'next/image';

const SubHeader = () => (
  <div className="sub-header">
    <div className="logo-container">
      <Image src="/Fractional CFO Logo.png" alt="Fractional CFO Logo" width={1080} height={1080} />
    </div>
    <div className="text-container">
      <h1>FRACTIONAL CFO</h1>
      <p>by MetaCap</p>
    </div>
  </div>
);

export default SubHeader;
