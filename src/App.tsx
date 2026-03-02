import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Restaurante from './pages/Restaurante'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer' 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante/:id" element={<Restaurante />} />
      </Routes>
      <Footer /> 
      <CartDrawer /> 
    </>
  )
}

export default App