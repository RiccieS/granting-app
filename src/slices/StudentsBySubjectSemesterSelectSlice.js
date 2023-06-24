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

            // Iterate over the numerical keys of the classificationsData object
            Object.keys(state.classificationsData).forEach((key) => {
              // Access the array of classifications using the key
              state.classificationsData[key] = state.classificationsData[key].map((item) =>
                item.id === id ? newData : item
              );
            });
          },
          

    },
});

export const { setSubjectNamesForTable, setSelectedSubjectForTable, setClassificationsData, updateClassificationsData } = StudentsBySubjectSemesterSelectSlice.actions;

export default StudentsBySubjectSemesterSelectSlice.reducer;
