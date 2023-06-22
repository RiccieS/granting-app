import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [], // Pole studentů
  loading: false, // Příznak načítání
  error: null, // Chybová zpráva
  selectedStudent: '', // Přidán vybraný student do počátečního stavu
};

const studentSelectSlice = createSlice({
  name: 'studentSelect', // Název slicu
  initialState, // Počáteční stav
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload; // Nastaví pole studentů
    },
    setLoading: (state, action) => {
      state.loading = action.payload; // Nastaví příznak načítání
    },
    setError: (state, action) => {
      state.error = action.payload; // Nastaví chybovou zprávu
    },
    setSelectedStudent: (state, action) => {
      state.selectedStudent = action.payload; // Aktualizuje vybraného studenta
    },
  },
});

export const { setStudents, setLoading, setError, setSelectedStudent } = studentSelectSlice.actions;

export default studentSelectSlice.reducer;
