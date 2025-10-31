import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../components/productsSlice';
import cartSlice from '../Components/cartSlice';
import categoriesSlice from '../Components/categoriesSlice';


const store = configureStore({
  reducer: {
    categories:  categoriesSlice.reducer,
    products: productsReducer,
    cart: cartSlice.reducer,
  },
});

export default store;
