import React from 'react';
import InquiryForm from '../components/ContactForm';
import { Phone } from 'lucide-react';

const Quote = () => {
  return (
    <div className="py-16 bg-white lg:p-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Column */}
          <div className="lg:w-5/12">
            <h6 className=" mb-3 text-blue-400 uppercase font-bold">Get A Quote</h6>
            <h1 className="text-5xl md:text-4xl font-bold mb-6">Request A Free Quote!</h1>
            <p className="text-gray-600 mb-6">
              Get fast, accurate, and competitive pricing for your shipping needs. Just share a few details about your cargo, and our team will get back to you with a personalized quote — no obligations, no hidden fees.
            </p>
            <div className="flex items-center">
             
              <div className="bg-green-400 rounded-full text-white p-3">
                <Phone className="h-8 w-8  " />
              </div>
              <div className="ml-4">
                <h6 className="text-gray-700 text-lg">Call for any query!</h6>
                <h3 className="text-primary font-bold text-2xl">+91 &nbsp;9015210007</h3>
              </div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="lg:w-7/12 bg-gray-100 p-8  ">
           <InquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
