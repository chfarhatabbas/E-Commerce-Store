import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../components/productsSlice';
import cartSlice from '../Components/cartSlice';
import categoriesSlice from '../Components/categoriesSlice';


const store = configureStore({
  reducer: {
    categories:  categoriesSlice.reducer,
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
