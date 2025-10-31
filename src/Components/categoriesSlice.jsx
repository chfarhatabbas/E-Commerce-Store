import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    return await res.json();
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to load categories';
      });
  },
});

export default categoriesSlice.reducer;
