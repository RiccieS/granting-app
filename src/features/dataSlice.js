import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  database: JSON.parse(localStorage.getItem("database")) || [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.database.push(action.payload);
      localStorage.setItem("database", JSON.stringify(state.database));
    },
    
  },
});

export const { addData, loadData } = dataSlice.actions;

export default dataSlice.reducer;