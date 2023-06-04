import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Define your initial state here
};

const gradesTableSlice = createSlice({
  name: 'gradesTable',
  initialState,
  reducers: {
    // Define your reducer actions here
  },
});

export const { /* Export your reducer actions */ } = gradesTableSlice.actions;

export default gradesTableSlice.reducer;