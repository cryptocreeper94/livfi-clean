import React from 'react';
import'../Style/background.css';

import watermarkGlow from '../assets/watermark_glow_20.png';

const background = () => {
  return (
    <div className="lif-background">
      <img src={watermarkGlow} alt="LivFi Spiral Glow" className="lif-background-img" />
    </div>
  );
};

export default background;

