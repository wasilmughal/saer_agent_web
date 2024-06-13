import React, { useState } from 'react'
import qatar from "../assets/qatar.png"
import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from 'react-router-dom'
import { IconButton, InputAdornment, TextField } from '@mui/material'


function GroupTicket() {

  const [fromType, setFromType] = useState('text');
  const [toType, setToType] = useState('text');
  
  
  


  return (
    <>
 <div className="min-h-screen   p-4">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Search Form */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Groups Tickets</h2>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">




          <TextField
  label="Enter Destination"
  variant="outlined"
  margin="normal"
  className="w-full md:w-[247px]"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <IconButton edge="start">
          <Icon icon="ion:bed" width="22" color="#0869FB" />
        </IconButton>
      </InputAdornment>
    ),
  }}
  

/>
 
<TextField
            label="Travel Date"
            variant="outlined"
            margin="normal"
            className="w-full md:w-[247px]"
            InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
type='date'
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
<div className='flex text-white justify-end mt-5 gap-x-4 md:flex-row gap-y-3 flex-col'>
  <button className="p-2 bg-[#0869FB]   rounded-md">
              Umrah Groups
            </button>
            <button className="p-2 bg-[#0869FB]   rounded-md">
              Show All
            </button>
            <button className="p-2 bg-[#0869FB]  rounded-md">
              Clear Result
            </button>
</div>


        </div>

        <div className="min-h-full   p-4 md:flex-row flex-col flex">
        <div class="bg-white rounded-lg flex flex-col sm:flex-row shadow-md md:hidden  p-6 max-w-sm">
  <div class="w-full ">
    <h2 class="text-xl font-semibold text-green-600 mb-4">Route</h2>
    <div class="space-y-2 mb-6  ">
      <div>
        <input type="checkbox" id="route1" class="mr-2" />
        <label for="route1" class="text-gray-700 text-sm">Lhe-Dxb</label>
      </div>
      <div>
        <input type="checkbox" id="route2" class="mr-2" />
        <label for="route2" class="text-gray-700 text-sm">SKT-SHJ</label>
      </div>
      <div>
        <input type="checkbox" id="route3" class="mr-2" />
        <label for="route3" class="text-gray-700 text-sm">ISB-LHR</label>
      </div>
    </div>
  </div>
  <hr class="mx-6 my-4 sm:hidden" />
  <div class="w-full sm:w-1/2">
    <h2 class="text-xl font-semibold text-green-600 mb-4">Airline</h2>
    <div class="space-y-2 ml-4">
      <div>
        <input type="checkbox" id="airline1" class="mr-2" />
        <label for="airline1" class="text-gray-700 text-sm">Serene air</label>
      </div>
      <div>
        <input type="checkbox" id="airline2" class="mr-2" />
        <label for="airline2" class="text-gray-700">Pia</label>
      </div>
      <div>
        <input type="checkbox" id="airline3" class="mr-2" />
        <label for="airline3" class="text-gray-700">Fly dubai</label>
      </div>
    </div>
  </div>
</div>



<div className="w-32 md:block hidden  p-4 border rounded-lg shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Route</h2>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="route1" className="mr-2" />
          <label htmlFor="route1" className="text-gray-700">Lhe-Dxb</label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="route2" className="mr-2" />
          <label htmlFor="route2" className="text-gray-700">SKT-SHJ</label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="route3" className="mr-2" />
          <label htmlFor="route3" className="text-gray-700">ISB-LHR</label>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Airline</h2>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="airline1" className="mr-2" />
          <label htmlFor="airline1" className="text-gray-700 text-sm">Serene air</label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="airline2" className="mr-2" />
          <label htmlFor="airline2" className="text-gray-700 text-sm">Pia</label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="airline3" className="mr-2" />
          <label htmlFor="airline3" className="text-gray-700 text-sm">Fly dubai</label>
        </div>
      </div>
    </div>





      <div className="flex flex-col w-full md:px-10">
        <div className="w-full">
          <div className="gap-2 flex flex-col md:flex-row">
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full md:max-w-full">



<div className='border rounded-md'>
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


<br />

                <div className='border rounded-md'>
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






              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

      </div>
    </div>






















   
    
      
    </>
  )
}

export default GroupTicket




