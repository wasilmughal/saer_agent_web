import React from 'react'
import UmrahStap1 from './UmrahStap1';
import UmrahStap2 from './UmrahStap2';
import { Link } from 'react-router-dom';


const images = [
  { src: 'https://s3-alpha-sig.figma.com/img/9f81/e3c3/887a2581e944c9348ede2f011db22243?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUvtzUgUrTfUUEw8-GyB24k6mOHQ-wF52V3e5SgWWlbPADjhSpi-8J6BC8kCZaSQn0Kl6k7mOwP1be2OkflQ7J8v5CKzHXcyBu286OLKp0mqNiG9cIyhgZvc8FToTz7hFaE9jwFOhJK4hGZbn-nVVlv~VyvGYymCrcB0RzH-jW8r~ScDDOaBfctI8otcdRGI2fZYTx6aGA2WEx-7ycplD~9hYLT6dOoqlt174g90KSbG6wahjhDePqlGurYgZ10dEqpQ2Xi0vH1xXhIiCA8yI3LwVerTmM5hzyV53G2s8mPU-TqZhxi4kGqfMAfTgrpM8BLxtLIZkZZiZ-s0znSWLQ__', alt: 'Beach with palm trees and turquoise water' },
  { src: 'https://s3-alpha-sig.figma.com/img/9f81/e3c3/887a2581e944c9348ede2f011db22243?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUvtzUgUrTfUUEw8-GyB24k6mOHQ-wF52V3e5SgWWlbPADjhSpi-8J6BC8kCZaSQn0Kl6k7mOwP1be2OkflQ7J8v5CKzHXcyBu286OLKp0mqNiG9cIyhgZvc8FToTz7hFaE9jwFOhJK4hGZbn-nVVlv~VyvGYymCrcB0RzH-jW8r~ScDDOaBfctI8otcdRGI2fZYTx6aGA2WEx-7ycplD~9hYLT6dOoqlt174g90KSbG6wahjhDePqlGurYgZ10dEqpQ2Xi0vH1xXhIiCA8yI3LwVerTmM5hzyV53G2s8mPU-TqZhxi4kGqfMAfTgrpM8BLxtLIZkZZiZ-s0znSWLQ__', alt: 'Beach sunset' },
  { src: 'https://s3-alpha-sig.figma.com/img/9f81/e3c3/887a2581e944c9348ede2f011db22243?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUvtzUgUrTfUUEw8-GyB24k6mOHQ-wF52V3e5SgWWlbPADjhSpi-8J6BC8kCZaSQn0Kl6k7mOwP1be2OkflQ7J8v5CKzHXcyBu286OLKp0mqNiG9cIyhgZvc8FToTz7hFaE9jwFOhJK4hGZbn-nVVlv~VyvGYymCrcB0RzH-jW8r~ScDDOaBfctI8otcdRGI2fZYTx6aGA2WEx-7ycplD~9hYLT6dOoqlt174g90KSbG6wahjhDePqlGurYgZ10dEqpQ2Xi0vH1xXhIiCA8yI3LwVerTmM5hzyV53G2s8mPU-TqZhxi4kGqfMAfTgrpM8BLxtLIZkZZiZ-s0znSWLQ__', alt: 'Beach with a couple walking hand-in-hand' },
  { src: 'https://s3-alpha-sig.figma.com/img/9f81/e3c3/887a2581e944c9348ede2f011db22243?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUvtzUgUrTfUUEw8-GyB24k6mOHQ-wF52V3e5SgWWlbPADjhSpi-8J6BC8kCZaSQn0Kl6k7mOwP1be2OkflQ7J8v5CKzHXcyBu286OLKp0mqNiG9cIyhgZvc8FToTz7hFaE9jwFOhJK4hGZbn-nVVlv~VyvGYymCrcB0RzH-jW8r~ScDDOaBfctI8otcdRGI2fZYTx6aGA2WEx-7ycplD~9hYLT6dOoqlt174g90KSbG6wahjhDePqlGurYgZ10dEqpQ2Xi0vH1xXhIiCA8yI3LwVerTmM5hzyV53G2s8mPU-TqZhxi4kGqfMAfTgrpM8BLxtLIZkZZiZ-s0znSWLQ__', alt: 'Beach with a starfish' },
  { src: 'https://s3-alpha-sig.figma.com/img/9f81/e3c3/887a2581e944c9348ede2f011db22243?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUvtzUgUrTfUUEw8-GyB24k6mOHQ-wF52V3e5SgWWlbPADjhSpi-8J6BC8kCZaSQn0Kl6k7mOwP1be2OkflQ7J8v5CKzHXcyBu286OLKp0mqNiG9cIyhgZvc8FToTz7hFaE9jwFOhJK4hGZbn-nVVlv~VyvGYymCrcB0RzH-jW8r~ScDDOaBfctI8otcdRGI2fZYTx6aGA2WEx-7ycplD~9hYLT6dOoqlt174g90KSbG6wahjhDePqlGurYgZ10dEqpQ2Xi0vH1xXhIiCA8yI3LwVerTmM5hzyV53G2s8mPU-TqZhxi4kGqfMAfTgrpM8BLxtLIZkZZiZ-s0znSWLQ__', alt: 'Beach with a volleyball net' },
  { src: 'https://s3-alpha-sig.figma.com/img/9f81/e3c3/887a2581e944c9348ede2f011db22243?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUvtzUgUrTfUUEw8-GyB24k6mOHQ-wF52V3e5SgWWlbPADjhSpi-8J6BC8kCZaSQn0Kl6k7mOwP1be2OkflQ7J8v5CKzHXcyBu286OLKp0mqNiG9cIyhgZvc8FToTz7hFaE9jwFOhJK4hGZbn-nVVlv~VyvGYymCrcB0RzH-jW8r~ScDDOaBfctI8otcdRGI2fZYTx6aGA2WEx-7ycplD~9hYLT6dOoqlt174g90KSbG6wahjhDePqlGurYgZ10dEqpQ2Xi0vH1xXhIiCA8yI3LwVerTmM5hzyV53G2s8mPU-TqZhxi4kGqfMAfTgrpM8BLxtLIZkZZiZ-s0znSWLQ__', alt: 'Beach with a group of kids playing' },
];
function Packegs() {


  
    


  return (
    <>
    <div className='sm:mx-14 mx-4 flex flex-col justify-center'>
<div className='mb-7'>
    <h1 className="my-4 font-bold md:text-2xl text-xl text-center text-[#303030]">Umrah Packages Deals</h1>


    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
            <div className='flex flex-col '>
          <img key={index} src={image.src} alt={image.alt} className="rounded-lg shadow-md object-cover  sm:h-[340px] h-[300px] " />
          <button className='bg-[#0869FB] rounded-md my-2 py-2 font-semibold text-white'><Link to={"/packagedeal"}>Continue</Link></button>
            </div>

       ))}
      </div>
    </div>



</div>
    
        
    </div>

{/* <UmrahStap1/> */}
{/* <UmrahStap2/> */}

</>

  )
}

export default Packegs