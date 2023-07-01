import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    subjectNamesForTable: [], // Pole názvů předmětů pro tabulku
    classificationsData: [], // Data o klasifikacích
    selectedSubjectForTable: [], // Vybraný předmět pro tabulku
};

const StudentsBySubjectSemesterSelectSlice = createSlice({
    name: 'subjectSemesterSelect', // Název slicu
    initialState, // Počáteční stav
    reducers: {
        setSubjectNamesForTable: (state, action) => {
            state.subjectNamesForTable = action.payload; // Nastaví pole názvů předmětů pro tabulku
        },
        setSelectedSubjectForTable: (state, action) => {
            state.selectedSubjectForTable = action.payload; // Nastaví vybraný předmět pro tabulku
        },
        setClassificationsData: (state, action) => {
            state.classificationsData = action.payload; // Nastaví data o klasifikacích
        },
        updateClassificationsData: (state, action) => {
            const { id, newData } = action.payload;
            const userIndex = state.classificationsData.findIndex((userClassifications) =>
              userClassifications.some((c) => c.id === id)
            );
            if (userIndex !== -1) {
              const updatedUserClassifications = state.classificationsData[userIndex].map((classification) =>
                classification.id === id ? newData : classification
              );
              state.classificationsData[userIndex] = updatedUserClassifications;
            }
          },
          
          

    },
});

export const { setSubjectNamesForTable, setSelectedSubjectForTable, setClassificationsData, updateClassificationsData } = StudentsBySubjectSemesterSelectSlice.actions;

export default StudentsBySubjectSemesterSelectSlice.reducer;
