import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#070514] py-12">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 xl:px-20 grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-sm text-gray-400">
        <ul className="space-y-3">
          <li className="hover:text-white cursor-pointer transition-colors">Audio Description</li>
          <li className="hover:text-white cursor-pointer transition-colors">Investor Relations</li>
          <li className="hover:text-white cursor-pointer transition-colors">Legal Notices</li>
        </ul>
        <ul className="space-y-3">
          <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
          <li className="hover:text-white cursor-pointer transition-colors">Jobs</li>
          <li className="hover:text-white cursor-pointer transition-colors">Cookie Preferences</li>
        </ul>
        <ul className="space-y-3">
          <li className="hover:text-white cursor-pointer transition-colors">Gift Cards</li>
          <li className="hover:text-white cursor-pointer transition-colors">Terms of Use</li>
          <li className="hover:text-white cursor-pointer transition-colors">Corporate Info</li>
        </ul>
        <ul className="space-y-3">
          <li className="hover:text-white cursor-pointer transition-colors">Media Center</li>
          <li className="hover:text-white cursor-pointer transition-colors">Privacy</li>
          <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
        </ul>
      </div>
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 xl:px-20 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Antigravity Inc. Designed with React, Redux, and Tailwind CSS.
      </div>
    </footer>
  );
};

export default Footer;
