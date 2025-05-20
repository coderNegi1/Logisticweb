import React from 'react';

const features = [
  {
    title: 'SAFE & SECURE DELIVERY',
    icon: '🛡️',
    description: 'Express delivery innovative service delivery',
  },
  {
    title: 'COST SAVINGS',
    icon: '💰',
    description: 'Express delivery innovative service delivery',
  },
  {
    title: 'TRANSPORT OPTIMIZATION',
    icon: '🚚',
    description: 'Express delivery innovative service delivery',
  },
  {
    title: 'PROVEN EXPERIENCE',
    icon: '📜',
    description: 'Express delivery innovative service delivery',
  },
  {
    title: '24/7 HOURS SUPPORT',
    icon: '🕒',
    description: 'Express delivery innovative service delivery',
  },
  {
    title: 'EASY PAYMENT METHODS',
    icon: '💳',
    description: 'Express delivery innovative service delivery',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Why Choose Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4 text-blue-600">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}