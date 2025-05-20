import React, { useState } from 'react';

const InquiryForm = () => {
  // Define the state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    freight: '',
    specialNote: '',
  });

  // Handle input changes and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, for now, let's log the form data
    console.log(formData);
    // You can send the form data to an API or handle it as needed
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name Field */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 focus:outline-none focus:ring focus:border-primary"
        />
        
        {/* Email Field */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 focus:outline-none focus:ring focus:border-primary"
        />

        {/* Mobile Field */}
        <input
          type="text"
          name="mobile"
          placeholder="Your Mobile"
          value={formData.mobile}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 focus:outline-none focus:ring focus:border-primary"
        />

        {/* Freight Type Dropdown */}
        <select
          name="freight"
          value={formData.freight}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 focus:outline-none focus:ring focus:border-primary"
        >
          <option value="" disabled>
            Select A Freight
          </option>
          <option value="1">Air Freight</option>
          <option value="2">Sea Freight</option>
          <option value="3">Courier Service</option>
          <option value="4">Custom Clearance</option>
          <option value="5">Other Logistics Services</option>
        </select>

        {/* Special Note Field */}
        <textarea
          name="specialNote"
          rows="4"
          placeholder="Special Note"
          value={formData.specialNote}
          onChange={handleInputChange}
          className="col-span-1 sm:col-span-2 w-full p-3 border border-gray-300 focus:outline-none focus:ring focus:border-primary"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 w-full bg-primary text-dark py-4 px-6 hover:bg-primary-dull transition"
      >
        Submit
      </button>
    </form>
  );
};

export default InquiryForm;
