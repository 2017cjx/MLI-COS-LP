import React from 'react';

type FlagCode = 'jp' | 'cn' | 'tw' | 'kr' | 'sa' | 'ru' | 'tr' | 'br' | 'es';

interface FlagProps {
  code: FlagCode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Using flagcdn.com - free flag CDN
// Supported widths: 20, 40, 80, 160
const Flag: React.FC<FlagProps> = ({ code, size = 'md', className = '' }) => {
  const sizeMap = {
    sm: { w: 20, h: 15, cdn: 20 },
    md: { w: 32, h: 24, cdn: 40 },
    lg: { w: 48, h: 36, cdn: 80 },
  };
  
  const { w, h, cdn } = sizeMap[size];
  
  return (
    <img 
      src={`https://flagcdn.com/w${cdn}/${code}.png`}
      width={w}
      height={h}
      alt=""
      className={`inline-block align-middle rounded-sm shadow-sm ${className}`}
      style={{ objectFit: 'cover' }}
    />
  );
};

export default Flag;
