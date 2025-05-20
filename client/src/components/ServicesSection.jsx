import React from 'react';

// Import images from the assets folder
import service1 from '../assets/service-1.avif';
import service2 from '../assets/service-2.avif';
import service3 from '../assets/service-3.avif';
import service4 from '../assets/service-4.avif';
import service5 from '../assets/service-5.avif';
import service6 from '../assets/service-6.avif';

// Services data
const services = [
  { id: 1, title: 'Air Freight', img: service1 },
  { id: 2, title: 'Ocean Freight', img: service2 },
  { id: 3, title: 'Road Freight', img: service3 },
  { id: 4, title: 'Train Freight', img: service4 },
  { id: 5, title: 'Customs Clearance', img: service5 },
  { id: 6, title: 'Warehouse Solutions', img: service6 },
];

// Services Section Component
const ServicesSection = () => {
  return (
    <div className="py-16 bg-white lg:p-5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h6 className=" mb-3 text-blue-300 uppercase font-medium">Our Services</h6>
          <h1 className="text-5xl font-bold">Explore Our Services</h1>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white  shadow hover:shadow-lg transition rounded"
            >
              <div className="overflow-hidden mb-4 ">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-52 object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
              <div className='p-4'>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600 mb-4">
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <i className="fas fa-arrow-right"></i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ✅ Correctly export the component
export default ServicesSection;
