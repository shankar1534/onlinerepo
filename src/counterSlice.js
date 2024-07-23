// src/features/counter/counterSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

// Export the action created by the slice
export const { increment } = counterSlice.actions;

// Export the reducer to be used in the store
export default counterSlice.reducer;
