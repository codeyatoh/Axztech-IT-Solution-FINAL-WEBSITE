import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/home/home';
import About from '../pages/about/about';
import Product from '../pages/product/product';
import Contact from '../pages/contact/contact';

function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
