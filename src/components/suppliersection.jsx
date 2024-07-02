import React from 'react';

const SupplierSection = () => {
  return (
    <div className="bg-blue-100 py-12  my-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Let Suppliers Find You */}
          <div className="p-6 rounded-lg ">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 relative">
              Let Suppliers <span className="relative">
                <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></span>
                Find You
              </span>
            </h2>
            <p className="text-gray-700 mb-4">
              Showcase your business to suppliers looking for your products or services. Increase
              your visibility and connect with potential partners globally.
            </p>
          </div>

          {/* Right Section: Get Verified CTA */}
          <div className="p-6 rounded-lg  flex items-center justify-center">
            <button className="bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 focus:outline-none">
              Get Verified
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierSection;
