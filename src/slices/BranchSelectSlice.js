import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  groupNames: [], // Pole pro názvy skupin
  selectedBranch: 'all', // Vybraná pobočka - výchozí hodnota je "all"
};

const branchSelectSlice = createSlice({
  name: 'branchSelect', // Název slicu pro výběr pobočky
  initialState, // Použití počátečního stavu
  reducers: {
    setGroupNames: (state, action) => {
      state.groupNames = action.payload; // Nastavení pole názvů skupin na poskytnutá data
    },
    setSelectedBranch: (state, action) => {
      state.selectedBranch = action.payload; // Nastavení vybrané pobočky na poskytnutou hodnotu
    },
    setBranch: (state, action) => {
      state.selectedBranch = action.payload; // Nastavení vybrané pobočky na poskytnutou hodnotu
    },
  },
});

export const { setGroupNames, setSelectedBranch, setBranch } = branchSelectSlice.actions;

export default branchSelectSlice.reducer;
