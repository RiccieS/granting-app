import { createSlice } from '@reduxjs/toolkit';

/**
 * Reducer pro správu tabulky klasifikace.
 * @param {Array} state - Aktuální stav.
 * @param {object} action - Akce provedená nad stavem.
 * @returns {Array} - Nový stav.
 */
const gradesTableSlice = createSlice({
  name: 'gradesTable', // Název slicu
  initialState: [], // Počáteční stav - prázdné pole
  reducers: {
    /**
     * Akce pro načtení klasifikace.
     * @param {Array} state - Aktuální stav.
     * @param {object} action - Akce obsahující payload s klasifikací.
     * @returns {Array} - Nový stav s načtenou klasifikací.
     */
    loadClassification: (state, action) => {
      state = action.payload; // Načtení klasifikace - nastaví stav na poskytnutá data
      return state;
    },

    /**
     * Akce pro aktualizaci klasifikace.
     * @param {Array} state - Aktuální stav.
     * @param {object} action - Akce obsahující payload s aktualizovanými daty klasifikace.
     * @returns {Array} - Nový stav s aktualizovanou klasifikací.
     */
    updateClassification: (state, action) => {
      const newTable = state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      ); // Aktualizace klasifikace - nahradí existujícího uživatele novými daty
      state = newTable; // Nastaví stav na aktualizovanou tabulku
      return state;
    },
  },
});

export const { loadClassification, updateClassification } = gradesTableSlice.actions;

export default gradesTableSlice.reducer;
