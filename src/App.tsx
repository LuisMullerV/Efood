import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Restaurante from './pages/Restaurante'
import Header from './components/Header'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante/:id" element={<Restaurante />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <CartDrawer />
    </>
  )
}
