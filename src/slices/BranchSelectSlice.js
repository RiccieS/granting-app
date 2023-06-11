import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  groupNames: [],
  selectedBranch: 'all',
};

const branchSelectSlice = createSlice({
  name: 'branchSelect',
  initialState,
  reducers: {
    setGroupNames: (state, action) => {
      state.groupNames = action.payload;
    },
    setSelectedBranch: (state, action) => {
      state.selectedBranch = action.payload;
    },
    setBranch: (state, action) => {
      state.selectedBranch = action.payload;
    },
  },
});

export const { setGroupNames, setSelectedBranch, setBranch} = branchSelectSlice.actions;

export default branchSelectSlice.reducer;

