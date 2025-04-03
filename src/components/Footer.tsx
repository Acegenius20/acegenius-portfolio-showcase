
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 border-t border-lightestNavy">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shobith S M. All Rights Reserved.
          </p>
          
          <p className="text-slate text-sm font-mono">
            <span className="text-teal">Designed & Built by</span> Shobith S M
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
