import React from 'react';
import Flag from './Flag';

const TopBanner: React.FC = () => {
  return (
    <div className="bg-navy text-white py-2 text-center text-sm">
      <span>We speak your language: </span>
      <span className="inline-flex items-center gap-2 ml-1">
        <Flag code="jp" size="sm" />
        <Flag code="cn" size="sm" />
        <Flag code="tw" size="sm" />
        <Flag code="kr" size="sm" />
        <Flag code="sa" size="sm" />
        <Flag code="ru" size="sm" />
        <Flag code="tr" size="sm" />
        <Flag code="br" size="sm" />
        <Flag code="es" size="sm" />
      </span>
    </div>
  );
};

export default TopBanner;