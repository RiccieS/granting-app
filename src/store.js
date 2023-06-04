// store.js
import { configureStore } from '@reduxjs/toolkit';
import StudentSelectReducer from './slices/StudentSelectSlice'; // Import your studentSelect reducer
import BranchSelectReducer from './slices/BranchSelectSlice'; 
import GradesTableReducer from './slices/GradesTableSlice'; 
import classificationReducer from './actions/classificationActions';


const rootReducer = {
  studentSelect: StudentSelectReducer,
  branchSelect: BranchSelectReducer,
  gradesTable: GradesTableReducer,
  classifications: classificationReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;