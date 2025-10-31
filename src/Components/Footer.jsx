import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">ShopEase</h2>
          <p className="text-sm">
            Your one-stop shop for great deals and quality products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/products" className="hover:text-blue-400">Products</a></li>
            <li><a href="/category" className="hover:text-blue-400">Categories</a></li>
            <li><a href="/cart" className="hover:text-blue-400">Cart</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
          <p className="text-sm">Email: support@shopease.com</p>
          <p className="text-sm">Phone: +1 (555) 123-4567</p>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
