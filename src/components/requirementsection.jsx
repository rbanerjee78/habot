import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const RequirementsSection = () => {
  const [activeTab, setActiveTab] = useState('buyer');

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 my-16 px-4 sm:px-6 lg:px-8 bg-custom-blue">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Video Thumbnail */}
        <div className="p-6 rounded-lg ">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            {/* Replace 'VIDEO_ID' with your YouTube video ID */}
            <iframe
              className="w-full h-80 rounded-lg"
              src={`https://www.youtube.com/embed/VIDEO_ID`}
              title="YouTube Video"
              allowFullScreen
            />
          </div>
        </div>

        {/* Right Section: Tabbed Content */}
        <div className="p-6 rounded-lg ">
          <div className="flex justify-between mb-4">
            <button
              className={`text-lg font-semibold text-slate-50 ${
                activeTab === 'buyer'
                  ? 'border-b-2 border-orange-500'
                  : 'border-b-2 border-transparent hover:border-orange-500'
              } focus:outline-none`}
              onClick={() => toggleTab('buyer')}
            >
              Buyer
            </button>
            <button
              className={`text-lg font-semibold text-slate-50 ${
                activeTab === 'supplier'
                  ? 'border-b-2 border-orange-500'
                  : 'border-b-2 border-transparent hover:border-orange-500'
              } focus:outline-none`}
              onClick={() => toggleTab('supplier')}
            >
              Supplier
            </button>
          </div>
          {/* Buyer Content */}
          <div className={activeTab === 'buyer' ? 'buyer-content' : 'buyer-content hidden'}>
            <ul className="list-disc list-inside text-white">
              <li className="text-white mb-2 flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                Post your requirements.
              </li>
              <li className="text-white mb-2 flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                Sit back for multiple suppliers to contact you.
              </li>
              <li className="text-white mb-2 flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                Choose among the suppliers based on the ratings and reviews.
              </li>
            </ul>
          </div>
          {/* Supplier Content */}
          <div className={activeTab === 'supplier' ? 'supplier-content' : 'supplier-content hidden'}>
            <ul className="list-disc list-inside text-white">
              <li className="text-white mb-2 flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                Post your requirements.
              </li>
              <li className="text-white mb-2 flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                Sit back for multiple suppliers to contact you.
              </li>
              <li className="text-white mb-2 flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                Choose among the suppliers based on the ratings and reviews.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementsSection;
