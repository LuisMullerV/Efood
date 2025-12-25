import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Restaurante from './pages/Restaurante'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Header from './components/Header'

export default function App() {
  return (
    <>
      <Routes>
        {/* HOME sem Header */}
        <Route path="/" element={<Home />} />

        {/* RESTAURANTE com Header */}
        <Route
          path="/restaurante/:id"
          element={
            <>
              <Header />
              <Restaurante />
            </>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
      <CartDrawer />
    </>
  )
}
