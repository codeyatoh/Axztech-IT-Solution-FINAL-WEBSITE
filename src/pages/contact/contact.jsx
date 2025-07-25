import React from 'react';
import Introduction from './Introduction/introduction';
import ContactForm from './ContactCard/contact';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();
  return (
    <div key={location.pathname}>
      <Introduction />
      <ContactForm />
    </div>
  );
};

export default Contact; 