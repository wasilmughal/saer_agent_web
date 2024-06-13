import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function Footer() {
  return (
    <>
      <footer class="text-white bg-[#0869FB] body-font">
  <div class="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center  ">
       
        <span class=" font-semibold text-xl">Open Designers</span>
      </a>
      <p class="mt-2 text-sm ">Open source is source code that is made freely available for possible modification and redistribution. Products include permission to use the source code, design documents, or content of the product.</p>
  
<div className='flex space-x-3 justify-center sm:justify-start my-4'>
    
<Icon height={"19"} width={"19"} icon="mdi:instagram" />
<Icon icon="ic:outline-facebook" height={"19"} width={"19"} />
<Icon icon="mdi:twitter" height={"19"} width={"19"} />
    
    </div>  
    </div>





    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold text-lg  mb-3">Company</h2>
        <nav class="list-none leading-[45px] mb-10 font-bold">
          <li>
            <a class="">Home</a>
          </li>
          <li>
            <a class="">Contact Us</a>
          </li>
          <li>
            <a class="">About Us</a>
          </li>
          
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold text-lg  mb-3">Innovate</h2>
        <nav class="list-none leading-[45px] mb-10 font-bold">
          <li>
            <a class="">Tags</a>
          </li>
          <li>
            <a class="">API</a>
          </li>
          <li>
            <a class="">Places</a>
          </li>
          
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold text-lg  mb-3">About</h2>
        <nav class="list-none leading-[45px] mb-10 font-bold">
          <li>
            <a class="">Community</a>
          </li>
          <li>
            <a class="">Designers</a>
          </li>
          <li>
            <a class="">Support</a>
          </li>
          
        </nav>
      </div>

    
    </div>



  </div>
  <div class="bg-white">
    <div class="container mx-auto py-2 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class=" text-black text-sm text-center font-semibold sm:text-left">All Rights Reserved</p>
     
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer
