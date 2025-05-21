
import React from 'react';
import { Link } from 'react-router-dom';
import WarehouseSolutionsImg from '../assets/WarehouseSolutions.avif';




const WarehouseSolutions = () => {
    return (
        <>
            <div className="bg-gray-800 py-20 mb-24" style={{ backgroundImage: `url(${WarehouseSolutionsImg})`,backgroundPosition:'bottom' }}>
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl text-white font-bold mb-3">Warehouse & Distribution Service</h1>
                    <nav className="text-white text-sm">
                        <ol className="list-reset flex space-x-2">
                            <li>
                                <Link to="/" className="text-white hover:underline">Home</Link>
                            </li>
                            <li>/</li>
                            <li className="text-white font-semibold">Sea Freight</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-10 shadow-lg rounded-lg overflow-hidden bg-white">

                {/* Left Section - Image */}
                <div className="md:w-1/2 p-5 bg-gray-50 flex items-center justify-center">
                    <img
                        src={WarehouseSolutionsImg}
                        alt="Door to Door Delivery Service Cartoon"
                        className="max-w-full h-auto block"
                    />
                </div>

                {/* Right Section - Text Content */}
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                    <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                        WAREHOUSE & DISTRIBUTION
                    </p>

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-5">
                        Reliable and Express Warehouse & Distribution Solutions That Know Your Time!
                    </h2>

                    <div className="w-16 h-1 bg-orange-500 mb-6"></div>



                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                        Our warehousing solutions provide secure, organized, and scalable storage for your goods — whether short-term or long-term. Strategically located and fully equipped, our facilities ensure safe handling, real-time inventory management, and smooth distribution. From cross-docking and packaging to order fulfillment and last-mile coordination, we offer end-to-end support tailored to your supply chain needs. Backed by advanced systems and a dedicated logistics team, we help you optimize space, reduce costs, and deliver with confidence.
                    </p>

                    {/* Orange Callout */}
                    <div className="flex items-center bg-orange-500 text-white p-4 rounded-md shadow-md mb-6">
                        <span className="text-4xl leading-none mr-4 opacity-80">❝</span>
                        <p className="text-lg font-semibold m-0">
                            End-to-end warehouse management solutions tailored to your industry needs.
                        </p>
                    </div>

                    {/* Features List */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h3>
                    <ul className="list-none p-0 m-0">
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Warehouse Management System (WMS)
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Custom bonded warehouse services across metro cities
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Trained manpower and equipment for container stuffing and de-stuffing
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Cold storage options for perishable goods
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Real-time inventory tracking and management
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Reliable and efficient domestic distribution network across India
                        </li>
                    </ul>
                </div>


            </div>
        </>
    );
};

export default WarehouseSolutions;