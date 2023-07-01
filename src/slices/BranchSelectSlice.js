/**
 * Reducer pro správu výběru skupiny.
 * @param {object} state - Aktuální stav.
 * @param {object} action - Akce provedená nad stavem.
 * @returns {object} - Nový stav.
 */
const branchSelectSlice = createSlice({
  name: 'branchSelect', // Název slicu pro výběr skupiny
  initialState, // Použití počátečního stavu
  reducers: {
    /**
     * Akce pro nastavení pole názvů skupin.
     * @param {object} state - Aktuální stav.
     * @param {object} action - Akce obsahující payload s polem názvů skupin.
     */
    setGroupNames: (state, action) => {
      state.groupNames = action.payload; // Nastavení pole názvů skupin na poskytnutá data
    },
    /**
     * Akce pro nastavení vybrané skupiny.
     * @param {object} state - Aktuální stav.
     * @param {object} action - Akce obsahující payload s vybranou skupinou.
     */
    setSelectedBranch: (state, action) => {
      state.selectedBranch = action.payload; // Nastavení vybrané skupiny na poskytnutou hodnotu
    },
    /**
     * Akce pro nastavení vybrané skupiny.
     * @param {object} state - Aktuální stav.
     * @param {object} action - Akce obsahující payload s vybranou skupinou.
     */
    setBranch: (state, action) => {
      state.selectedBranch = action.payload; // Nastavení vybrané pobočky na poskytnutou hodnotu
    },
  },
});

export const { setGroupNames, setSelectedBranch, setBranch } = branchSelectSlice.actions;

export default branchSelectSlice.reducer;
