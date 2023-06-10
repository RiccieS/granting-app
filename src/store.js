// store.js
import { configureStore } from '@reduxjs/toolkit';
import StudentSelectReducer from './slices/StudentSelectSlice'; // Import your studentSelect reducer
import BranchSelectReducer from './slices/BranchSelectSlice'; 
import GradesTableReducer from './slices/GradesTableSlice'; 
import ProgramSelectReducer from './slices/ProgramSelectSlice';
import ClassificationStatDataReducer from 'slices/ClassificationStatDataSlice';


const rootReducer = {
  studentSelect: StudentSelectReducer,
  branchSelect: BranchSelectReducer,
  gradesTable: GradesTableReducer,
  programSelect: ProgramSelectReducer,
  classificationStatData: ClassificationStatDataReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;