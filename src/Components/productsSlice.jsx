import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchByCategory',
  async (category) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return await res.json();
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch products';
      });
  },
});

export default productsSlice.reducer;
