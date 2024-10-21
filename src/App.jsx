import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './TailwindBlocks/pages/LandingPage'
import CartPage from './TailwindBlocks/pages/CartPage'
import Orders from './TailwindBlocks/pages/Orders'
import NavBarSection from './TailwindBlocks/components/NavBarSection'
import IceCreamMenu from './TailwindBlocks/pages/Menu'
import { CartProvider } from './TailwindBlocks/pages/CartContext'
import OrdersPage from './TailwindBlocks/pages/Orders'
import SuccessPage from './TailwindBlocks/pages/successmessage'

const App = () => {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBarSection />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/cart" element={<CartPage />} />
            <Route exact path="/orders" element={<OrdersPage />} />
            <Route exact path="/menu" element={<IceCreamMenu />} />
            <Route exact path="/success" element={<SuccessPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App