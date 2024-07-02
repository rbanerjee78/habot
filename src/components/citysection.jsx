import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CitySection = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 my-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to dive into HABOT?</h2>
          <p className="text-gray-700 mb-4">
            Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button className="bg-green-700 text-white py-3 px-6 rounded-md flex items-center hover:bg-green-600 focus:outline-none">
            Sign up Today!
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-4 items-center justify-center">
          {/* City Elements */}
          <div className="border-2 border-orange-500 p-4 rounded-lg text-center hover:bg-orange-500 hover:text-white transition-all duration-300">
            <p className="text-lg font-semibold text-gray-800 hover:text-white">Abu Dhabi</p>
          </div>
          <div className="border-2 border-orange-500 p-4 rounded-lg text-center hover:bg-orange-500 hover:text-white transition-all duration-300">
            <p className="text-lg font-semibold text-gray-800 hover:text-white">Dubai</p>
          </div>
          <div className="border-2 border-orange-500 p-4 rounded-lg text-center hover:bg-orange-500 hover:text-white transition-all duration-300">
            <p className="text-lg font-semibold text-gray-800 hover:text-white">Sharjah & Ajman</p>
          </div>
          <div className="border-2 border-orange-500 p-4 rounded-lg text-center hover:bg-orange-500 hover:text-white transition-all duration-300">
            <p className="text-lg font-semibold text-gray-800 hover:text-white">Fujairah</p>
          </div>
          <div className="border-2 border-orange-500 p-4 rounded-lg text-center hover:bg-orange-500 hover:text-white transition-all duration-300">
            <p className="text-lg font-semibold text-gray-800 hover:text-white">Ras Al Khaimah</p>
          </div>
          <div className="border-2 border-orange-500 p-4 rounded-lg text-center hover:bg-orange-500 hover:text-white transition-all duration-300">
            <p className="text-lg font-semibold text-gray-800 hover:text-white">Umm Al Quwain</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitySection;
