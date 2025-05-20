import React from 'react';
import delivery from '../assets/delivery.avif'; 


const AboutSection = () => {
  return (
    <div className="container-fluid overflow-hidden py-5 px-4">
      <div className="container about py-5 px-0">
        <div className="lg:flex lg:gap-10 mx-0">
          {/* Image Section */}
          <div className="lg:w-1/2 relative h-[400px] lg:h-[auto] overflow-hidden wow fadeInLeft" data-wow-delay="0.1s">
            <div className="absolute inset-0">
              <img
                src={delivery}
                alt="About Us"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 px-4 py-5 wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="  mb-3 text-blue-300 uppercase font-medium">About Us</h6>
            <h1 className="mb-5 text-5xl   font-bold">Quick Transport and Logistics Solutions</h1>
            <p className="my-10">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
              diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
              magna dolore erat amet.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  mb-10">
              {/* Global Coverage */}
              <div className="flex flex-col items-center wow fadeIn" data-wow-delay="0.5s">
                <i className="fas fa-globe fa-3x text-primary mb-3">O</i>
                <h5 className=' text-2xl'>Global Coverage</h5>
                <p className="m-0">
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.
                </p>
              </div>

              {/* On Time Delivery */}
              <div className="flex flex-col items-center wow fadeIn" data-wow-delay="0.7s">
                <i className="fas fa-shipping-fast fa-3x text-primary mb-3">H</i>
                <h5 className='text-2xl'>On Time Delivery</h5>
                <p className="m-0">
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.
                </p>
              </div>
            </div>

            <a href="#" className="bg-primary hover:bg-primary-dull py-4 px-9 text-white">Explore More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
