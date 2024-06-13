import React from 'react'
import travel from "../../assets/travel.png";
import booking from "../../assets/booking.png";
import payment from "../../assets/payment.png";
import bank from "../../assets/bank transfer.png"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


function Payment() {
  return (
    < >
       <div className="container mx-auto justify-items-center grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4">
        <img src={booking} alt="booking" className="w-auto h-auto object-cover" />
        <img src={payment} alt="payment" className="w-auto h-auto object-cover" />
        <img src={travel} alt="travel" className="w-auto h-auto object-cover" />
      </div>


      <div>
<div className='container mx-auto shadow-2xl rounded-lg p-5 '>
<h1 className='font-bold text-[17px] mt-5'>Select Payment Method</h1>

     <Tabs className=" my-5">
    <TabList className="flex border w-[740px] border-1 outline-none border-gray-400 rounded-lg  justify-between  cursor-pointer">
      <Tab className="border-r border-gray-400  px-2 flex gap-3 p-2 outline-none">
        <div className='flex flex-col '> 
          <h1 className='font-semibold text-[13px] text-black'>1 Bill_ Bank Transfer</h1>
          <span  className='font-semibold text-[13px] text-[#4169E1]'>Save PKR 3,214 on fees</span>
          
          </div>
        <div>
          <img src="https://play-lh.googleusercontent.com/78q9wsE1NqJb6iHwl-qmsxWi5XFIthR2G0mTsTrjvz2pPL10rkwC6fwTEAuWv5wNrA=w600-h300-pc0xffffff-pd" 
          alt="..." 
          className='w-20 h-10'
          />
        </div>
      </Tab>
      <Tab className="border-r border-gray-400 px-2 flex gap-3 p-2 outline-none items-center">
        <div className='flex flex-col '> 
          <h1 className='font-semibold text-[13px] text-black  mx-5'>RAAST ID</h1>
          {/* <span  className='font-semibold text-[13px] text-[#4169E1]'>Save PKR 3,214 on fees</span> */}
          
          </div>
        <div>
          <img src="https://bankislami.com.pk/wp-content/uploads/2022/06/Raast-Logo.png" 
          alt="..." 
          className='w-20 h-10 object-scale-down'
          />
        </div>
      </Tab>
      <Tab className=" px-2 flex  p-2 outline-none items-center">
        <div className='flex flex-col '> 
          <h1 className='font-semibold text-[13px] text-black mx-5'>TRANSFER</h1>
          {/* <span  className='font-semibold text-[13px] text-[#4169E1]'>Save PKR 3,214 on fees</span> */}
          
          </div>
        <div>
          <img src={bank} 
          alt="..." 
          className='w-20 h-10 object-scale-down'
          />
        </div>
      </Tab>

    </TabList>

    <TabPanel className={"!w-full mt-2"}>
    <div className="p-4 my-2 rounded-md  border shadow-md">
            <div className="font-bold text-lg mb-2">Total Payment</div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <span className="text-gray-600">Umrah Package Deal</span>
                    <span className="font-bold ml-2">51,000/- x 2 Pax</span>
                </div>
                <div className="text-right">
                    <span className="text-gray-600">Total Amount</span>
                    <span className="font-bold ml-2">Rs.51,114/-</span>
                </div>
            </div>
            <div className="flex justify-end gap-2">
                <button className="bg-[#0869FB] hover:bg-[#43618f] text-white font-bold py-2 px-4 rounded">
                    Hold Booking
                </button>
                <button className="bg-[#0869FB] hover:bg-[#43618f] text-white font-bold py-2 px-4 rounded">
                    Pay Now
                </button>
            </div>
        </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
  </Tabs>
    </div>
    </div>

    </>
  )
}

export default Payment
