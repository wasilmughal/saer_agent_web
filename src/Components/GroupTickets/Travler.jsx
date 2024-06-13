import React, { useState } from 'react'
import travel from "../../assets/travel.png";
import booking from "../../assets/booking.png";
import payment from "../../assets/payment.png";
import qatar from "../../assets/qatar.png"
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import Input from '../../Common/Input';

import { TextField } from '@mui/material';


function Travler() {


    const [formData, setFormData] = useState({
        passengers: [{ name: '', passportNumber: '', mofaNumber: '', mofaIssueAgent: '', familyHead: '' }],
        makkahHotel: { name: '', checkIn: '', checkOut: '', specialRequest: '' },
        madinaHotel: { name: '', checkIn: '', checkOut: '', specialRequest: '' },
        transport: { type: '', sector: '' },
        flight: { airline: '', sector: '', travelDate: '', returnDate: '' },
      });
    
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
    


  return (
    <>
      
      <div className="container mx-auto justify-items-center grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4">
        <img src={travel} alt="travel" className="w-auto h-auto object-cover" />
        <img src={booking} alt="booking" className="w-auto h-auto object-cover" />
        <img src={payment} alt="payment" className="w-auto h-auto object-cover" />
      </div>


<div className='bg-white shadow-md rounded-sm mt-5 p-5 mx-24 '>
    <p className='text-lg font-bold'>Flight Details</p>


    <div className='border mt-4 rounded-md'>
           <div className="py-5 flex w-full   items-start justify-around md:justify-between">
                  <div className="flex w-[40%] lg:w-[60%] justify-between flex-row">
                    <div className="flex flex-col w-full gap-1">
                      <img
                        alt="Qatar Airways"
                        loading="lazy"
                        src={qatar}
                        className="object-contain self-center rounded-lg border-gray-200 border object-center w-[89px] h-[40px] sm:w-[120px] sm:h-[65px] p-1.5 justify-center items-center overflow-hidden"
                      />
                      <div className="text-black text-[7px] sm:text-[10px] text-center">
                        <span>Qatar Airways</span>
                      </div>
                    </div>

                    <div className="ml-2 flex-col w-full flex justify-center self-center">
                      <div className="text-black text-xs py-1 sm:text-[20px]">
                        {"09:45 AM  "}
                      </div>
                      <div className="text-neutral-400 text-[8px] sm:text-[10px]">
                        {"12 sep"}
                      </div>
                      <div className="text-neutral-400 text-[8px] sm:text-[10px]">
                        {" Lahore (LHE)"}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col w-[15%] justify-center items-center text-center">
                    <div className="text-zinc-500 text-[9px] sm:text-xs mt-5">
                      One Way
                    </div>
                  </div>

                  <div className="w-[30%] flex flex-col self-center justify-center items-center">
                    <div className="text-start">
                      <div className="text-black text-xs py-1 sm:text-[20px]">
                        {"09:10 PM"}
                      </div>
                      <div className="text-neutral-400 text-[8px] sm:text-[10px]">
                        {"12 sep"}
                      </div>
                      <div className="text-neutral-400 text-[8px] sm:text-[10px] uppercase">
                        Jeddah (Jed)
                      </div>
                    </div>
                  </div>

                  <div className="justify-center -mt-2 w-[30%] items-center hidden lg:flex flex-col self-center">
                    <div className="text-black flex justify-center items-center text-[20px] self-stretch">
                      07h 50m
                    </div>
                    <div className="text-[#699FC9] font-bold text-[10px] uppercase self-center">
                      1 stop
                    </div>
                  </div>
                </div>




                <div class='flex flex-col md:flex-row gap-x-3 mb-2 justify-around items-center'>
  <button class='bg-[#E4F0FF] text-[#206DA9] px-4 py-2 rounded-md ml-10 text-sm'>Refundable</button>

  <div class='flex items-center gap-x-3'>
    <Icon icon="material-symbols-light:checked-bag-outline" color='#206DA9' height={"22"} width={"22"}/>
    <p class='text-sm text-[#699FC9]'>Total: 30 kg psc: 2</p>

    <div class='flex items-center gap-x-1'>
      <Icon icon="game-icons:meal" color='#206DA9' height={"22"} width={"22"} />
      <p class='text-sm text-[#699FC9]'>Meal</p>
    </div>
  </div>

  <div class='flex items-center gap-x-2'>
    <p><b>PKR 2,28000/</b> 1 Person</p>
    <button class='bg-[#0869FB] px-6 rounded-md py-2 text-white'><Link to={"/grouptravale"}>Continue</Link></button>
  </div>
</div>




                </div>



                <div className="container mx-auto p-4">
      <h1 className="md:text-xl text-sm font-bold mb-4">Passengers Passport Detail</h1>
      <div className="space-y-4">
        {[1, 2].map((_, index) => (



          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4"
          >


<TextField
  label="Title"
  variant="outlined"
  margin="normal"
  InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
  placeholder='Title' 
/>
<TextField
  label="First Name"
  variant="outlined"
  margin="normal"
  InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
  placeholder='First Name' 
/>



<TextField
  label="Last Name"
  variant="outlined"
  margin="normal"
  InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
  placeholder='Last Name' 
 />


 
<TextField
  label="Passport Number"
  variant="outlined"
  margin="normal"
  InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
  placeholder='Passport Number' 
  
  
/>
<TextField
  type="date"
  label="DOB"
  variant="outlined"
  margin="normal"
  fullWidth
  InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
  
/>
<TextField
  type="date"
  label="Passport Issue Date"
  variant="outlined"
  margin="normal"
  fullWidth
  InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
 
/>
<TextField
  type="date"
  label="Passport Expiry Date"
  variant="outlined"
  margin="normal"
  fullWidth
  InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
  // inputProps={{
  //   style: { borderColor: '#79747E' },
  //   focused: false,
  // }}
/>



{/* <div className="relative mb-1 mt-3 border-2 border-[#0000001A] max-w-20 rounded-md" data-twe-input-wrapper-init>
      <input
        type="text"
        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.40rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
        defaultValue="MR"
        // onChange={(e) => handleChange(e, 'makkahHotel', index)}
      />
      <label
        className="pointer-events-none absolute left-3 text-md bg-white top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#112211] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
      >
                Title
      </label>
    </div>



            
          





            <div className="border p-2">
              <label className="block text-xs font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                defaultValue="Ahsan Raza"
                className="mt-1 block w-full border-gray-300 outline-none"
              />
            </div>
            <div className="border p-2">
              <label className="block text-xs font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                defaultValue="Raza"
                className="mt-1 block w-full border-gray-300 outline-none"
              />
            </div>
            <div className="border p-2">
              <label className="block text-xs font-medium text-gray-700">
                Passport Number
              </label>
              <input
                type="text"
                defaultValue="Fy1238V"
                className="mt-1 block w-full border-gray-300 outline-none"
              />
            </div>
            <div className="border p-2">
              <label className="block text-xs font-medium text-gray-700">
                DOB
              </label>
              <input
                type="date"
                defaultValue="Sun 16/2023"
                className="mt-1 block w-full border-gray-300 outline-none"
              />
            </div>
            <div className="border p-2">
              <label className="block text-xs font-medium text-gray-700">
                Passport Issue Date
              </label>
              <input
                type="date"
                defaultValue="Sun 16/2023"
                className="mt-1 block w-full border-gray-300  outline-none"
              />
            </div>
            <div className="border p-2">
              <label className="block text-xs font-medium text-gray-700">
                Passport Expiry Date
              </label>
              <input
                type="date"
                defaultValue="Sun 16/2023"
                className="mt-1 block w-full border-gray-300 outline-none"
              />
            </div> */}





          </div>
       
       
       
       
       
       
       
       ))}
      </div>
      <div className="text-center space-x-4 mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Add More Passenger
        </button>

        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
        <Link to={"/groupbooking"}>  Next</Link>
        </button>


      </div>
    </div>

 











</div>




    </>
  )
}

export default Travler
