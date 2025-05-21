import React, { useState } from 'react';

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
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300"
        />

        <input
          type="text"
          name="mobile"
          placeholder="Your Mobile"
          value={formData.mobile}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300"
        />

        <select
          name="freight"
          value={formData.freight}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300"
        >
          <option value="" disabled>Select A Freight</option>
          <option value="Air Freight">Air Freight</option>
          <option value="Sea Freight">Sea Freight</option>
          <option value="Courier Service">Courier Service</option>
          <option value="Custom Clearance">Custom Clearance</option>
          <option value="Other">Other Logistics Services</option>
        </select>

        <textarea
          name="specialNote"
          rows="4"
          placeholder="Special Note"
          value={formData.specialNote}
          onChange={handleInputChange}
          className="col-span-1 sm:col-span-2 w-full p-3 border border-gray-300"
        ></textarea>
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
