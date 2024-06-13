import React from 'react'
import { useState } from 'react';
import { TextField, Container } from '@mui/material';
import travel from "../../assets/travel.png"
import booking from "../../assets/booking.png"
import payment from "../../assets/payment.png"
import { Link } from 'react-router-dom';



function UmrahStap1() {

    const [passengerDetails, setPassengerDetails] = useState([{ title: "MR", firstName: "", lastName: "" }]);

    const handleAddPassenger = () => {
      setPassengerDetails([...passengerDetails, { title: "MR", firstName: "", lastName: "" }]);
    };

  return (

<>

<div className="container mx-auto justify-items-center grid mt-10 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4">
        <img src={travel} alt="travel" className="w-auto h-auto object-cover" />
        <img src={booking} alt="booking" className="w-auto h-auto object-cover" />
        <img src={payment} alt="payment" className="w-auto h-auto object-cover" />
      </div>







    
    <Container className="container mx-auto px-4 py-5 shadow-xl rounded-lg my-5">









<h1 className="text-2xl font-bold text-center my-4 text-[#112211]">Umrah Visa With transport and package</h1>

{passengerDetails.map((passenger, index) => (
  <div key={index} className='max-w-[600px] lg:mx-5 mx-auto mb-5'>
    <h1 className='text-[#112211] text-xl font-bold'>Passenger {index + 1} Passport Detail</h1>

    <div className='flex flex-col lg:flex-row gap-3 py-3 items-center'>
      <TextField
        label="Title"
        variant="outlined"
        defaultValue="MR"
        className="mb-2 w-full lg:w-[90px]"
        value={passenger.title}
        onChange={(e) => {
          const newPassengerDetails = [...passengerDetails];
          newPassengerDetails[index].title = e.target.value;
          setPassengerDetails(newPassengerDetails);
        }}
      />

      <TextField
        label="First Name"
        variant="outlined"
        className="mb-2 w-full lg:w-[180px]"
        value={passenger.firstName}
        onChange={(e) => {
          const newPassengerDetails = [...passengerDetails];
          newPassengerDetails[index].firstName = e.target.value;
          setPassengerDetails(newPassengerDetails);
        }}
      />

      <TextField
        label="Last Name"
        variant="outlined"
        className="mb-2 w-full lg:w-[150px]"
        value={passenger.lastName}
        onChange={(e) => {
          const newPassengerDetails = [...passengerDetails];
          newPassengerDetails[index].lastName = e.target.value;
          setPassengerDetails(newPassengerDetails);
        }}
      />

      <button className='bg-[#0869FB] px-3 h-[44px] text-sm rounded-md text-white w-full lg:w-auto'>Upload Passport</button>
    </div>
  </div>
))}

<div className='flex justify-center my-10'>
  <button onClick={handleAddPassenger} className='bg-[#0869FB] px-3 h-[44px] text-sm rounded-md text-white'>Add More Passenger</button>
</div>

<div className='flex justify-end'>
  <button className='bg-[#0869FB] px-10 h-[44px] text-sm rounded-md text-white'> <Link to={"/umrah/step2"}> Next  </Link> </button>
</div>
</Container>



</>


  )
}

export default UmrahStap1