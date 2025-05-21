import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.mobile || !formData.freight) {
      alert('Please fill in all required fields!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert('Inquiry sent successfully!');
      } else {
        alert('Failed to send inquiry.');
      }
    } catch (error) {
      console.error('Error sending inquiry:', error);
      alert('Something went wrong!');
    }
  };

  return (
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
          <div className="flex items-center space-x-2">
            {/* Phone Input Component for Automatic Country Code */}
            <PhoneInput
              international
              defaultCountry="IN" 
              value={formData.mobile}
              onChange={(value) => setFormData({ ...formData, mobile: value })}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
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
  );
};

export default InquiryForm;
