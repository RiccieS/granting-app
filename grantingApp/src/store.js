import { configureStore } from '@reduxjs/toolkit';
import StudentSelectReducer from './slices/StudentSelectSlice'; // Importujte reducer pro výběr studenta
import BranchSelectReducer from './slices/BranchSelectSlice'; // Importujte reducer pro výběr větve
import GradesTableReducer from './slices/GradesTableSlice'; // Importujte reducer pro tabulku známek
import ProgramSelectReducer from './slices/ProgramSelectSlice'; // Importujte reducer pro výběr programu
import ClassificationStatDataReducer from './slices/ClassificationStatDataSlice'; // Importujte reducer pro statistiky klasifikace
import StudentsBySubjectSemesterSelectReducer from './slices/StudentsBySubjectSemesterSelectSlice'; // Importujte reducer pro výběr studentů podle předmětu a semestru
import SubjectSemesterSelectReducer from './slices/SubjectSemesterSelectSlice'; // Importujte reducer pro výběr předmětu a semestru
import SubjectSelectReducer from './slices/SubjectSelectSlice'; // Importujte reducer pro výběr předmětu
import SemesterSelectReducer from './slices/SemesterSelectSlice'; // Importujte reducer pro výběr semestru

/**
 * Kořenový reducer, který kombinuje všechny reducery aplikace.
 */
const rootReducer = {
  studentSelect: StudentSelectReducer,
  branchSelect: BranchSelectReducer,
  semesterSelect: SemesterSelectReducer,
  gradesTable: GradesTableReducer,
  programSelect: ProgramSelectReducer,
  classificationStatData: ClassificationStatDataReducer,
  subjectSemesterSelect: SubjectSemesterSelectReducer,
  subjectSemesterSelectForStudentsDisplay: StudentsBySubjectSemesterSelectReducer,
  subjectSelect: SubjectSelectReducer,
};

/**
 * Konfigurace Redux store aplikace.
 */
const store = configureStore({
  reducer: rootReducer,
});

export default store;
