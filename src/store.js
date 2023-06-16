// store.js
import { configureStore } from '@reduxjs/toolkit';
import StudentSelectReducer from './slices/StudentSelectSlice'; // Import your studentSelect reducer
import BranchSelectReducer from './slices/BranchSelectSlice'; 
import GradesTableReducer from './slices/GradesTableSlice'; 
import ProgramSelectReducer from './slices/ProgramSelectSlice';
import ClassificationStatDataReducer from 'slices/ClassificationStatDataSlice';
import SubjectSemesterSelectReducer from './slices/SubjectSemesterSelectSlice';
import SubjectSelectReducer from './slices/SubjectSelectSlice';
import SemesterSelectReducer from './slices/SemesterSelectSlice';

const rootReducer = {
  studentSelect: StudentSelectReducer,
  branchSelect: BranchSelectReducer,
  semesterSelect: SemesterSelectReducer,
  gradesTable: GradesTableReducer,
  programSelect: ProgramSelectReducer,
  classificationStatData: ClassificationStatDataReducer,
  subjectSemesterSelect: SubjectSemesterSelectReducer,
  subjectSelect: SubjectSelectReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;