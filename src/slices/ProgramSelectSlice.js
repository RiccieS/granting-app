import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  programNames: [],
  selectedProgram: 'none',
};

const programSelectSlice = createSlice({
  name: 'programSelect',
  initialState,
  reducers: {
    setProgramNames: (state, action) => {
      state.programNames = action.payload;
    },
    setSelectedProgram: (state, action) => {
      state.selectedProgram = action.payload;
    },
  },
});

export const { setProgramNames, setSelectedProgram} = programSelectSlice.actions;

export default programSelectSlice.reducer;