import { createSlice } from '@reduxjs/toolkit';

const gradesTableSlice = createSlice({
  name: 'gradesTable',
  initialState: [],
  reducers: {
    loadClassification: (state, action) => {
      state = action.payload
      return state
    },

    updateClassification: (state, action) => {
      const newTable = state.map((user) => user.result.id === action.payload.result.id ? action.payload : user)

      state = newTable;
      return state;
    },
  },
});

export const { loadClassification, updateClassification } = gradesTableSlice.actions;

export default gradesTableSlice.reducer;