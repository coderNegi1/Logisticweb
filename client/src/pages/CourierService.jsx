
import React from 'react';
import { Link } from 'react-router-dom';
import CourierServiceImg from '../assets/CourierService.avif';




const CourierService = () => {
    return (
       <>
        <div className="bg-gray-800 py-20 mb-24" style={{ backgroundImage: `url(${CourierServiceImg})`,backgroundPosition:'center' }}>
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl text-white font-bold mb-3">Courier Service</h1>
                    <nav className="text-white text-sm">
                        <ol className="list-reset flex space-x-2">
                            <li>
                                <Link to="/" className="text-white hover:underline">Home</Link>
                            </li>
                            <li>/</li>
                            <li className="text-white font-semibold">Courier Service</li>
                        </ol>
                    </nav>
                </div>
            </div>
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-10 shadow-lg rounded-lg overflow-hidden bg-white">
            
            {/* Left Section - Image */}
            <div className="md:w-1/2 p-5 bg-gray-50 flex items-center justify-center">
                <img
                    src={CourierServiceImg}
                    alt="Door to Door Delivery Service Cartoon"
                    className="max-w-full h-auto block"
                />
            </div>

            {/* Right Section - Text Content */}
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">COURIER DELIVERY SERVICE</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-5">
                    Reliable and express logistics transport solutions That no your time!
                </h2>
                <div className="w-16 h-1 bg-orange-500 mb-6"></div> {/* Simple horizontal divider */}

                <p className="text-gray-700 text-base leading-relaxed mb-6">
                   Our courier services are designed to deliver speed, reliability, and peace of mind. Whether it’s urgent documents, valuable parcels, or time-sensitive deliveries, we ensure your shipments reach their destination safely and on time. With a strong local and international network, real-time tracking, and dedicated customer support, we offer seamless door-to-door solutions tailored to your needs. From same-day delivery to scheduled pickups, we make courier logistics simple, secure, and efficient — every step of the way.
                </p>

                {/* Orange Callout */}
                <div className="flex items-center bg-orange-500 text-white p-4 rounded-md shadow-md mb-6">
                    <span className="text-4xl leading-none mr-4 opacity-80">❝</span>
                    <p className="text-lg font-semibold m-0">We are handling exhibition material worldwide, too</p>
                </div>

                {/* Services List */}
                <ul className="list-none p-0 m-0">
                    <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">INTERNATIONAL COURIER SERVICES VIA DHL, FEDEX, UPS, TNT, ARAMEX, DPEX, DPD & SELF SERVICES</li>
                    <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">IMPORT AND EXPORT BOTH WAYS</li>
                    <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">URGENT SAMPLES</li>
                    <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">PERSONAL EFFECTS, BAGGAGE SERVICE ALL OVER WORLD</li>
                    <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">We deliver shipment of size and type.</li>
                    <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">Our service area includes to door and door to door service from shipper consignee.</li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default CourierService;