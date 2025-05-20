import React from 'react';
import { Phone, Mail, Facebook, Linkedin } from 'lucide-react'; // For icons
import Logo from '../assets/logo.jpg'
import IndianFlag from '../assets/India.avif'



const SubHeader = () => {
    return (
        <div className="bg-blue-50 px-3 py-5">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
                {/* Logo Section */}
                <div className="flex items-center ">
                   <div> <img src={Logo} alt="akahand vasanlogistics" className='h-18' /></div>
                    <h1 className='text-3xl uppercase font-bold'>Akhand Vasini  <br />Logistics</h1>
                </div>
                <div>


                </div>

                {/* Contact and Social Section */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <img src={IndianFlag} alt="india" className='h-8 rounded w-10' />
                    <span className="text-gray-600 text-shadow-lg text-lg">India</span>
                    <div className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 mr-1" />
                        <span className='text-lg'>+91&nbsp;&nbsp;9015210007</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <Mail className="h-4 w-4 mr-1" />
                        <span className='text-lg'>kk@akhandvasini.in</span>
                    </div>
                  


                </div>
                <div></div>
            </div>
        </div>
    );
};

export default SubHeader;