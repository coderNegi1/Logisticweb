import React from 'react';
import { Link } from 'react-router-dom';
import Bg3 from '../assets/bg-1.jpg';
import InquiryForm from '../components/ContactForm';


const ContactPage = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-gray-800 py-20 mb-24" style={{ backgroundImage: `url(${Bg3})` }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-3">Contact Us</h1>
          <nav className="text-white text-sm">
            <ol className="list-reset flex space-x-2">
              <li>
                <Link to="/" className="text-white hover:underline">Home</Link>
              </li>
              <li>/</li>
              <li>
                <span className="text-white">Pages</span>
              </li>
              <li>/</li>
              <li className="text-white font-semibold">Contact</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div>
            <h6 className="text-blue-600 uppercase mb-2">Get In Touch</h6>
            <h1 className="text-3xl font-bold mb-4">Contact For Any Query</h1>
          <InquiryForm />
          </div>

          {/* Google Map */}
          <div className="h-[500px] w-full rounded overflow-hidden shadow">
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15103.582129676355!2d77.07925277751843!3d28.586840130960052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sA%2035%204%20Flat%20No%20303%20Street%20No%2011%20Raj%20Nagar%202%20Palam%20Colony%20New%20Delhi%20110077!5e1!3m2!1sen!2sin!4v1747740430882!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"

              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>


          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
