import React from 'react';
import globe from '../assets/globe.png'; 

import deliveryImage from '../assets/delivery.avif'; 
import deliveryTruck from '../assets/delivery-truck.png'; 



const AboutSection = () => {
  return (
    <div className="container-fluid overflow-hidden py-5 px-4">
      <div className="container about py-5 px-0">
        <div className="lg:flex lg:gap-10 mx-0">
          {/* Image Section */}
          <div className="lg:w-1/2 relative h-[400px] lg:h-[auto] overflow-hidden wow fadeInLeft" data-wow-delay="0.1s">
            <div className="absolute inset-0">
              <img
                src={deliveryImage}
                alt="About Us"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 px-4 py-5 wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="  mb-3 text-blue-300 uppercase font-medium">About Us</h6>
           
            <p className="my-10">
             AKHAND VASINI LOGITSICS  (AV) is a glooming organization dealing in International Freight forwarding, LCL cargo consolidation including IMPORT and EXPORT, custom house broking, insurance services, packing and moving services, port handling, project movement , inventory management and other logistical solutions. We provide customized deals to our clients keeping in the frame the time, cost and services at the acme of priorities. We owe a team of dynamic professionals with a strong background in the logistics industry having experience of more than 07 years
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  mb-10">
              {/* Global Coverage */}
              <div className="flex flex-col items-center wow fadeIn" data-wow-delay="0.5s">
                <i className="fas fa-globe fa-3x text-primary mb-3 w-10"><img src={globe} alt="" /></i>
                <h5 className=' text-2xl'>Global Coverage</h5>
                <p className="m-0 text-justify">
                  Your cargo, Any destination, No limits, Wherever your business goes — we’re already there. 
                </p>
              </div>

              {/* On Time Delivery */}
              <div className="flex flex-col items-center wow fadeIn" data-wow-delay="0.7s">
                <i className="fas fa-shipping-fast fa-3x text-primary mb-3 w-10 o">
                  <img src={deliveryTruck} alt="" />
                </i>
                <h5 className='text-2xl'>On Time Delivery</h5>
                <p className="m-0 text-justify">
                  Your time matters — we deliver on it, Committed to delivering without delays.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
