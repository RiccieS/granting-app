// store.js
import { configureStore } from '@reduxjs/toolkit';
import StudentSelectReducer from './slices/StudentSelectSlice'; // Import your studentSelect reducer
import BranchSelectReducer from './slices/BranchSelectSlice'; 
import GradesTableReducer from './slices/GradesTableSlice'; 
import specificUserReducer from './actions/classificationActions';


const rootReducer = {
  studentSelect: StudentSelectReducer,
  branchSelect: BranchSelectReducer,
  gradesTable: GradesTableReducer,
  specificUser: specificUserReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;