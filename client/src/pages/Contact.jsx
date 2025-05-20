import React from 'react';
import { Link } from 'react-router-dom';
import Bg3 from '../assets/bg-1.jpg';


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
           
          

            <form className="bg-gray-100 p-6  space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="form-input w-full px-4 py-3 border rounded"
                  />
                  <label htmlFor="name" className="text-sm text-gray-600 block mt-1">
                    Your Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="form-input w-full px-4 py-3 border rounded"
                  />
                  <label htmlFor="email" className="text-sm text-gray-600 block mt-1">
                    Your Email
                  </label>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="form-input w-full px-4 py-3 border rounded"
                />
                <label htmlFor="subject" className="text-sm text-gray-600 block mt-1">
                  Subject
                </label>
              </div>
              <div>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Leave a message here"
                  className="form-textarea w-full px-4 py-3 border rounded"
                ></textarea>
                <label htmlFor="message" className="text-sm text-gray-600 block mt-1">
                  Message
                </label>
              </div>
              <button
                type="submit"
                className="--color-primary-600 hover:--color-primary-700 text-white py-3 px-6 rounded w-full"
              >
                Send Message
              </button>
            </form>
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
