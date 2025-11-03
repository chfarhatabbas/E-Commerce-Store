import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Products from '../Components/Products'
import Categories from '../Components/Categories'
import Cart from '../Components/Cart'

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/categories" element={<Categories />} />

        {/* ✅ Add this line to handle /products */}
        <Route path="/products" element={<Products />} />

        {/* Existing route for category-specific products */}
        <Route path="/products/:category" element={<Products />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default Routers
