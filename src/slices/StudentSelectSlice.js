/**
 * Reducer pro správu výběru studenta.
 * @param {object} state - Aktuální stav.
 * @param {object} action - Akce provedená nad stavem.
 * @returns {object} - Nový stav.
 */
const studentSelectSlice = createSlice({
  name: 'studentSelect', // Název slicu
  initialState: {
    students: [], // Pole studentů
    loading: false, // Příznak načítání
    error: null, // Chybová zpráva
    selectedStudent: '', // Vybraný student
  }, // Počáteční stav
  reducers: {
    /**
     * Akce pro nastavení pole studentů.
     * @param {object} state - Aktuální stav.
     * @param {object} action - Akce obsahující payload se seznamem studentů.
     */
    setStudents: (state, action) => {
      state.students = action.payload; // Nastaví pole studentů
    },
    /**
     * Akce pro nastavení příznaku načítání.
     * @param {object} state - Aktuální stav.
     * @param {object} action - Akce obsahující payload s hodnotou příznaku načítání.
     */
    setLoading: (state, action) => {
      state.loading = action.payload; // Nastaví příznak načítání
    },
    /**
     * Akce pro nastavení chybové zprávy.
     * @param {object} state - Aktuální stav.
     * @param {object} action - Akce obsahující payload s chybovou zprávou.
     */
    setError: (state, action) => {
      state.error = action.payload; // Nastaví chybovou zprávu
    },
    /**
     * Akce pro aktualizaci vybraného studenta.
     * @param {object} state - Aktuální stav.
     * @param {object} action - Akce obsahující payload s ID vybraného studenta.
     */
    setSelectedStudent: (state, action) => {
      state.selectedStudent = action.payload; // Aktualizuje vybraného studenta
    },
  },
});

export const {
  setStudents,
  setLoading,
  setError,
  setSelectedStudent,
} = studentSelectSlice.actions;

export default studentSelectSlice.reducer;
