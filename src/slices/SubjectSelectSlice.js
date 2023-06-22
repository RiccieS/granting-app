import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subjectNames: [], // Pole názvů předmětů
  classificationsData: [], // Pole klasifikačních dat
  selectedSubject: [], // Vybraný předmět
};

const subjectSemesterSelectSlice = createSlice({
  name: 'subjectSemesterSelect', // Název slicu
  initialState, // Počáteční stav
  reducers: {
    setSubjectNames: (state, action) => {
      state.subjectNames = action.payload; // Nastaví pole názvů předmětů
    },
    setSelectedSubject: (state, action) => {
      state.selectedSubject = action.payload; // Nastaví vybraný předmět
    },
    setClassificationsData: (state, action) => {
      state.classificationsData = action.payload; // Nastaví pole klasifikačních dat
    },
  },
});

export const { setSubjectNames, setSelectedSubject, setClassificationsData } = subjectSemesterSelectSlice.actions;

export default subjectSemesterSelectSlice.reducer;
