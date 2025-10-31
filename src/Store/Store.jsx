import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../components/categoriesSlice';
import productsReducer from '../components/productsSlice';
import cartReducer from '../components/cartSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
