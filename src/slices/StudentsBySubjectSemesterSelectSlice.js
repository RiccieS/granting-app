import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    subjectNamesForTable: [],
    classificationsData: [],
    selectedSubjectForTable: [],
};

const StudentsBySubjectSemesterSelectSlice = createSlice({
    name: 'subjectSemesterSelect',
    initialState,
    reducers: {
        setSubjectNamesForTable: (state, action) => {
            state.subjectNamesForTable = action.payload;
        },
        setSelectedSubjectForTable: (state, action) => {
            state.selectedSubjectForTable = action.payload;
        },
        setClassificationsData: (state, action) => {
            state.classificationsDataForTable = action.payload;
        },
    },
});

export const { setSubjectNamesForTable, setSelectedSubjectForTable, setClassificationsData } = StudentsBySubjectSemesterSelectSlice.actions;

export default StudentsBySubjectSemesterSelectSlice.reducer;