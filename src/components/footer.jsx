import React from 'react';
import Footerlogo from './footerlogo';
 // Assuming you have the footer logo component

const Footer = () => {
  return (
    <footer className="bg-custom-blue text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section 1 */}
          <div className="flex flex-col items-start">
<Footerlogo />
            <p className="text-center text-xs mt-2">&#169;  R Singhania</p>
          </div>

          {/* Section 2 */}
          <div>
            <p className="font-bold mb-2">Company</p>
            <ul className="text-sm">
              <li><a href="#about" className="text-slate hover:text-white">About</a></li>
              <li><a href="#faq" className="text-slate hover:text-white">FAQ</a></li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <p className="font-bold mb-2">Terms</p>
            <ul className="text-sm">
              <li><a href="#data-privacy" className="text-slate hover:text-white">Data Privacy</a></li>
              <li><a href="#terms" className="text-slate hover:text-white">Terms</a></li>
              <li><a href="#accessibility" className="text-slate hover:text-white">Accessibility</a></li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <p className="font-bold mb-2">Related</p>
            <ul className="text-sm">
              <li><a href="#find-buyer" className="text-slate hover:text-white">Find Buyer</a></li>
              <li><a href="#feedback" className="text-slate hover:text-white">Feedback</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
