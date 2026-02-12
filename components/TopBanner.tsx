import React from 'react';
import Flag from './Flag';
import { STAFF_LANGUAGES } from '../constants/languages';

const TopBanner: React.FC = () => {
  return (
    <div className="bg-navy text-white py-2 text-center text-sm">
      <span>We speak your language: </span>
      <span className="inline-flex items-center gap-2 ml-1">
        {STAFF_LANGUAGES.map((lang) => (
          <Flag key={lang.code} code={lang.code} size="sm" />
        ))}
      </span>
    </div>
  );
};

export default TopBanner;