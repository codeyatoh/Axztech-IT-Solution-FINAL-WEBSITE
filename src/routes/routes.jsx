import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Contact from '../pages/contact/contact';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
