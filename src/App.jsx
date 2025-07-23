import React from 'react'
import Header from './common/header/header'
import Footer from './common/footer/footer'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App