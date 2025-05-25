import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    freight: '',
    specialNote: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.mobile || !formData.freight) {
      toast.error('Please fill in all required fields!');
      return;
    }

    // Simulate a successful form submission
    toast.success('Inquiry submitted successfully!');

    // Optionally reset form fields
    setFormData({
      name: '',
      email: '',
      mobile: '',
      freight: '',
      specialNote: '',
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block text-sm font-medium">Your Mobile</label>
            <PhoneInput
              international
              defaultCountry="IN"
              value={formData.mobile}
              onChange={(value) => setFormData({ ...formData, mobile: value })}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="freight" className="block text-sm font-medium">Select A Freight</label>
            <select
              name="freight"
              value={formData.freight}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded"
            >
              <option value="" disabled>Select A Freight</option>
              <option value="Air Freight">Air Freight</option>
              <option value="Sea Freight">Sea Freight</option>
              <option value="Courier Service">Courier Service</option>
              <option value="Custom Clearance">Custom Clearance</option>
              <option value="Other">Other Logistics Services</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="specialNote" className="block text-sm font-medium">Special Note</label>
            <textarea
              name="specialNote"
              id="specialNote"
              rows="4"
              placeholder="Special Note"
              value={formData.specialNote}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-4 px-6 hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {/* Toast container for notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default InquiryForm;
