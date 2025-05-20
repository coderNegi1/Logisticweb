
import React from 'react';
import { Link } from 'react-router-dom';
import Bg3 from '../assets/bg-1.jpg';
import CustomsClearanceImg from '../assets/CustomsClearance.avif';



const CustomsClearance = () => {
    return (
        <>
            <div className="bg-gray-800 py-20 mb-24" style={{ backgroundImage: `url(${Bg3})` }}>
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl text-white font-bold mb-3">Custom Clearance Agent in Delhi</h1>
                    <nav className="text-white text-sm">
                        <ol className="list-reset flex space-x-2">
                            <li>
                                <Link to="/" className="text-white hover:underline">Home</Link>
                            </li>
                            <li>/</li>
                            <li className="text-white font-semibold">Custom Clearance</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-10 shadow-lg rounded-lg overflow-hidden bg-white">

                {/* Left Section - Image */}
                <div className="md:w-1/2 p-5 bg-gray-50 flex items-center justify-center">
                    <img
                        src={CustomsClearanceImg}
                        alt="Door to Door Delivery Service Cartoon"
                        className="max-w-full h-auto block"
                    />
                </div>

                {/* Right Section - Text Content */}
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                    <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                        CUSTOMS CLEARANCE
                    </p>

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-5">
                        Efficient Customs Clearance Services for Seamless Trade
                    </h2>

                    <div className="w-16 h-1 bg-orange-500 mb-6"></div>
                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                      "Our customs clearance services are designed to simplify international trade and eliminate delays at borders. With in-depth knowledge of global import and export regulations, our team ensures your shipments comply with all legal requirements. From documentation preparation to duties, tariffs, and inspections, we handle every detail with precision and efficiency. Whether by air, sea, or land, we work closely with customs authorities to ensure smooth, fast, and hassle-free clearance — so your cargo moves without interruption
                    </p>

                    {/* Callout Box */}
                    <div className="flex items-center bg-orange-500 text-white p-4 rounded-md shadow-md mb-6">
                        <span className="text-4xl leading-none mr-4 opacity-80">❝</span>
                        <p className="text-lg font-semibold m-0">
                            Expert handling of all customs formalities, from regulatory compliance to complex scheme-based clearances.
                        </p>
                    </div>

                    {/* Core Services */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Services</h3>
                    <ul className="list-none p-0 m-0 mb-6">
                        <li className="text-gray-700 pl-5 relative mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Liaison with all regulatory bodies and councils for all types of cargo.
                        </li>
                        <li className="text-gray-700 pl-5 relative mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Coordination with warehouses, statutory authorities, shipping lines, and airlines.
                        </li>
                        <li className="text-gray-700 pl-5 relative mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Speedy transaction of customs formalities and certificate procurement.
                        </li>
                        <li className="text-gray-700 pl-5 relative mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Stuffing & de-stuffing at ports, ICDs, and warehouses.
                        </li>
                    </ul>

                    {/* Clearance Types */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Types of Clearance We Handle</h3>
                    <ul className="columns-2 gap-10 text-sm list-none mb-6">
                        {[
                            "Export Clearance For EOU / EPZ / STP / EHTP",
                            "Duty Free Shipping Bill",
                            "DEEC / DEPB / DFRC / EPCG Clearances",
                            "Project Import & Dutiable Goods",
                            "Goods For Warehousing & De-bonding",
                            "Clearance Under Fast Track / Green Channel",
                            "Second Hand Machinery (All Schemes)",
                            "Complete Documentation and Freight Handling"
                        ].map((item, idx) => (
                            <li key={idx} className="pl-5 relative mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>


            </div>
        </>
    );
};

export default CustomsClearance;