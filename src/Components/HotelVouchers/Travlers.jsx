import React, { useState } from 'react';
import travel from "../../assets/travel.png";
import booking from "../../assets/booking.png";
import payment from "../../assets/payment.png";
import Input from '../../Common/CustomInput';  // Import the Input component
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';

function Travlers() {
  const [formData, setFormData] = useState({
    passengers: [{ name: '', passportNumber: '', mofaNumber: '', mofaIssueAgent: '', familyHead: '' }],
    makkahHotel: { name: '', checkIn: '', checkOut: '', specialRequest: '' },
    madinaHotel: { name: '', checkIn: '', checkOut: '', specialRequest: '' },
    transport: { type: '', sector: '' },
    flight: { airline: '', sector: '', travelDate: '', returnDate: '' },
  });


  const [fromType, setFromType] = useState('text');
  const [toType, setToType] = useState('text');
  
  
  

  const handleChange = (e, section, index = null) => {
    const { name, value } = e.target;
    if (section === 'passengers') {
      const updatedPassengers = [...formData.passengers];
      updatedPassengers[index][name] = value;
      setFormData({ ...formData, passengers: updatedPassengers });
    } else {
      setFormData({ ...formData, [section]: { ...formData[section], [name]: value } });
    }
  };

  const addPassenger = () => {
    setFormData({
      ...formData,
      passengers: [...formData.passengers, { name: '', passportNumber: '', mofaNumber: '', mofaIssueAgent: '', familyHead: '' }],
    });
  };

  const addHotel = (section) => {
    // Implement add hotel logic if needed
  };

  return (
    <>
      <div className="container mx-auto justify-items-center grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4">
        <img src={travel} alt="travel" className="w-auto h-auto object-cover" />
        <img src={booking} alt="booking" className="w-auto h-auto object-cover" />
        <img src={payment} alt="payment" className="w-auto h-auto object-cover" />
      </div>

      <div className="mx-4 md:mx-20 rounded-xl bg-white shadow-lg p-10">
        <div className="space-y-8">
          {/* Passengers Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Passengers Details</h2>



           {formData.passengers.map((passenger, index) => (
  <div key={index} className="grid md:grid-cols-6 sm:grid-cols-2 grid-cols-1 gap-x-4">
    <div className="relative mb-1 mt-5  rounded-md" data-twe-input-wrapper-init>
      <TextField
        id={`passengerName_${index}`}
        label="Passenger Name"
        variant="outlined"
        fullWidth 
        InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
          placeholder='Passenger Name'  
        value={passenger.name}
        onChange={(e) => handleChange(e, 'name', index)}
        className="dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
      />
    </div>

    <div className="relative mb-1 mt-5  rounded-md" data-twe-input-wrapper-init>
      <TextField
        id={`passportNumber_${index}`}
        label="Passport Number"
        variant="outlined"
        fullWidth
        InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
        placeholder='Passport Number'  
        value={passenger.passportNumber}
        onChange={(e) => handleChange(e, 'passportNumber', index)}
        className="dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
      />
    </div>

    <div className="relative mb-1 mt-5  rounded-md" data-twe-input-wrapper-init>
      <TextField
        id={`MofaNumber_${index}`}
        label="Mofa Number"
        variant="outlined"
        fullWidth
        InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
        placeholder='Mofa Number'  
        value={passenger.mofaNumber}
        onChange={(e) => handleChange(e, 'MofaNumber', index)}
        className="dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
      />
    </div>

    <div className="relative mb-1 mt-5  rounded-md" data-twe-input-wrapper-init>
      <TextField
        id={`MofaIssueAgent_${index}`}
        label="Mofa Issue Agent"
        variant="outlined"
        fullWidth
        InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
        placeholder='Mofa Issue Agent'  
        value={passenger.mofaIssueAgent}
        onChange={(e) => handleChange(e, 'MofaIssueAgent', index)}
        className="dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
      />
    </div>

    <div className="relative mb-1 mt-5 rounded-md" data-twe-input-wrapper-init>
      <TextField
        id={`familyHead_${index}`}
        label="Family Head"
        variant="outlined"
        fullWidth
        InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
        placeholder='Family Head'  
        value={passenger.familyHead}
        onChange={(e) => handleChange(e, 'familyHead', index)}
        className="dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
      />
    </div>
  </div>
))}

            
            <button type="button" onClick={addPassenger} className="col-span-1 p-2 w-44 float-right h-14 !-mt-14  rounded-lg bg-[#0869FB] text-white">Add Passenger</button>

            
            
               {/* {formData.passengers.map((passenger, index) => (
              <div key={index} className="grid md:grid-cols-6 sm:grid-cols-2 grid-cols-1 gap-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Passenger Name"
                  value={passenger.name}
                  onChange={(e) => handleChange(e, 'passengers', index)}
                  className="col-span-1"
                />
                <Input
                  type="text"
                  name="passportNumber"
                  placeholder="Enter Passport Number"
                  value={passenger.passportNumber}
                  onChange={(e) => handleChange(e, 'passengers', index)}
                  className="col-span-1"
                />
                <Input
                  type="text"
                  name="mofaNumber"
                  placeholder="Mofa Number"
                  value={passenger.mofaNumber}
                  onChange={(e) => handleChange(e, 'passengers', index)}
                  className="col-span-1"
                />
                <Input
                  type="text"
                  name="mofaIssueAgent"
                  placeholder="Mofa Issue Agent"
                  value={passenger.mofaIssueAgent}
                  onChange={(e) => handleChange(e, 'passengers', index)}
                  className="col-span-1"
                />
                <Input
                  type="text"
                  name="familyHead"
                  placeholder="Family Head"
                  value={passenger.familyHead}
                  onChange={(e) => handleChange(e, 'passengers', index)}
                  className="col-span-1"
                />
                <button type="button" onClick={addPassenger} className="col-span-1 p-2 w-44 rounded-lg bg-[#0869FB] text-white">Add Passenger</button>
              </div>
            ))} */}




          </div>

          {/* Makkah Hotel Details */}
          <div className="space-y-4">
  <h2 className="text-xl font-bold">Makkah Hotel Details</h2>

  <div className="flex flex-wrap justify-between items-center gap-4">
    <div className="flex flex-col w-full md:w-auto">
      <div className="relative mb-1 mt-5  rounded-md" data-twe-input-wrapper-init>
        <TextField
          label="Hotel Name"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
          placeholder='Hotel'  
          onChange={(e) => handleChange(e, 'makkahHotel', index)}
          className="dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
        />
      </div>
    </div>

    <div className="flex flex-col w-full md:w-auto">
      <div className="relative mb-1 mt-5  rounded-md" data-twe-input-wrapper-init>
        <TextField
          type="date"
          label="Check In"
          variant="outlined"
          fullWidth
          onChange={(e) => handleChange(e, 'makkahHotel', index)}
          InputLabelProps={{ shrink: true }}
          className="dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
        />
      </div>
    </div>

    <div className="flex flex-col w-full md:w-auto">
      <div className="relative mb-1 mt-5  rounded-md" data-twe-input-wrapper-init>
        <TextField
          type="date"
          label="Check Out"
          variant="outlined"
          fullWidth
          
          onChange={(e) => handleChange(e, 'makkahHotel', index)}
          InputLabelProps={{ shrink: true }}
          className="dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
        />
      </div>
    </div>

    <div className="flex flex-col w-full md:w-auto">
      <div className="relative mb-1 mt-5  rounded-md" data-twe-input-wrapper-init>
        <TextField
          label="Special Request"
          variant="outlined"
          fullWidth

          InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
          placeholder='Special Request'     
                 onChange={(e) => handleChange(e, 'makkahHotel', index)}
          className="dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
        />
      </div>
    </div>

    <button type="button" onClick={() => addHotel('makkahHotel')} className="p-2 w-24 h-10 mt-5 rounded-lg bg-[#0869FB] text-white">Add Hotel</button>

    <div className='flex items-center gap-x-2'>
      <input type="checkbox" className='h-5 w-5' />
      <p>self</p>
    </div>
  </div>
</div>


          {/* Madina Hotel Details */}
          <div className="space-y-4">
  <h2 className="text-xl font-bold">Madinah Hotel Details</h2>

  <div className="flex flex-wrap justify-between items-center gap-4">
    <div className="flex flex-col w-full md:w-auto">
      <div className="relative mb-1 mt-5  rounded-md" data-twe-input-wrapper-init>
        <TextField
          label="Hotel Name"
          variant="outlined"
          fullWidth

          InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
          placeholder='Hotel'     
          onChange={(e) => handleChange(e, 'makkahHotel', index)}
          className="dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
        />
      </div>
    </div>

    <div className="flex flex-col w-full md:w-auto">
      <div className="relative mb-1 mt-5  rounded-md" data-twe-input-wrapper-init>
        <TextField
          type="date"
          label="Check In"
          variant="outlined"
          fullWidth
          onChange={(e) => handleChange(e, 'makkahHotel', index)}
          InputLabelProps={{ shrink: true }}
          className="dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
        />
      </div>
    </div>

    <div className="flex flex-col w-full md:w-auto">
      <div className="relative mb-1 mt-5  rounded-md" data-twe-input-wrapper-init>
        <TextField
          type="date"
          label="Check Out"
          variant="outlined"
          fullWidth
          
          onChange={(e) => handleChange(e, 'makkahHotel', index)}
          InputLabelProps={{ shrink: true }}
          className="dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
        />
      </div>
    </div>

    <div className="flex flex-col w-full md:w-auto">
      <div className="relative mb-1 mt-5  rounded-md" data-twe-input-wrapper-init>
        <TextField
          label="Special Request"
          variant="outlined"
          fullWidth
          
          InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
          placeholder='Special Request'    

          onChange={(e) => handleChange(e, 'makkahHotel', index)}
          className="dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
        />
      </div>
    </div>

    <button type="button" onClick={() => addHotel('makkahHotel')} className="p-2 w-24 h-10 mt-5 rounded-lg bg-[#0869FB] text-white">Add Hotel</button>

    <div className='flex items-center gap-x-2'>
      <input type="checkbox" className='h-5 w-5' />
      <p>self</p>
    </div>
  </div>
</div>




          {/* Transport Details */}
          <div className="space-y-4">
  <h2 className="text-xl font-bold">Transport Details</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    <div className="relative mb-1 mt-5 rounded-md">
      <TextField
        label="Transport Type"
        variant="outlined"
        fullWidth

        InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
        placeholder='Company Shared Bus'     
           onChange={(e) => handleChange(e, 'transportType', index)}
        className="dark:text-white dark:placeholder-text-neutral-300 dark:peer-focus:text-primary"
      />
    </div>

    <div className="relative mb-1 mt-5 rounded-md">
      <TextField
        label="Transport Sector"
        variant="outlined"
        fullWidth
        InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
        placeholder='Jed(A)-Mak(H)-Med(H)-Mak(H)-Jed(A)'
        onChange={(e) => handleChange(e, 'transportSector', index)}
        className="dark:text-white dark:placeholder-text-neutral-300 dark:peer-focus:text-primary"
      />
    </div>

    <div className="flex items-center gap-x-2 col-span-1 sm:col-span-2 md:col-span-1">
      <button type="button" className="p-2 h-12 !mt-3 rounded-md bg-[#0869FB] text-white">Add Route</button>
      <input type="checkbox" className="h-5 w-5" />
      <p>Self</p>
    </div>
  </div>
</div>

          {/* Flight Details */}
          <div className="space-y-4">
  <h2 className="text-xl font-bold">Flight Details</h2>
  <div className="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-4">

    <div className="relative mb-1 mt-5  w-52 rounded-md" data-twe-input-wrapper-init>
      <TextField
        label="Airline Name or Code"
        variant="outlined"
        fullWidth
        InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
        placeholder='Saudia(sv)'
        onChange={(e) => handleChange(e, 'airlineNameOrCode', index)}
        className="dark:text-white dark:placeholder-text-neutral-300 dark:peer-focus:text-primary"
      />
    </div>

    <div className="relative mb-1 mt-5   w-52 rounded-md" data-twe-input-wrapper-init>
      <TextField
        label="Sector"
        variant="outlined"
        fullWidth
        InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
placeholder='Lhe-Jed-Lhe'
        onChange={(e) => handleChange(e, 'sector', index)}
        className="dark:text-white dark:placeholder-text-neutral-300 dark:peer-focus:text-primary"
      />
    </div>

    <div className="relative mb-1 mt-5   w-52 rounded-md" data-twe-input-wrapper-init>
      <TextField
        label="Travel Date And Time"
             variant="outlined"
             type='date'
        fullWidth
        InputLabelProps={{ shrink: true, style: { color: '#000000' } }}

        onChange={(e) => handleChange(e, 'travelDateTime', index)}
        className="dark:text-white dark:placeholder-text-neutral-300 dark:peer-focus:text-primary"
      />
    </div>

    <div className="relative mb-1 mt-5   w-52 rounded-md" data-twe-input-wrapper-init>
      <TextField
        label="Return Date And Time"
         variant="outlined"
      type='date'
        fullWidth
        InputLabelProps={{ shrink: true, style: { color: '#000000' } }}

        onChange={(e) => handleChange(e, 'returnDateTime', index)}
        className="dark:text-white dark:placeholder-text-neutral-300 dark:peer-focus:text-primary"
      />
    </div>

    {/* <Link to={"/booking"}>
      <button type="submit" className="col-span-1 w-44 p-2 h-14 rounded-lg bg-[#0869FB] mt-5 text-white">Next</button>
    </Link> */}
  </div>
</div>

<div className='flex justify-end'>
  <button className='bg-[#0869FB] px-10 h-[44px] text-sm rounded-md text-white'> <Link to={"/booking"}> Next  </Link> </button>
</div>


        </div>
      </div>
    </>
  );
}

export default Travlers;
