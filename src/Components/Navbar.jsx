import React from 'react'
import logo from '../assets/logo.png'




function Navbar() {
  return (
    <>

<header class="text-white bg-[#0869FB] body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={logo} alt="logo" className='w-44' />

      
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap font-bold space-x-12 items-center text-sm justify-center">
      <a class="mr-5 hover:text-gray-900">Home</a>
      <a class="mr-5 hover:text-gray-900">About</a>
      <a class="mr-5 hover:text-gray-900">Content</a>
      
    </nav>
    <button class="inline-flex items-center text-[#0869FB] font-semibold bg-white border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">Get started
    </button>
  </div>
</header>

      
    </>
  )
}

export default Navbar
