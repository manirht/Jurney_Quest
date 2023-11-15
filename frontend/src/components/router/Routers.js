import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Tours from "../Pages/Tours";
import TourDetails from "../Pages/TourDetails";
import SearchResultList from "../Pages/SearchResultList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ThankYou from "../Pages/ThankYou";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route
        path="/tours/search/getTourBySearch"
        element={<SearchResultList />}
      />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routers;
