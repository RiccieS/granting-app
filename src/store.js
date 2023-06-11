// store.js
import { configureStore } from '@reduxjs/toolkit';
import StudentSelectReducer from './slices/StudentSelectSlice'; // Import your studentSelect reducer
import BranchSelectReducer from './slices/BranchSelectSlice'; 
import GradesTableReducer from './slices/GradesTableSlice'; 


const rootReducer = {
  studentSelect: StudentSelectReducer,
  branchSelect: BranchSelectReducer,
  gradesTable: GradesTableReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;