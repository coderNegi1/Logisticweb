
import React from 'react';
import { Link } from 'react-router-dom';
import Bg3 from '../assets/bg-1.jpg';
import RailFreightImg from '../assets/RailFreight.avif';



const RailFreight = () => {
    return (
        <>
            <div className="bg-gray-800 py-20 mb-24" style={{ backgroundImage: `url(${Bg3})` }}>
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl text-white font-bold mb-3">Cargo Insurance </h1>
                    <nav className="text-white text-sm">
                        <ol className="list-reset flex space-x-2">
                            <li>
                                <Link to="/" className="text-white hover:underline">Home</Link>
                            </li>
                            <li>/</li>
                            <li className="text-white font-semibold">Cargo Insurance</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-10 shadow-lg rounded-lg overflow-hidden bg-white">

                {/* Left Section - Image */}
                <div className="md:w-1/2 p-5 bg-gray-50 flex items-center justify-center">
                    <img
                        src={RailFreightImg}
                        alt="Door to Door Delivery Service Cartoon"
                        className="max-w-full h-auto block"
                    />
                </div>

                {/* Right Section - Text Content */}
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                    <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                        Cargo Insurance
                    </p>

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-5">
                         Reliable and Comprehensive Cargo Insurance Solutions for Your Peace of Mind!
                    </h2>

                    <div className="w-16 h-1 bg-orange-500 mb-6"></div>



                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                        We also facilitate cargo insurance to our customers. There are Three Basic Policies (in the Old Cargo Clauses) Our Cargo Insurance services are rated amongst the best in the industry for we take care of your cargo's Insurance right from the port of discharge to the port of destination, covering aspects of natural calamities, Fire, theft, pilferage etc. In case of short landing or damages / pilferages detected after landing inside port area, we arrange survey of damages occurred and assist our customers to file a claim with the insurance company, besides claiming duty remission, wherever applicable.
                        Similarly, if any damages or pilferages take place after customs clearance, on route in transit, from port to final destination, we will arrange for a survey at the unloading point and seek compensation from the insurance company for the loss suffered.
                        All the survey and the claim formalities will be completed simultaneously so that either the declaration and clearance of cargo at port or consumption of the cargo after delivery does not suffer any abnormal delay.
                    </p>

                    {/* Callout */}
                    <div className="flex items-center bg-orange-500 text-white p-4 rounded-md shadow-md mb-6">
                        <span className="text-4xl leading-none mr-4 opacity-80">❝</span>
                        <p className="text-lg font-semibold m-0">
                            Reduce costs and increase reliability with our strategic Cargo Insurance solutions.
                        </p>
                    </div>

                    {/* Services List */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Services</h3>
                    <ul className="list-none p-0 m-0">
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Containerized Cargo Insurance (FCL & LCL)
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Door-to-door pickup and delivery service
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Coordination with railway authorities for seamless dispatch
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Special wagons for over-dimensional and heavy cargo
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Real-time tracking and status updates
                        </li>
                        <li className="text-gray-700 text-base leading-relaxed relative pl-5 mb-2 before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                            Reliable schedules with fixed departure and arrival times
                        </li>
                    </ul>
                </div>


            </div>
        </>
    );
};

export default RailFreight;