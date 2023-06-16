import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSemester: 'all',
};

const semesterSelectSlice = createSlice({
  name: 'semesterSelect',
  initialState,
  reducers: {
    setSelectedSemester: (state, action) => {
      state.selectedSemester = action.payload;
    },
  },
});

export const { setSelectedSemester} = semesterSelectSlice.actions;

export default semesterSelectSlice.reducer;
