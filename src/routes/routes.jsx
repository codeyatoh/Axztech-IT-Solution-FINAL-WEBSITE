import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Contact from '../pages/contact/contact';
import Products from '../pages/products/products';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default AppRoutes;
