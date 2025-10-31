// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'; // Assuming you have a slice

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your reducers here
    // Add other reducers as needed
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;