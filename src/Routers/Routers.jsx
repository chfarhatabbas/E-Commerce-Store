import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Products from '../Components/Products'

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </div>
  )
}

export default Routers
