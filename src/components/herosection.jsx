import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('/background.png')`,
        height: '500px', // Adjusted height
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950 to-transparent opacity-70"></div>
      <div className="relative h-full py-20">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white mb-2">
            Are You a Supplier?
          </h1>
          <h1 className="text-4xl text-white mb-8">Explore Matching Opportunities.</h1>
          <div className="flex justify-center items-center space-x-4 mb-8 flex-wrap">
            <div className="relative flex-1 min-w-0 max-w-xs mb-4 sm:mb-0">
              <input
                type="text"
                placeholder="Search your required service here"
                className="w-full p-3 border border-gray-300 rounded-md text-gray-800 pl-10"
              />
              <FontAwesomeIcon
                icon={faBriefcase}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500"
              />
            </div>
            <div className="relative flex-1 min-w-0 max-w-xs mb-4 sm:mb-0">
              <input
                type="text"
                placeholder="Search your desired location here"
                className="w-full p-3 border border-gray-300 rounded-md text-gray-800 pl-10"
              />
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500"
              />
            </div>
            <button className="w-full sm:w-auto p-3 bg-green-500 text-white rounded-md hover:bg-green-600">
              Search
            </button>
          </div>
          <p className="mt-4 text-white">
            Are you a buyer?{' '}
            <a href="#post-requirements" className="underline">
              Click here if you are looking to post a requirements
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
