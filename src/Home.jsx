import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* ====================== HERO SECTION ====================== */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Text Content */}
          <div className="md:w-1/2 space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Discover Amazing Deals on Top Products
            </h1>
            <p className="text-lg text-blue-100">
              Shop the latest collections, preloved treasures, and exclusive
              discounts — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link
                to="/products"
                className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
              >
                Shop Now
              </Link>
              <Link
                to="/category"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
              >
                Browse Categories
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Shopping"
              className="h-100 w-80 rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ====================== CATEGORY HIGHLIGHTS ====================== */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Shop by Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Top Selling */}
          <Link
            to="/category/top-selling"
            className="relative group overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDAwq6Ez72TLTCGc2TKNFvDZiJIV8dgrZlFQ&s"
              alt="Top Selling"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-2xl font-semibold text-white group-hover:text-blue-300">
                Top Selling
              </h3>
            </div>
          </Link>

          {/* Discounts */}
          <Link
            to="/category/discounts"
            className="relative group overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Discounts"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-2xl font-semibold text-white group-hover:text-blue-300">
                Discounts
              </h3>
            </div>
          </Link>

          {/* Preloved */}
          <Link
            to="/category/preloved"
            className="relative group overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Preloved"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-2xl font-semibold text-white group-hover:text-blue-300">
                Preloved
              </h3>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
