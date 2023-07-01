import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  classificationData: [], // Počáteční stav - prázdné pole pro data klasifikace
};
/**
 * Reducer pro správu statistických dat klasifikace.
 * @param {object} state - Aktuální stav.
 * @param {object} action - Akce provedená nad stavem.
 * @returns {object} - Nový stav.
 */
const ClassificationStatDataSlice = createSlice({
  name: 'classificationStatData', // Název slicu pro statistická data klasifikace
  initialState, // Použití počátečního stavu
  reducers: {
    /**
     * Akce pro nastavení dat klasifikace.
     * @param {object} state - Aktuální stav.
     * @param {object} action - Akce obsahující payload s daty klasifikace.
     */
    setClassificationData: (state, action) => {
      state.classificationData = action.payload; // Nastaví data klasifikace na poskytnutá data
    },
  },
});

export const { setClassificationData } = ClassificationStatDataSlice.actions;

export default ClassificationStatDataSlice.reducer;

