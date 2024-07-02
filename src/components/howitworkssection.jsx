import React from 'react';
import Roleicon from './roleicon';
import DocIcon from './docIcon'; 
import SupIcon from './supIcon';
import OppIcon from './oppIcon';
import QuoteIcon from './quoteIcon';
import HandshakeIcon from './handshakeIcon';

const HowItWorksSection = () => {
  return (
    <div className="bg-slate-50 py-12 my-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Center Aligned Heading and Description */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">How it Works</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta, libero eu
            consectetur eleifend, odio dui viverra arcu.
          </p>
        </div>

        {/* Grid of 6 Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className="bg-white rounded-lg p-6 py-12 flex flex-col items-center text-center hover:bg-gray-200 transition duration-300">
            <Roleicon />
            <p className="text-black mt-6">Select Your Role and Sign Up</p>
          </div>

          {/* Box 2 */}
          <div className="bg-blue-100 rounded-lg p-6 py-12 flex flex-col items-center text-center hover:bg-gray-200 transition duration-300">
            <DocIcon />
            <p className="text-black mt-6">Buyers Post Your Requirements</p>
          </div>

          {/* Box 3 */}
          <div className="bg-white rounded-lg p-6 py-12 flex flex-col items-center text-center hover:bg-gray-200 transition duration-300">
            <SupIcon />
            <p className="text-black mt-6">Review, Select, and Contact the Best Suppliers</p>
          </div>

          {/* Box 4 */}
          <div className="bg-blue-100 rounded-lg p-6 py-12 flex flex-col items-center text-center hover:bg-gray-200 transition duration-300">
            <OppIcon />
            <p className="text-black mt-6">Suppliers Complete your profile and get notified for opportunities</p>
          </div>

          {/* Box 5 */}
          <div className="bg-white rounded-lg p-6 py-12 flex flex-col items-center text-center hover:bg-gray-200 transition duration-300">
            <QuoteIcon />
            <p className="text-black mt-6">Contact to Buyers and Share your Quote for the service</p>
          </div>

          {/* Box 6 */}
          <div className="bg-blue-100 rounded-lg p-6 py-12 flex flex-col items-center text-center hover:bg-gray-200 transition duration-300">
            <HandshakeIcon />
            <p className="text-black mt-6">Both the Parties can Connect and Make Business Leave a Feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
