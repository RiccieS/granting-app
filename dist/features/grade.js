import { createSlice } from "@reduxjs/toolkit";

/**
 * Slice pro správu stavu známky.
 */
export const gradeSlice = createSlice({
  name: "grade",
  initialState: {
    value: {
      semester: 1,
      subject: "hhgg",
      grade: 1
    }
  },
  reducers: {
    /**
     * Akce pro přidání známky.
     * @param {Object} state - Aktuální stav
     * @param {Object} action - Akce
     */
    addGrade: (state, action) => {
      state.value = action.payload;
    }
  }
});

/**
 * Export akce addGrade.
 */
export const {
  addGrade
} = gradeSlice.actions;

/**
 * Export reduceru z gradeSlice.
 */
export default gradeSlice.reducer;