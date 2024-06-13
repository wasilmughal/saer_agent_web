import React, { useState } from 'react'
import aeroplane from "../assets/aeroplane.jpg"
import Input from '../Common/Input'
import Button from '../Common/Button';
import { Link } from 'react-router-dom';




function Login() {

    const [data,setData] = useState({
        email:"",
        password:""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
         // Process form data here
        console.log(formData);
      };

  return (
    <>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto justify-center  flex px-5 py-24    items-center">
    <div class="   flex flex-col   md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#3751FE]">Easy Umrah Visa, <br/>Hotels for Every Budget <span className='text-sm'>*only for umrah </span> <br />Group Ticket Deals!</h1>
      <p class="mb-8 leading-relaxed">Welcome  back! Please login to your account.</p>
      <div class="space-y-5">
     

     <Input type={"email"} placeholder={"hakeem@digital.com"} onchange={handleChange}  name={"email"} title={"Email Address"}/>
     
     <Input type={"password"} placeholder={"Password"} onchange={handleChange} name={"password"} title={"Password"}/>


    <div className='flex sm:flex-row flex-col justify-center sm:justify-between'>
        <div className='flex flex-row justify-center items-center space-x-2'>
        <input type="checkbox" />
<p>Remember me</p>
        </div>


<p>Forgot Password?</p>

    </div>


<div className='space-x-5'>
    


<Button link={"/ledger"}  type="button" label="Login" variant="solid" />



      <Button type="button" label="Sign Up" variant="outline" />

  
</div>

      </div>
    </div>




   
  </div>
</section>
    </>
  )
}

export default Login
