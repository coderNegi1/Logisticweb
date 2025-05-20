import React from 'react';
import featureImg from '../assets/feature.avif'; // Make sure this image exists

const features = [
  {
    icon: 'fa-globe',
    title: 'Worldwide Service',
    description:
      'Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet',
  },
  {
    icon: 'fa-shipping-fast',
    title: 'On Time Delivery',
    description:
      'Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet',
  },
  {
    icon: 'fa-headphones',
    title: '24/7 Telephone Support',
    description:
      'Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet',
  },
];

const Feature = () => {
  return (
    <div className="overflow-hidden lg:ps-5 py-16 px-4 lg:px-0 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Section */}
          <div className="lg:w-1/2">
            <h6 className=" mb-3 text-blue-400 uppercase font-bold">Our Features</h6>
            <h1 className="text-5xl md:text-4xl font-bold mb-8">
              We Are Trusted Logistics Company Since 1990
            </h1>

            {features.map((item, i) => (
              <div key={i} className="flex mb-6">
                <i className={`fa ${item.icon} text-primary text-3xl flex-shrink-0`}></i>
                <div className="ml-4">
                  <h5 className="text-2xl font-semibold mb-2">{item.title}</h5>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section (Image) */}
          <div className="lg:w-1/2 min-h-[400px] relative">
            <img
              src={featureImg}
              alt="Feature"
              className="absolute w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
