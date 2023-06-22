import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSemester: 'all', // Vybraný semestr
};

const semesterSelectSlice = createSlice({
  name: 'semesterSelect', // Název slicu
  initialState, // Počáteční stav
  reducers: {
    setSelectedSemester: (state, action) => {
      state.selectedSemester = action.payload; // Nastaví vybraný semestr
      console.log(action.payload); // Vypíše vybraný semestr do konzole
    },
  },
});

export const { setSelectedSemester } = semesterSelectSlice.actions;

export default semesterSelectSlice.reducer;
