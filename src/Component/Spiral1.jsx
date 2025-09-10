// Spiral1.jsx
import React from 'react';
import './Spiral1.css';
import watermarkGlow from '../assets/watermark_glow_20.png'; // adjust path if needed

const Spiral1 = () => {
  return (
    <div className="lif-spiral-bg">
      <img src={watermarkGlow} alt="LivFi Spiral Glow" className="lif-spiral-img" />
    </div>
  );
};

export default Spiral1;
