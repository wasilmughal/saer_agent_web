import { Icon } from '@iconify/react/dist/iconify.js';
import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function BookingHistory() {


  const [fromType, setFromType] = useState('text');
  const [toType, setToType] = useState('text');



    const rows = Array.from({ length: 10 }, (_, index) => (
        <tr className='text-sm' key={index}>
          <td className="font-bold p-2">Bold text column</td>
          <td className="p-2">Regular text column</td>
          <td className="p-2">Regular text column</td>
          <td className="p-2">Regular text column</td>
          <td className="p-2">Regular text column</td>
          <td className="p-2 "><span className='bg-[#ECFDF3] px-4 rounded-full'> Active</span> </td>
          <td className="p-2">Regular text column</td>

        </tr>
      ));
    


  return (
    <>
      

      <div className='container mx-auto my-7'>
      <div className="bg-white p-5 rounded-lg shadow-lg mb-5">
        <h1 className="text-xl font-bold">Booking History</h1>
        <div className="flex md:flex-row flex-col items-center md:space-x-7 mt-4">




<TextField
  label="From"
  variant="outlined"
  margin="normal"
  
  type="date"
  className='w-[247px]'
  InputLabelProps={{ shrink: true, style: { color: '#000000' } }}

  InputProps={{
    endAdornment: (
      <InputAdornment position="end" >
        <Icon  icon="uis:calender" color='#0869FB' width={22} />
      </InputAdornment>
    ),
  }}
/>






<TextField
  label="To"
  variant="outlined"
  margin="normal"
  type="date"

  className='w-[247px]'
  InputLabelProps={{ shrink: true, style: { color: '#000000' } }}

  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <Icon icon="uis:calender" color='#0869FB' width={22}/>
      </InputAdornment>
    ),
  }}
/>


          
          
          <button className="bg-[#0869FB] text-white px-10 h-[40px] rounded mt-4  ">Search</button>
          
        </div>
      </div>

      <hr className='my-10 border-[#0869FB] border !mt-20' />

      <div className="bg-white p-5  rounded-lg shadow-lg overflow-x-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Booking</h2>
          <div className="flex space-x-4">
            <button className="flex p-2 items-center gap-x-2 rounded"> <Icon icon="hugeicons:menu-08" />Filters</button>
            <button className="flex p-2 items-center gap-x-2 border rounded"><Icon icon="bytesize:download" /> Export</button>
          </div>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-sm bg-gray-100">
              <th className="p-2 text-left">Booking Date</th>
              <th className="p-2 text-left">Booking Type</th>
              <th className="p-2 text-left">Travel Date</th>
              <th className="p-2 text-left">Passenger Names</th>
              <th className="p-2 text-left">Column heading</th>
              <th className="p-2 text-left">Booking Status</th>
              <th className="p-2 text-left">Column heading</th>

            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    </div>




    </>
  )
}

export default BookingHistory
