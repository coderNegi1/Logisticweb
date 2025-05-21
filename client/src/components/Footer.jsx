import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 mt-24 ">
      <div className="container mx-auto px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
          {/* Address */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Address</h4>
            <p className="mb-2 flex items-center"><FaMapMarkerAlt className="mr-2" />A-35/4, Flat No.303 , Street No.11
              Raj Nagar-2, Palam Colony, New Delhi-110077</p>
            <p className="mb-2 flex items-center"><FaPhoneAlt className="mr-2" />9015210007</p>
            <p className="mb-2 flex items-center"><FaEnvelope className="mr-2" />kk@akhandvasini.in</p>
            <div className="flex gap-3 pt-4">
              <Link to="#" className="text-white border border-gray-500 rounded-full p-2 hover:bg-primary"><FaTwitter /></Link>
              <Link to="#" className="text-white border border-gray-500 rounded-full p-2 hover:bg-primary"><FaFacebookF /></Link>
              <Link to="#" className="text-white border border-gray-500 rounded-full p-2 hover:bg-primary"><FaYoutube /></Link>
              <Link to="#" className="text-white border border-gray-500 rounded-full p-2 hover:bg-primary"><FaLinkedinIn /></Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/air-freight" className="hover:underline">Air Freight</Link></li>
              <li><Link to="/services/ocean-freight" className="hover:underline">Sea Freight</Link></li>
              <li><Link to="/services/transportation-freight" className="hover:underline">Road And Rail Transport</Link></li>
              <li><Link to="/services/warehouse-solutions" className="hover:underline">Warehouse Solutions</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/services" className="hover:underline">Our Services</Link></li>

            </ul>
          </div>


        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 py-4 text-center text-sm text-gray-400">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            &copy; {currentYear} <Link to="/" className="underline hover:text-white">Akhand Vasini Logistics</Link>, All Rights Reserved.
          </div>
          <div>
            Designed By <a href="https://github.com/coderNegi1" target="_blank" className="text-blue-500 hover:underline">PrashantNegi</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
