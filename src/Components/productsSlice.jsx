import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch all products
export const fetchAllProducts = createAsyncThunk(
  'products/fetchAll',
  async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    return await res.json();
  }
);

// Fetch products by category
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
      // All products
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch all products';
      })

      // Products by category
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch products by category';
      });
  },
});

export default productsSlice.reducer;
