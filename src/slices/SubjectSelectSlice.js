import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subjectNames: [],
  selectedSubject: 'none',
};

const subjectSelectSlice = createSlice({
  name: 'subjectSelect',
  initialState,
  reducers: {
    setSubjectNames: (state, action) => {
      state.subjectNames = action.payload;
    },
    setSelectedSubject: (state, action) => {
      state.selectedSubject = action.payload;
    },
  },
});

export const { setSubjectNames, setSelectedSubject} = subjectSelectSlice.actions;

export default subjectSelectSlice.reducer;