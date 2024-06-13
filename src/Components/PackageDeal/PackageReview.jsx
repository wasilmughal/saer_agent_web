import React from "react";
import travel from "../../assets/travel.png"
import booking from "../../assets/booking.png"
import payment from "../../assets/payment.png"
import { Link } from "react-router-dom";




function PackageReview() {
  return (
    <div>


<div className="container mx-auto justify-items-center grid mt-10 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4">
        <img src={booking} alt="booking" className="w-auto h-auto object-cover" />
        <img src={travel} alt="travel" className="w-auto h-auto object-cover" />
        <img src={payment} alt="payment" className="w-auto h-auto object-cover" />
      </div>




      <div className="container mx-auto shadow-xl rounded-md space-y-6 py-5">
        <h1 className="text-2xl font-bold  m-5 my-4 text-[#112211]">
        Umrah Package Deal
        </h1>

        <img className='md:h-96 h-64 w-64 rounded-md mx-auto my-5 md:w-96' src="https://s3-alpha-sig.figma.com/img/9f81/e3c3/887a2581e944c9348ede2f011db22243?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUvtzUgUrTfUUEw8-GyB24k6mOHQ-wF52V3e5SgWWlbPADjhSpi-8J6BC8kCZaSQn0Kl6k7mOwP1be2OkflQ7J8v5CKzHXcyBu286OLKp0mqNiG9cIyhgZvc8FToTz7hFaE9jwFOhJK4hGZbn-nVVlv~VyvGYymCrcB0RzH-jW8r~ScDDOaBfctI8otcdRGI2fZYTx6aGA2WEx-7ycplD~9hYLT6dOoqlt174g90KSbG6wahjhDePqlGurYgZ10dEqpQ2Xi0vH1xXhIiCA8yI3LwVerTmM5hzyV53G2s8mPU-TqZhxi4kGqfMAfTgrpM8BLxtLIZkZZiZ-s0znSWLQ" alt="" />


        <div className="mx-4 lg:mx-10 shadow-lg border rounded-md py-8">
          <div className="px-4 lg:px-10">
            <h1 className="text-[#112211] text-xl font-bold my-2">
              Passenger Details
            </h1>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center my-8">
              <div className="text-center lg:text-left">
                <span className="font-semibold text-md">Passenger Name</span>
                <br />
                <span className="font-semibold text-md">MR.Ahsan Raza</span>
              </div>

              <button className="bg-[#0869FB] px-8 h-[44px] text-sm rounded-md text-white">
                See Passport
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center">
              <div className="text-center lg:text-left">
                <span className="font-semibold text-md">Passenger Name</span>
                <br />
                <span className="font-semibold text-md">MR.Ahsan Raza</span>
              </div>

              <button className="bg-[#0869FB] px-8 h-[44px] text-sm rounded-md text-white">
                See Passport
              </button>
            </div>
          </div>
        </div>

        <div className="mx-4 lg:mx-10 shadow-md border rounded-md py-8">
          <div className="px-4 lg:px-10">
            <h1 className="text-[#112211] text-xl font-bold my-2">
              Total Payment
            </h1>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center my-4">
              <div className="text-center lg:text-left">
                <span className="font-semibold text-md">
                  Umrah Visa With transport and package
                </span>
                <br />
                <span className="font-normal text-md">51,000/. x 2 Pex</span>
              </div>

              <div className="text-center lg:text-left">
                <span className="font-semibold text-md">
                  Total Amount RS.51,114/.
                </span>
                <br />
                <span className="font-normal text-md">51,000/. x 2 Pex</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end py-5 px-10">
          <button  className="bg-[#0869FB] px-10 h-[44px] text-sm rounded-md text-white">
            <Link to={"/payment"}>Next</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackageReview;
