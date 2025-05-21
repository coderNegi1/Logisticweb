import React from 'react'
import { Link } from 'react-router-dom'
import ServicesSection from '../components/ServicesSection'
import service7 from '../assets/werehouse.avif';


function Services() {
    return (

      <>
        <div className="bg-gray-800 py-20 mb-24"  style={{ backgroundImage: `url(${service7})` }}>
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl text-white font-bold mb-3">Our Services</h1>
                <nav className="text-white text-sm">
                    <ol className="list-reset flex space-x-2">
                        <li>
                            <Link to="/" className="text-white hover:underline">Home</Link>
                        </li>
                        <li>/</li>
                        <li className="text-white font-semibold">Services</li>
                    </ol>
                </nav>
            </div>
        </div>
        <ServicesSection />
        </>

    )
}

export default Services