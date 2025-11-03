import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductsByCategory, fetchAllProducts } from './productsSlice';
import { addToCart } from './cartSlice';

const Products = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (category) {
      dispatch(fetchProductsByCategory(category));
    } else {
      dispatch(fetchAllProducts());
    }
  }, [dispatch, category]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold capitalize mb-6">
        {category ? category : 'All Products'}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4 flex flex-col">
            <img
              src={product.image}
              alt={product.title}
              className="h-48 object-contain mb-4"
            />
            <h3 className="font-semibold text-gray-800 mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="mt-auto bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
