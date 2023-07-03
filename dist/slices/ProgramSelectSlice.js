import { createSlice } from '@reduxjs/toolkit';

/**
 * Reducer pro správu výběru programu.
 * @param {object} state - Aktuální stav.
 * @param {object} action - Akce provedená nad stavem.
 * @returns {object} - Nový stav.
 */
const programSelectSlice = createSlice({
  name: 'programSelect',
  // Název slicu
  initialState: {
    programNames: [],
    // Názvy programů
    selectedProgram: 'none' // Vybraný program (výchozí hodnota: none)
  },

  // Počáteční stav
  reducers: {
    /**
     * Akce pro nastavení názvů programů.
     * @param {object} state - Aktuální stav.
     * @param {object} action - Akce obsahující payload s názvy programů.
     */
    setProgramNames: (state, action) => {
      state.programNames = action.payload; // Nastaví názvy programů
    },

    /**
     * Akce pro nastavení vybraného programu.
     * @param {object} state - Aktuální stav.
     * @param {object} action - Akce obsahující payload s vybraným programem.
     */
    setSelectedProgram: (state, action) => {
      state.selectedProgram = action.payload; // Nastaví vybraný program
    }
  }
});

export const {
  setProgramNames,
  setSelectedProgram
} = programSelectSlice.actions;
export default programSelectSlice.reducer;