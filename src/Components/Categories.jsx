import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from './categoriesSlice';
import { Link } from 'react-router-dom';

const Categories = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {list.map((cat) => (
          <Link
            key={cat}
            to={`/products/${cat}`}
            className="bg-white border rounded-lg shadow p-6 text-center hover:bg-blue-50 transition capitalize"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
