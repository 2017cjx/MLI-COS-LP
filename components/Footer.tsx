import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 text-center">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-5 text-[0.9rem] opacity-80 flex flex-col md:block gap-2">
          <span className="md:mx-5">📍 Westwood: (310) 887-0777</span>
          <span className="md:mx-5">📍 Hollywood: (323) 870-7102</span>
        </div>
        <p className="opacity-70 text-[0.9rem]">© 2025 Mentor Language Institute</p>
      </div>
    </footer>
  );
};

export default Footer;