import React from 'react';
import { Link } from 'react-router-dom';

// Import images from the assets folder
import service1 from '../assets/ocan.avif';
import service2 from '../assets/cargoincurance.avif';
import service3 from '../assets/rainnadt.avif';
import service4 from '../assets/werehouse.avif';
import service5 from '../assets/courier.avif';
import service6 from '../assets/Air.avif';
import service7 from '../assets/customsClearance.avif';


// Services data with individual descriptions
const services = [
  { 
    id: 1, 
    title: 'Air Freight', 
    img: service6, 
    link: '/services/air-freight', 
    description: 'Global air freight solutions for urgent cargo.' 
  },
  { 
    id: 2, 
    title: 'Ocean Freight', 
    img: service1, 
    link: '/services/ocean-freight', 
    description: 'Moving your freight smoothly across the seas.' 
  },
  { 
    id: 7, 
    title: 'Courier Service', 
    img: service5, 
    link: '/services/courier-service', 
    description: 'From pickup to delivery — swift and seamless.' 
  },
  { 
    id: 3, 
    title: 'Road And Rail Transport', 
    img: service3, 
    link: '/services/transportation-freight', 
    description: 'Integrated transport solutions combining road and rail.' 
  },
  { 
    id: 4, 
    title: 'Cargo Insurance', 
    img: service2, 
    link: '/services/rail-freight', 
    description: 'Protecting your shipment every step of the way.' 
  },
  { 
    id: 5, 
    title: 'Customs Clearance', 
    img: service7, 
    link: '/services/customs-clearance', 
    description: 'Expert handling of all import/export documentation.' 
  },
  { 
    id: 6, 
    title: 'Warehouse Solutions', 
    img: service4, 
    link: '/services/warehouse-solutions', 
    description: 'Where your goods stay safe and ready to move.' 
  },
];

// Services Section Component
const ServicesSection = () => {
  return (
    <div className="py-16 bg-white lg:p-5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h6 className="mb-3 text-blue-300 uppercase font-medium">Our Services</h6>
          <h1 className="text-5xl font-bold">Explore Our Services</h1>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow hover:shadow-lg transition rounded"
            >
              <div className="overflow-hidden mb-4">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-52 object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
              <div className='p-4'>
                <h4 className="text-xl font-semibold mb-2 uppercase">{service.title}</h4>
                
                {/* Unique description for each service */}
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <i className="fas fa-arrow-right"></i>
                  <span>Read More</span>
                </Link>
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
