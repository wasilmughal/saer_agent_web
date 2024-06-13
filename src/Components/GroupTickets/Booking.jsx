import React, { useState } from 'react'
import travel from "../../assets/travel.png";
import booking from "../../assets/booking.png";
import payment from "../../assets/payment.png";
import qatar from "../../assets/qatar.png"
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import Input from '../../Common/Input';
import { TextField } from '@mui/material';



function Booking1() {


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
        <img src={booking} alt="booking" className="w-auto h-auto object-cover" />
        <img src={travel} alt="travel" className="w-auto h-auto object-cover" />
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
        className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >

<div>
<p><b>Passenger Name</b></p>
<p><b>MR.Ahsan Raza</b></p>
</div>




<div>
<p><b>Enter Passport Number </b></p>
<p><b>123AK098</b></p>
</div>

<div>
<p><b>DOB </b></p>
<p><b>12-05-2003</b></p>
</div>

<div>
<p><b>Passport Issue Date </b></p>
<p><b>12-05-2003</b></p>
</div>


<div>
<p><b>Passport Expiry Date </b></p>
<p><b>12-05-2003</b></p>
</div>

 


 



      </div>
    ))}
  </div>

  
 
</div>

 

<div className="bg-white rounded-lg shadow-md px-4 py-6">
        <span className="text-gray-700 font-bold text-xl">Total Payment</span>
      <div className="flex gap-x-5 mt-3 mb-2">
        <span className="text-gray-900 font-medium">12 Sep Lhe To DXB <br />
51,000/. x 2 Pex</span>

<span className="text-gray-900 font-medium">Total Amount
 <br />
 RS.517,140/.</span>


      </div>
      <div className="flex space-x-2 justify-end">
      <button className="bg-blue-500 px-5 py-2 rounded-md text-white">Back Edit</button>
      <button className="bg-blue-500  px-5 py-2 rounded-md text-white"><Link to={"/payment"}>Create Booking</Link></button>
    </div>
    </div>









</div>




    </>
  )
}

export default Booking1
