import React from 'react';

const stats = [
  { number: '100+', label: 'Happy Clients' },
  { number: '3500+', label: 'Complete Shipments' },
  { number: '9.6', label: 'Customer Reviews' },
];

const Facts = () => {
  return (
    <div className="py-16 bg-dark lg:p-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-6">
            <h6 className=" mb-3 text-blue-400 uppercase font-bold">Some Facts</h6>
            <h1 className="text-4xl font-bold">#1 Place To Manage All Of Your Shipments</h1>
            <h2 className='text-xl italic font-bold'>Worldwide Service</h2>
            <h2 className='text-xl italic font-bold'>On Time Delivery</h2>
            <h2 className='text-xl italic font-bold'>24/7 Telephone Support</h2>

          </div>

          {/* Right Column - Stats */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                      {stat.number}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                      {stat.label}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Facts;
