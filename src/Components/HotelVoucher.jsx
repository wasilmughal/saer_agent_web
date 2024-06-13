// src/pages/HotelVouchers.jsx
import { Icon } from '@iconify/react/dist/iconify.js';
import {  IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Input,
  initTWE,
} from "tw-elements";
const HotelVoucher = () => {

 

const nav = useNavigate()


const [fromType, setFromType] = useState('text');
const [toType, setToType] = useState('text');





  const [formData, setFormData] = useState({
    passportNumber: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSearch = () => {
    // Implement search functionality here
    // nav("/traveler")
   };

  return (
    <div className="min-h-screen  p-4 m-10">
    <div className="bg-white py-6 px-10 rounded-lg shadow-lg mb-6">
  <h2 className="text-2xl font-semibold mb-4">Hotel Voucher</h2>

  <div className="flex flex-col md:flex-row items-center md:space-x-7 mt-4">
    <div className="flex flex-col items-center">
      <TextField
        label="Passport Number"
        variant="outlined"
        margin="normal"
        placeholder='123AK098'
        className="w-full md:w-[400px] text-black"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton edge="start">
                <Icon icon="circum:passport-1" width="22" color="#0869FB" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>

    <div className="flex flex-col">
      <TextField
        label="From"
        variant="outlined"
        margin="normal"
        type="date"
        className='w-full'
        InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" >
              <Icon icon="uis:calender" color='#0869FB' width={22} />
            </InputAdornment>
          ),
        }}
      />
    </div>

    <div className="flex flex-col">
      <TextField
        label="To"
        variant="outlined"
        margin="normal"
        type="date"
        className='w-full'
        InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Icon icon="uis:calender" color='#0869FB' width={22} />
            </InputAdornment>
          ),
        }}
      />
    </div>

    <div className="flex justify-center md:justify-start">
      <button onClick={handleSearch} className="bg-[#0869FB] text-white px-10 h-[40px] rounded mt-4 md:mt-0">
        Search
      </button>
    </div>
  </div>

  <div className="mt-4 flex justify-end">
    <button className="bg-[#0869FB] text-white px-4 py-2 rounded">
      <Link to={"/traveler"}>
        Create Voucher Without Mofa
      </Link>
    </button>
  </div>
</div>


      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold ">Hotel Vouchers</h2>
        <p className='text-gray-500 text-sm py-2'>Makkah And Madina Hotel Vochers</p>
        <div className="overflow-x-auto mt-5">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left"><input type="checkbox" /></th>
                <th className="py-2 px-4 border-b text-left">Passport Number </th>
                <th className="py-2 px-4 border-b text-left">Family Head Name</th>
                <th className="py-2 px-4 border-b text-left">Mofa Number</th>
                <th className="py-2 px-4 border-b text-left">Voucher number</th>
                <th className="py-2 px-4 border-b text-left">Voucher Status</th>
                {/* <th className="py-2 px-4 border-b text-left">Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {/* Sample Data - Replace with dynamic data */}
              {[...Array(10).keys()].map((i) => (
                <tr key={i}>
                  <td className="py-2 px-4 border-b text-left">
                    <input type="checkbox" />
                  </td>
                  <td className="py-2 px-4 border-b text-left">V12345{i}</td>
                  <td className="py-2 px-4 border-b text-left">Agent Name {i}</td>
                  <td className="py-2 px-4 border-b text-left">2023-05-25</td>
                  <td className="py-2 px-4 border-b text-left">Travel Agency {i}</td>
                  <td className="py-2 px-4 border-b text-left">
                    <span className={`bg-green-100 rounded-md text-xs p-1  px-2`}>Status {i % 2 === 0 ? 'Approved' : 'Un-Approved'}</span>
                  </td>
                  <td className="py-2 px-4 border-b text-left">
                    {/* <button className="text-blue-500">View</button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HotelVoucher;
