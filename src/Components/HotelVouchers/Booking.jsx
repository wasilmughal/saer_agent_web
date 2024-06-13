import React from 'react';
import travel from "../../assets/travel.png";
import booking from "../../assets/booking.png";
import payment from "../../assets/payment.png";
import { Link } from 'react-router-dom';

const Booking = () => {
  const passengers = [
    {
      name: 'Ali Raza',
      passportNumber: 'E12345678',
      mobileNumber: '0123456789',
      mofaNumber: '123456',
      mofaIssueAgent: 'ABC Travel',
      familyHead: 'Ahmed Raza',
    },


    {
        name: 'Ali Raza',
        passportNumber: 'E12345678',
        mobileNumber: '0123456789',
        mofaNumber: '123456',
        mofaIssueAgent: 'ABC Travel',
      },
      {
        name: 'Ali Raza',
        passportNumber: 'E12345678',
        mobileNumber: '0123456789',
        mofaNumber: '123456',
        mofaIssueAgent: 'ABC Travel',
      },
    

    // Add more passengers if needed
  ];

  const makkahHotel = {
    name: 'XYZ Hotel',
    checkIn: '01-01-2024',
    checkOut: '05-01-2024',
    specialRequest: 'None',
    rate: '$100 / night',
  };

  const madinaHotel = {
    name: 'ABC Hotel',
    checkIn: '06-01-2024',
    checkOut: '10-01-2024',
    specialRequest: 'None',
    rate: '$100 / night',
  };

  const transportDetails = {
    type: 'Bus',
    sector: 'Makkah to Madina',
    rate: 'Included in package',
  };

  const flightDetails = {
    airline: 'XYZ Airlines',
    sector: 'Home to Destination',
    travelDate: '01-01-2024, 10:00 AM',
    returnDate: '10-01-2024, 08:00 PM',
  };

  const totalPayment = {
    makkahHotel: '$400',
    madinaHotel: '$400',
    totalAmount: '$800',
  };

  return (
    <>
      <div className="container mx-auto justify-items-center grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4">
        <img src={booking} alt="booking" className="w-auto h-auto object-cover" />
        <img src={travel} alt="travel" className="w-auto h-auto object-cover" />
        <img src={payment} alt="payment" className="w-auto h-auto object-cover" />
      </div>

      <div className="container mx-auto p-4">
        <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <h2 className="text-xl font-bold mb-4">Passengers Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {passengers.map((passenger, index) => (
              <div key={index} className="border p-2 rounded-lg">
                <p><strong>Passenger Name:</strong> {passenger.name}</p>
                <p><strong>Enter Passport Number:</strong> {passenger.passportNumber}</p>
                <p><strong>Mobile Number:</strong> {passenger.mobileNumber}</p>
                <p><strong>Mofa Number:</strong> {passenger.mofaNumber}</p>
                <p><strong>Mofa Issue Agent:</strong> {passenger.mofaIssueAgent}</p>
                <p><strong>Family Head:</strong> {passenger.familyHead}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <h2 className="text-xl font-bold mb-4">Makkah Hotel Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border p-2 rounded-lg">
              <p><strong>Hotel Name:</strong> {makkahHotel.name}</p>
              <p><strong>Check In:</strong> {makkahHotel.checkIn}</p>
              <p><strong>Check Out:</strong> {makkahHotel.checkOut}</p>
              <p><strong>Special Request:</strong> {makkahHotel.specialRequest}</p>
              <p><strong>Rate:</strong> {makkahHotel.rate}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <h2 className="text-xl font-bold mb-4">Madina Hotel Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border  p-2 rounded-lg">
              <p><strong>Hotel Name:</strong> {madinaHotel.name}</p>
              <p><strong>Check In:</strong> {madinaHotel.checkIn}</p>
              <p><strong>Check Out:</strong> {madinaHotel.checkOut}</p>
              <p><strong>Special Request:</strong> {madinaHotel.specialRequest}</p>
              <p><strong>Rate:</strong> {madinaHotel.rate}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <h2 className="text-xl font-bold mb-4">Transport Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border p-2 rounded-lg">
              <p><strong>Transport Type:</strong> {transportDetails.type}</p>
              <p><strong>Transport Sector:</strong> {transportDetails.sector}</p>
              <p><strong>Rate:</strong> {transportDetails.rate}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <h2 className="text-xl font-bold mb-4">Flight Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border p-2 rounded-lg">
              <p><strong>Airline Name:</strong> {flightDetails.airline}</p>
              <p><strong>Sector:</strong> {flightDetails.sector}</p>
              <p><strong>Travel Date and Time:</strong> {flightDetails.travelDate}</p>
              <p><strong>Return Date and Time:</strong> {flightDetails.returnDate}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Total Payment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border p-2 rounded-lg">
              <p><strong>Makkah Hotel:</strong> {totalPayment.makkahHotel}</p>
              <p><strong>Madina Hotel:</strong> {totalPayment.madinaHotel}</p>
              <p><strong>Total Amount for This Voucher:</strong> {totalPayment.totalAmount}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">Back Edit</button>
          <Link to={"/payment"}>
          
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Create Voucher</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Booking;
