import React from 'react';
import Image from 'next/image';

const SubHeader = () => (
  <div className="sub-header" style={{ marginTop: '70px' }}>
    <div className="logo-placeholder">
      <Image src="/Fractional CFO Logo.png" alt="Fractional CFO Logo" width={100} height={100} />
    </div>
    <h1>BRAND NAME</h1>
  </div>
);

export default SubHeader;
