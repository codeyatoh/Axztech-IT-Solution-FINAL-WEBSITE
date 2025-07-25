import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Contact from '../pages/contact/contact';
import Products from '../pages/products/products';
import AboutUs from '../pages/aboutUs/aboutUs';

function AppRoutes({ location }) {
  return (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/aboutUs" element={<AboutUs />} />
    </Routes>
  );
}

export default AppRoutes;
