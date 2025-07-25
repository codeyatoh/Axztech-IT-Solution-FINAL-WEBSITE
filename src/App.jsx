import React from 'react'
import Header from './common/header/header'
import Footer from './common/footer/footer'
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AppRoutes from './routes/routes';

function App() {
  const location = useLocation();
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, paddingTop: 80 }}>
        <AnimatePresence mode="wait">
          <AppRoutes location={location} key={location.pathname} />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App