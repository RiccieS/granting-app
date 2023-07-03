import { createSlice } from '@reduxjs/toolkit';

/**
 * Reducer pro správu výběru semestru.
 * @param {object} state - Aktuální stav.
 * @param {object} action - Akce provedená nad stavem.
 * @returns {object} - Nový stav.
 */
const semesterSelectSlice = createSlice({
  name: 'semesterSelect',
  // Název slicu
  initialState: {
    selectedSemester: 'all' // Vybraný semestr
  },

  // Počáteční stav
  reducers: {
    /**
     * Akce pro nastavení vybraného semestru.
     * @param {object} state - Aktuální stav.
     * @param {object} action - Akce obsahující payload s vybraným semestrem.
     */
    setSelectedSemester: (state, action) => {
      state.selectedSemester = action.payload; // Nastaví vybraný semestr
      console.log(action.payload); // Vypíše vybraný semestr do konzole
    }
  }
});

export const {
  setSelectedSemester
} = semesterSelectSlice.actions;
export default semesterSelectSlice.reducer;