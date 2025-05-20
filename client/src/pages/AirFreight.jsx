
import React from 'react';
import { Link } from 'react-router-dom';
import Bg3 from '../assets/bg-1.jpg';
import AirFreightImg from '../assets/AirFreight.avif';


const AirFreight = () => {
    return (
        <>
            <div className="bg-gray-800 py-20 mb-24" style={{ backgroundImage: `url(${Bg3})` }}>
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl text-white font-bold mb-3">Air Freight Forwarders in Delhi</h1>
                    <nav className="text-white text-sm">
                        <ol className="list-reset flex space-x-2">
                            <li>
                                <Link to="/" className="text-white hover:underline">Home</Link>
                            </li>
                            <li>/</li>
                            <li className="text-white font-semibold">Air Freight</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-10 shadow-lg rounded-lg overflow-hidden bg-white">

                {/* Left Section - Image */}
                <div className="md:w-1/2 p-5 bg-gray-50 flex items-center justify-center">
                    <img
                        src={AirFreightImg}
                        alt="Door to Door Delivery Service Cartoon"
                        className="max-w-full h-auto block"
                    />
                </div>

                {/* Right Section - Text Content */}
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                    <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                        AIR FREIGHT FORWARDERS
                    </p>

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-5">
                        Reliable and express logistics transport solutions That no your time!
                    </h2>

                    <div className="w-16 h-1 bg-orange-500 mb-6"></div> {/* Divider */}

                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                        We  provide an air cargo cost-effective alternative for the commercial air shipping community for domestic as well as international consignments. We maintain a network of agents worldwide for an efficient pickup and delivery operation, 365 days a year.
                        Our service depends on customer needs which expands from Same Day Service, Next Day, Second Day, Economy and International: hazardous material certified. Our all-points international air hubs are connected with other regional hubs located in strategic cities around the world. Our professionally trained representatives can provide rates, shipment forwarding and logistical support, as well as, delivery information regarding the ultimate destination city. Our centralized booking service offers direct routings, plus alternative and bypass flights.
                    </p>

                    {/* Orange Callout */}
                    <div className="flex items-center bg-orange-500 text-white p-4 rounded-md shadow-md mb-6">
                        <span className="text-4xl leading-none mr-4 opacity-80">❝</span>
                        <p className="text-lg font-semibold m-0">
                            We are experts in end-to-end air logistics solutions globally.
                        </p>
                    </div>

                    {/* Services List */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Services Offered</h3>
                    <ul className="list-none p-0 m-0">
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Air Export & Import
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Scheduled Consolidations
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Oversize Shipments
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Charters
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Packing and Crating
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Express
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Restricted Materials
                        </li>
                    </ul>
                </div>

            </div>
        </>
    );
};

export default AirFreight;