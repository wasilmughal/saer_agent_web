import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loading from "../Common/Loading";

const PackageReview = lazy(() => import("../Components/PackageDeal/PackageReview"));
const PackageDeals = lazy(() => import("../Components/PackageDeal/PackageDeals"));
const UmrahStap2 = lazy(() => import("../Components/UmrahPackegs/UmrahStap2"));
const UmrahStap1 = lazy(() => import("../Components/UmrahPackegs/UmrahStap1"));
const Travler = lazy(() => import("../Components/GroupTickets/Travler"));
const Booking1 = lazy(() => import("../Components/GroupTickets/Booking"));
const Payment = lazy(() => import("../Components/HotelVouchers/Payment"));
const Login = lazy(() => import("../Components/Login"));
const Ledger = lazy(() => import("../Components/Ledger"));
const BookingHistory = lazy(() => import("../Components/BookingHistory"));
const BankAccount = lazy(() => import("../Components/BankAccount"));
const Profile = lazy(() => import("../Components/Profile"));
const Travlers = lazy(() => import("../Components/HotelVouchers/Travlers"));
const Booking = lazy(() => import("../Components/HotelVouchers/Booking"));
const HotelVoucher = lazy(() => import("../Components/HotelVoucher"));
const GroupTicket = lazy(() => import("../Components/GroupTicket"));
const Umrahvisa = lazy(() => import("../Components/Umrah Visa/Visa"));
const UmrahPackages = lazy(() => import("../Components/UmrahPackegs/Packegs"));

function Navigate() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/ledger"
          element={
            <Suspense fallback={<Loading />}>
              <Ledger />
            </Suspense>
          }
        />
        <Route
          path="/bookinghistory"
          element={
            <Suspense fallback={<Loading />}>
              <BookingHistory />
            </Suspense>
          }
        />
        <Route
          path="/bankaccount"
          element={
            <Suspense fallback={<Loading />}>
              <BankAccount />
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<Loading />}>
              <Profile />
            </Suspense>
          }
        />
        <Route
          path="/hotelvoucher"
          element={
            <Suspense fallback={<Loading />}>
              <HotelVoucher />
            </Suspense>
          }
        />
        <Route
          path="/traveler"
          element={
            <Suspense fallback={<Loading />}>
              <Travlers />
            </Suspense>
          }
        />
        <Route
          path="/booking"
          element={
            <Suspense fallback={<Loading />}>
              <Booking />
            </Suspense>
          }
        />
        <Route
          path="/groupticket"
          element={
            <Suspense fallback={<Loading />}>
              <GroupTicket />
            </Suspense>
          }
        />
        <Route
          path="/payment"
          element={
            <Suspense fallback={<Loading />}>
              <Payment />
            </Suspense>
          }
        />
        <Route
          path="/grouptravale"
          element={
            <Suspense fallback={<Loading />}>
              <Travler />
            </Suspense>
          }
        />
        <Route
          path="/groupbooking"
          element={
            <Suspense fallback={<Loading />}>
              <Booking1 />
            </Suspense>
          }
        />
        <Route
          path="/umrah/visa"
          element={
            <Suspense fallback={<Loading />}>
              <Umrahvisa />
            </Suspense>
          }
        />
        <Route
          path="/umrah/packages"
          element={
            <Suspense fallback={<Loading />}>
              <UmrahPackages />
            </Suspense>
          }
        />
        <Route
          path="/umrah/step1"
          element={
            <Suspense fallback={<Loading />}>
              <UmrahStap1 />
            </Suspense>
          }
        />
        <Route
          path="/umrah/step2"
          element={
            <Suspense fallback={<Loading />}>
              <UmrahStap2 />
            </Suspense>
          }
        />
        <Route
          path="/packagedeal"
          element={
            <Suspense fallback={<Loading />}>
              <PackageDeals />
            </Suspense>
          }
        />
        <Route
          path="/packagereview"
          element={
            <Suspense fallback={<Loading />}>
              <PackageReview />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default Navigate;
