
import React from 'react';
import { Link } from 'react-router-dom';
import Bg3 from '../assets/bg-1.jpg';
import TransportationFreightImg from '../assets/TransportationFreight.avif';




const TransportationFreight = () => {
    return (
        <>
            <div className="bg-gray-800 py-20 mb-24" style={{ backgroundImage: `url(${Bg3})` }}>
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl text-white font-bold mb-3"> Transportation Freight Forwarders in Delhi</h1>
                    <nav className="text-white text-sm">
                        <ol className="list-reset flex space-x-2">
                            <li>
                                <Link to="/" className="text-white hover:underline">Home</Link>
                            </li>
                            <li>/</li>
                            <li className="text-white font-semibold ">Transportation Freight</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-10 shadow-lg rounded-lg overflow-hidden bg-white">

                {/* Left Section - Image */}
                <div className="md:w-1/2 p-5 bg-gray-50 flex items-center justify-center">
                    <img
                        src={TransportationFreightImg}
                        alt="Door to Door Delivery Service Cartoon"
                        className="max-w-full h-auto block"
                    />
                </div>

                {/* Right Section - Text Content */}
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                    <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                        TRANSPORTATION FREIGHT
                    </p>

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-5">
                        Reliable and Express Transportation Freight Solutions That Know Your Time!
                    </h2>

                    <div className="w-16 h-1 bg-orange-500 mb-6"></div>

                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                        Our transportation freight services are designed to meet the evolving needs of logistics across India and globally. Whether you need full truckload (FTL), less-than-truckload (LTL), or specialized equipment, our fleet and partners ensure fast, safe, and cost-effective movement of your cargo.
                    </p>

                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                        We provide a single point of contact for seamless end-to-end movement, offering flexibility in routing, real-time tracking, and adherence to tight schedules — all while maintaining safety and compliance standards.
                    </p>

                    {/* Callout Box */}
                    <div className="flex items-center bg-orange-500 text-white p-4 rounded-md shadow-md mb-6">
                        <span className="text-4xl leading-none mr-4 opacity-80">❝</span>
                        <p className="text-lg font-semibold m-0">
                            Customized road transport solutions that move your cargo efficiently and reliably.
                        </p>
                    </div>

                    {/* Services List */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Services</h3>
                    <ul className="list-none p-0 m-0">
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Full Truckload (FTL) and Less-than-Truckload (LTL) services
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Intercity, intracity, and cross-border transport solutions
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Temperature-controlled and sensitive cargo handling
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Last-mile delivery and distribution logistics
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Real-time GPS tracking and route optimization
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Dedicated fleet with trained drivers and 24/7 support
                        </li>
                    </ul>
                </div>


            </div>
        </>
    );
};

export default TransportationFreight;