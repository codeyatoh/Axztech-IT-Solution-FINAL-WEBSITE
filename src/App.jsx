import React from 'react'
import Header from './common/header/header'
import Footer from './common/footer/footer'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1, paddingTop: 80 }}>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App