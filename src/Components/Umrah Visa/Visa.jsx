import React from "react";
import {
  TextField,
  Button,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../index.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

function Visa() {
  return (
    <div className="flex flex-col justify-center mx-auto">
      <div className=" flex md:flex-row flex-col sm:space-y-0 space-y-4 md:w-[80%] w-full items-center gap-2 max-w-800 sm:mx-auto lg:px-44 md:px-28 my-10 px-10 md:py-20 py-10  rounded-lg shadow-xl">
        <TextField
          label="Umrah Visa Type"
          variant="outlined"
          defaultValue="Umrah Visa With Transport With Package"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton edge="start">
                  <Icon icon="ion:bed" width="24" height="24" color="#0869FB" />
                </IconButton>
              </InputAdornment>
            ),
          }}
          fullWidth // Ensures that the TextField takes up all available width
        />
        <TextField
          label="Total Passengers"
          variant="outlined"
          defaultValue="2-adult-1-child"
          fullWidth // Ensures that the TextField takes up all available width
        />

        <button className="px-6 py-3 bg-[#0869FB] text-white font-semibold rounded-md">
<Link to={"/umrah/step1"}>    Search        </Link>
          
        </button>
        {/* <Button variant="contained" color="primary" style={{padding:3}}>
      Search
    </Button> */}
      </div>

      <div className="bg-[#62A7FF] w-full h-1"></div>
      


      <div className="my-8 sm:px-14 px-8">
      <h1 className="my-4 font-bold md:text-2xl text-lg">Umrah Packages Deals</h1>

      <Swiper
      spaceBetween={30}
      freeMode={true}
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1, // For extra small screens
        },
        640: {
          slidesPerView: 1, // For small screens
        },
        768: {
          slidesPerView: 2, // For medium screens
        },
        531: {
            slidesPerView: 2, // For medium screens
          },
        1024: {
          slidesPerView: 3, // For large screens and above
        },
      }}
      className="mySwiper"
    >
        <SwiperSlide>
          <div className="lg:w-[387px] md:w-[300px] w-[230px] h-[173px] rounded-lg">
            <img
              src="https://s3-alpha-sig.figma.com/img/9f81/e3c3/887a2581e944c9348ede2f011db22243?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUvtzUgUrTfUUEw8-GyB24k6mOHQ-wF52V3e5SgWWlbPADjhSpi-8J6BC8kCZaSQn0Kl6k7mOwP1be2OkflQ7J8v5CKzHXcyBu286OLKp0mqNiG9cIyhgZvc8FToTz7hFaE9jwFOhJK4hGZbn-nVVlv~VyvGYymCrcB0RzH-jW8r~ScDDOaBfctI8otcdRGI2fZYTx6aGA2WEx-7ycplD~9hYLT6dOoqlt174g90KSbG6wahjhDePqlGurYgZ10dEqpQ2Xi0vH1xXhIiCA8yI3LwVerTmM5hzyV53G2s8mPU-TqZhxi4kGqfMAfTgrpM8BLxtLIZkZZiZ-s0znSWLQ__"
              alt="..."
              className="w-[387px] h-[173px] rounded-xl"
            />
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
          <div className="lg:w-[387px] md:w-[300px] w-[210px] h-[173px] rounded-lg">
            <img
              src="https://s3-alpha-sig.figma.com/img/9f81/e3c3/887a2581e944c9348ede2f011db22243?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUvtzUgUrTfUUEw8-GyB24k6mOHQ-wF52V3e5SgWWlbPADjhSpi-8J6BC8kCZaSQn0Kl6k7mOwP1be2OkflQ7J8v5CKzHXcyBu286OLKp0mqNiG9cIyhgZvc8FToTz7hFaE9jwFOhJK4hGZbn-nVVlv~VyvGYymCrcB0RzH-jW8r~ScDDOaBfctI8otcdRGI2fZYTx6aGA2WEx-7ycplD~9hYLT6dOoqlt174g90KSbG6wahjhDePqlGurYgZ10dEqpQ2Xi0vH1xXhIiCA8yI3LwVerTmM5hzyV53G2s8mPU-TqZhxi4kGqfMAfTgrpM8BLxtLIZkZZiZ-s0znSWLQ__"
              alt="..."
              className="w-[387px] h-[173px] rounded-xl"
            />
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="lg:w-[387px] md:w-[300px] w-[210px] h-[173px] rounded-lg">
            <img
              src="https://s3-alpha-sig.figma.com/img/9f81/e3c3/887a2581e944c9348ede2f011db22243?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUvtzUgUrTfUUEw8-GyB24k6mOHQ-wF52V3e5SgWWlbPADjhSpi-8J6BC8kCZaSQn0Kl6k7mOwP1be2OkflQ7J8v5CKzHXcyBu286OLKp0mqNiG9cIyhgZvc8FToTz7hFaE9jwFOhJK4hGZbn-nVVlv~VyvGYymCrcB0RzH-jW8r~ScDDOaBfctI8otcdRGI2fZYTx6aGA2WEx-7ycplD~9hYLT6dOoqlt174g90KSbG6wahjhDePqlGurYgZ10dEqpQ2Xi0vH1xXhIiCA8yI3LwVerTmM5hzyV53G2s8mPU-TqZhxi4kGqfMAfTgrpM8BLxtLIZkZZiZ-s0znSWLQ__"
              alt="..."
              className="w-[387px] h-[173px] rounded-xl"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="lg:w-[387px] md:w-[300px] w-[210px] h-[173px] rounded-lg">
            <img
              src="https://s3-alpha-sig.figma.com/img/9f81/e3c3/887a2581e944c9348ede2f011db22243?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUvtzUgUrTfUUEw8-GyB24k6mOHQ-wF52V3e5SgWWlbPADjhSpi-8J6BC8kCZaSQn0Kl6k7mOwP1be2OkflQ7J8v5CKzHXcyBu286OLKp0mqNiG9cIyhgZvc8FToTz7hFaE9jwFOhJK4hGZbn-nVVlv~VyvGYymCrcB0RzH-jW8r~ScDDOaBfctI8otcdRGI2fZYTx6aGA2WEx-7ycplD~9hYLT6dOoqlt174g90KSbG6wahjhDePqlGurYgZ10dEqpQ2Xi0vH1xXhIiCA8yI3LwVerTmM5hzyV53G2s8mPU-TqZhxi4kGqfMAfTgrpM8BLxtLIZkZZiZ-s0znSWLQ__"
              alt="..."
              className="w-[387px] h-[173px] rounded-xl"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="lg:w-[387px] md:w-[300px] w-[210px] h-[173px] rounded-lg">
            <img
              src="https://s3-alpha-sig.figma.com/img/9f81/e3c3/887a2581e944c9348ede2f011db22243?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUvtzUgUrTfUUEw8-GyB24k6mOHQ-wF52V3e5SgWWlbPADjhSpi-8J6BC8kCZaSQn0Kl6k7mOwP1be2OkflQ7J8v5CKzHXcyBu286OLKp0mqNiG9cIyhgZvc8FToTz7hFaE9jwFOhJK4hGZbn-nVVlv~VyvGYymCrcB0RzH-jW8r~ScDDOaBfctI8otcdRGI2fZYTx6aGA2WEx-7ycplD~9hYLT6dOoqlt174g90KSbG6wahjhDePqlGurYgZ10dEqpQ2Xi0vH1xXhIiCA8yI3LwVerTmM5hzyV53G2s8mPU-TqZhxi4kGqfMAfTgrpM8BLxtLIZkZZiZ-s0znSWLQ__"
              alt="..."
              className="w-[387px] h-[173px] rounded-xl"
            />
          </div>
        </SwiperSlide>

      </Swiper>


      </div>

    </div>
  );
}

export default Visa;
