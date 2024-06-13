// src/ProfileForm.js
import React, { useState } from 'react';
import FormInp from "../Common/FormInp"


const Profile = () => {
  const [formData, setFormData] = useState({
    travelAgencyName: '',
    agentFullName: '',
    email: '',
    contactNumber: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Profile</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1 font-semibold">Travel Agency Name</label>
            <FormInp
            type="text"
            name="travelAgencyName"
            value={formData.email}
            onChange={handleChange}
          />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Agent Full Name</label>
            <FormInp
            type="text"
            name="agentFullName"
            value={formData.agentFullName}
            onChange={handleChange}
          />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email</label>
          <FormInp
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Contact Number</label>
          <FormInp
            type="number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Address</label>
          <FormInp
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Upload Your Logo</label>
          <input type="file" className="w-full px-3 py-2 border rounded" />
        </div>

        <div className="flex justify-center space-x-5">
          <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;