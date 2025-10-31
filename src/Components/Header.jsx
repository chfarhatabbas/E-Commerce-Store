import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'  // Optional (install: npm i lucide-react)

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShopEase
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-blue-600 ${isActive ? 'text-blue-600' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `hover:text-blue-600 ${isActive ? 'text-blue-600' : ''}`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/category"
            className={({ isActive }) =>
              `hover:text-blue-600 ${isActive ? 'text-blue-600' : ''}`
            }
          >
            Categories
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `hover:text-blue-600 ${isActive ? 'text-blue-600' : ''}`
            }
          >
            Cart
          </NavLink>
        </nav>

        {/* Cart Icon */}
        <Link to="/cart" className="relative text-gray-700 hover:text-blue-600">
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            0
          </span>
        </Link>
      </div>
    </header>
  )
}

export default Header
