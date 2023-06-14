import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subjectNames: [],
  classificationsData: [],
  selectedSubject: [],
};

const subjectSemesterSelectSlice = createSlice({
  name: 'subjectSemesterSelect',
  initialState,
  reducers: {
    setSubjectNames: (state, action) => {
      state.subjectNames = action.payload;
    },
    setSelectedSubject: (state, action) => {
      state.selectedSubject = action.payload;
    },
    setClassificationsData: (state, action) => {
      state.classificationsData = action.payload;
    },
  },
});

export const { setSubjectNames, setSelectedSubject, setClassificationsData} = subjectSemesterSelectSlice.actions;

export default subjectSemesterSelectSlice.reducer;