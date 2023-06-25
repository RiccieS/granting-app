import { createSlice } from '@reduxjs/toolkit';

const gradesTableSlice = createSlice({
  name: 'gradesTable', // Název slicu
  initialState: [], // Počáteční stav - prázdné pole
  reducers: {
    loadClassification: (state, action) => {
      state = action.payload; // Načtení klasifikace - nastaví stav na poskytnutá data
      return state;
    },

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
