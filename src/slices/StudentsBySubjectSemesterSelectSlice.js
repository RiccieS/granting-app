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
            state.classificationsDataForTable = action.payload; // Nastaví data o klasifikacích
        },
    },
});

export const { setSubjectNamesForTable, setSelectedSubjectForTable, setClassificationsData } = StudentsBySubjectSemesterSelectSlice.actions;

export default StudentsBySubjectSemesterSelectSlice.reducer;
