import { createSlice } from '@reduxjs/toolkit';

/**
 * Reducer pro správu výběru předmětu a semestru pro tabulku.
 * @param {object} state - Aktuální stav.
 * @param {object} action - Akce provedená nad stavem.
 * @returns {object} - Nový stav.
 */
const StudentsBySubjectSemesterSelectSlice = createSlice({
  name: 'subjectSemesterSelect',
  // Název slicu
  initialState: {
    subjectNamesForTable: [],
    // Pole názvů předmětů pro tabulku
    classificationsData: [],
    // Data o klasifikacích
    selectedSubjectForTable: [] // Vybraný předmět pro tabulku
  },

  // Počáteční stav
  reducers: {
    /**
     * Akce pro nastavení pole názvů předmětů pro tabulku.
     * @param {object} state - Aktuální stav.
     * @param {object} action - Akce obsahující payload s polem názvů předmětů.
     */
    setSubjectNamesForTable: (state, action) => {
      state.subjectNamesForTable = action.payload; // Nastaví pole názvů předmětů pro tabulku
    },

    /**
     * Akce pro nastavení vybraného předmětu pro tabulku.
     * @param {object} state - Aktuální stav.
     * @param {object} action - Akce obsahující payload s vybraným předmětem.
     */
    setSelectedSubjectForTable: (state, action) => {
      state.selectedSubjectForTable = action.payload; // Nastaví vybraný předmět pro tabulku
    },

    /**
     * Akce pro nastavení dat o klasifikacích.
     * @param {object} state - Aktuální stav.
     * @param {object} action - Akce obsahující payload s daty o klasifikacích.
     */
    setClassificationsData: (state, action) => {
      state.classificationsData = action.payload; // Nastaví data o klasifikacích
    },

    /**
     * Akce pro aktualizaci dat o klasifikacích.
     * @param {object} state - Aktuální stav.
     * @param {object} action - Akce obsahující payload s ID uživatele a novými daty klasifikace.
     */
    updateClassificationsData: (state, action) => {
      const {
        id,
        newData
      } = action.payload;
      const userIndex = state.classificationsData.findIndex(userClassifications => userClassifications.some(c => c.id === id));
      if (userIndex !== -1) {
        const updatedUserClassifications = state.classificationsData[userIndex].map(classification => classification.id === id ? newData : classification);
        state.classificationsData[userIndex] = updatedUserClassifications;
      }
    }
  }
});
export const {
  setSubjectNamesForTable,
  setSelectedSubjectForTable,
  setClassificationsData,
  updateClassificationsData
} = StudentsBySubjectSemesterSelectSlice.actions;
export default StudentsBySubjectSemesterSelectSlice.reducer;