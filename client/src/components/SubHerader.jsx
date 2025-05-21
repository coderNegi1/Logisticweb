import React, { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import Logo from '../assets/logo.jpg';
import IndianFlag from '../assets/India.avif';

const SubHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-blue-50 px-3 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center">
            <img src={Logo} alt="akhand vasini logistics" className="h-18  mr-2" />
            <h1 className="text-2xl md:text-3xl uppercase font-bold">
              Akhand Vasini <br /> Logistics
            </h1>
          </div>

          {/* Toggle button visible on small screens */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Contact and Info Section */}
        <div
          className={`flex-col md:flex-row items-center gap-4 mt-4 md:mt-0 ${
            isOpen ? 'flex' : 'hidden'
          } md:flex`}
        >
          <div className="flex items-center text-gray-600">
            <img src={IndianFlag} alt="india" className="h-7 w-10 rounded  mr-2 object-cover " />
            <span className="text-gray-600 text-shadow-lg text-lg">India</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Phone className="h-4 w-4 mr-1" />
            <span className="text-lg">+91&nbsp;&nbsp;9015210007</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Mail className="h-4 w-4 mr-1" />
            <span className="text-lg">kk@akhandvasini.in</span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SubHeader;
