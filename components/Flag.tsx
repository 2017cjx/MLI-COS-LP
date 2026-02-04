import React from 'react';

type FlagCode = 'jp' | 'cn' | 'tw' | 'kr' | 'sa' | 'ru' | 'tr' | 'br' | 'es';

interface FlagProps {
  code: FlagCode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Using flagcdn.com SVG flags
const Flag: React.FC<FlagProps> = ({ code, size = 'md', className = '' }) => {
  const sizeMap = {
    sm: { w: 20, h: 15 },
    md: { w: 32, h: 24 },
    lg: { w: 48, h: 36 },
  };
  
  const { w, h } = sizeMap[size];
  
  return (
    <img 
      src={`https://flagcdn.com/${code}.svg`}
      width={w}
      height={h}
      alt=""
      className={`inline-block align-middle rounded-sm ${className}`}
    />
  );
};

export default Flag;
