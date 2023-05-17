import { createSlice } from "@reduxjs/toolkit";


export const gradeSlice = createSlice({
    name: "grade",
    initialState: {value:{semester: 1, subject: "hhgg", grade: 1}},
    reducers:{
     addGrade: (state, action) => {
        state.value = action.payload;
     },
    }
});

export const {addGrade} = gradeSlice.actions;

export default gradeSlice.reducer;