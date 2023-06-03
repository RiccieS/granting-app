
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
  loading: true,
  error: null,
};

const StudentSelectSlice = createSlice({
  name: 'studentSelect',
  initialState,
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setStudents, setLoading, setError } = StudentSelectSlice.actions;

export default StudentSelectSlice.reducer;