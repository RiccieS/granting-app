import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
  loading: false,
  error: null,
  selectedStudent: '', // Add selectedStudent field to the initial state
};

const studentSelectSlice = createSlice({
  name: 'studentSelect',
  initialState,
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSelectedStudent: (state, action) => {
      state.selectedStudent = action.payload; // Update the selectedStudent field
    },
  },
});

export const { setStudents, setLoading, setError, setSelectedStudent } = studentSelectSlice.actions;

export default studentSelectSlice.reducer;