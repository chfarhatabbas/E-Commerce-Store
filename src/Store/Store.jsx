import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../Components/productsSlice';
import cartReducer from '../Components/cartSlice';
import categoriesReducer from '../Components/categoriesSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    categories: categoriesReducer,
  },
});

export default store;
