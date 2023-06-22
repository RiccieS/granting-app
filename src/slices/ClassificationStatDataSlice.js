import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  classificationData: [], // Počáteční stav - prázdné pole pro data klasifikace
};

const ClassificationStatDataSlice = createSlice({
  name: 'classificationStatData', // Název slicu pro statistická data klasifikace
  initialState, // Použití počátečního stavu
  reducers: {
    setClassificationData: (state, action) => {
      state.classificationData = action.payload; // Nastaví data klasifikace na poskytnutá data
    },
  },
});

export const { setClassificationData } = ClassificationStatDataSlice.actions;

export default ClassificationStatDataSlice.reducer;
