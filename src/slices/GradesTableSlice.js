import { createSlice } from '@reduxjs/toolkit';

const gradesTableSlice = createSlice({
  name: 'gradesTable',
  initialState: [],
  reducers: {
    loadClassification: (state, action) => {
      state = action.payload
      return state
    },
  },
});

export const { loadClassification } = gradesTableSlice.actions;

export default gradesTableSlice.reducer;