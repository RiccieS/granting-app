import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subjectNames: [],
  classificationsData: [],
  selectedSubject: [],
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
    setClassificationsData: (state, action) => {
      state.classificationsData = action.payload;
    },
  },
});

export const { setSubjectNames, setSelectedSubject, setClassificationsData} = subjectSelectSlice.actions;

export default subjectSelectSlice.reducer;