// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Oh My Blog. All rights reserved.
        </p>
        <p className="text-sm mb-4 md:mb-0">
          Built by{' '}
          <a
            href="https://onkars-website.netlify.app/"   //my portfolio link
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-yellow-300 transition-colors duration-300"
          >
            Onkar Bobde
          </a>
        </p>
        <div className="flex space-x-6">
          <a href="mailto:bobdeonkar17@gmail.com" className="hover:text-yellow-300 transition-colors duration-300">
            Contact us
          </a> {/*my email id*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
