import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  classificationData: [],
};
//data pro statistiku
const ClassificationStatDataSlice = createSlice({
  name: 'classificationStatData',
  initialState,
  reducers: {
    setClassificationData: (state, action) => {
      state.classificationData = action.payload;
    },
  },
});

export const { setClassificationData} = ClassificationStatDataSlice.actions;

export default ClassificationStatDataSlice.reducer;