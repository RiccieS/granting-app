/**
 * Reducer pro správu výběru předmětu a semestru.
 * @param {object} state - Aktuální stav.
 * @param {object} action - Akce provedená nad stavem.
 * @returns {object} - Nový stav.
 */
const subjectSemesterSelectSlice = createSlice({
  name: 'subjectSemesterSelect', // Název slicu
  initialState: {
    subjectNames: [], // Pole názvů předmětů
    classificationsData: [], // Pole klasifikačních dat
    selectedSubject: [], // Vybraný předmět
  }, // Počáteční stav
  reducers: {
    /**
     * Akce pro nastavení pole názvů předmětů.
     * @param {object} state - Aktuální stav.
     * @param {object} action - Akce obsahující payload se seznamem názvů předmětů.
     */
    setSubjectNames: (state, action) => {
      state.subjectNames = action.payload; // Nastaví pole názvů předmětů
    },
    /**
     * Akce pro nastavení vybraného předmětu.
     * @param {object} state - Aktuální stav.
     * @param {object} action - Akce obsahující payload s vybraným předmětem.
     */
    setSelectedSubject: (state, action) => {
      state.selectedSubject = action.payload; // Nastaví vybraný předmět
    },
    /**
     * Akce pro nastavení pole klasifikačních dat.
     * @param {object} state - Aktuální stav.
     * @param {object} action - Akce obsahující payload s klasifikačními daty.
     */
    setClassificationsData: (state, action) => {
      state.classificationsData = action.payload; // Nastaví pole klasifikačních dat
    },
  },
});

export const {
  setSubjectNames,
  setSelectedSubject,
  setClassificationsData,
} = subjectSemesterSelectSlice.actions;

export default subjectSemesterSelectSlice.reducer;
