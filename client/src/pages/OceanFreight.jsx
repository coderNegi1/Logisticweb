
import React from 'react';
import { Link } from 'react-router-dom';
import OceanFreightImg from '../assets/OceanFreight.avif';




const OceanFreight = () => {
    return (
        <>
            <div className="bg-gray-800 py-20 mb-24" style={{ backgroundImage: `url(${OceanFreightImg})`, backgroundPosition:'bottom' }}>
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl text-white font-bold mb-3">Sea Freight</h1>
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
                        src={OceanFreightImg}
                        alt="Door to Door Delivery Service Cartoon"
                        className="max-w-full h-auto block"
                    />
                </div>

                {/* Right Section - Text Content */}
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                    <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                        SEA FREIGHT
                    </p>

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-5">
                        Reliable and express logistics transport solutions That no your time!
                    </h2>

                    <div className="w-16 h-1 bg-orange-500 mb-6"></div> {/* Divider */}

                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                        We provide very competitive rates on full container load FCL and LCL shipments from all major transit points around the globe. Even if your shipment is of somewhat smaller size, we also offer less than container load departures between all major transit points in the world.

                        With a comprehensive range of FCL & LCL services, we offer consolidation/Deconsolidation and back to back services as and when required. We have built an extensive network of agents that makes us able to provide secure, efficient and timely delivery of Cargo. The vast number of Import/Export range covered by us and the large volumes handled by us enable us to consolidate direct containers from specific locations which in turn enables us to control transit time and cost. We provide efficient Consolidation service to our Customers. The alacrity with which we work shows our ability to handle fragile and sensitive shipments. We have a committed network of integrated air and ground services that enables us to handle from pick up to prompt delivery. The services we offer in Consolidation include
                        We have a special pricing for FCL Booking customers. It is available at highly competitive pricing that is normally associated with implementing this type of facility – covering small and medium scale shippers.
                    </p>

                    {/* Orange Callout */}
                    <div className="flex items-center bg-orange-500 text-white p-4 rounded-md shadow-md mb-6">
                        <span className="text-4xl leading-none mr-4 opacity-80">❝</span>
                        <p className="text-lg font-semibold m-0">
                            Flexible, reliable sea freight solutions for all cargo types and industries.
                        </p>
                    </div>
                    <div className='flex flex-col md:grid md:grid-cols-2 md:gap-8 lg:gap-12 p-4 md:p-8'>

                        <div>
                            {/* Services Offered */}
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Services Offered</h3>
                            <ul className="list-none p-0 m-0 mb-6">
                                <li className="text-gray-700 pl-5 relative mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">FCL Export & Import</li>
                                <li className="text-gray-700 pl-5 relative mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">LCL Export & Import</li>
                                <li className="text-gray-700 pl-5 relative mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">Door to Door Service</li>
                                <li className="text-gray-700 pl-5 relative mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">Oversize Shipments</li>
                                <li className="text-gray-700 pl-5 relative mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">Packing and Crating</li>
                                <li className="text-gray-700 pl-5 relative mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">Restricted Materials</li>
                            </ul>
                        </div>

                        <div>
                            {/* Industry Specific */}
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Industry Specific</h3>
                            <ul className="list-none p-0 m-0">
                                <li className="text-gray-700 pl-5 relative mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">Wine Industry</li>
                                <li className="text-gray-700 pl-5 relative mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">Oil & Gas Industry</li>
                                <li className="text-gray-700 pl-5 relative mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">Perishable Goods</li>
                                <li className="text-gray-700 pl-5 relative mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">Furniture</li>
                                <li className="text-gray-700 pl-5 relative mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">Building Materials</li>
                                <li className="text-gray-700 pl-5 relative mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">Heavy Machinery</li>
                                <li className="text-gray-700 pl-5 relative mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">Garment Industry</li>
                                <li className="text-gray-700 pl-5 relative mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">Consumer Goods</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default OceanFreight;