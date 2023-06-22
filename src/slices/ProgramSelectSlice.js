import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  programNames: [], // Názvy programů
  selectedProgram: 'none', // Vybraný program (výchozí hodnota: none)
};

const programSelectSlice = createSlice({
  name: 'programSelect', // Název slicu
  initialState, // Počáteční stav
  reducers: {
    setProgramNames: (state, action) => {
      state.programNames = action.payload; // Nastaví názvy programů
    },
    setSelectedProgram: (state, action) => {
      state.selectedProgram = action.payload; // Nastaví vybraný program
    },
  },
});

export const { setProgramNames, setSelectedProgram } = programSelectSlice.actions;

export default programSelectSlice.reducer;
