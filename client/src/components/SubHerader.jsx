import React from 'react';
import { Phone, Mail, Facebook, Linkedin } from 'lucide-react'; // For icons
import Logo from '../assets/logo.jpg'
import IndianFlag from '../assets/India.avif'



const SubHeader = () => {
    return (
        <div className="bg-gray-100 px-3">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
                {/* Logo Section */}
                <div className="flex items-center ">
                    <img src={Logo} alt="akahand vasanlogistics" />
                <div><h1 className='text-2xl uppercase font-bold'>Akhand Vasini Logistics</h1></div>

                </div>

                {/* Contact and Social Section */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 mr-1" />
                        <span>+91 9015210007</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <Mail className="h-4 w-4 mr-1" />
                        <span>kk@akhandvasini.in</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            <Facebook className="h-4 w-4" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-700">
                            <Linkedin className="h-4 w-4" />
                        </a>
                    </div>
                    <img src={IndianFlag} alt="india" className='h-8 rounded w-10' />
                    <span className="text-gray-600">India</span>

                </div>
                <div></div>
            </div>
        </div>
    );
};

export default SubHeader;