import React, { useState } from 'react';
import StudentTable from './components/StudentTable';
import StudentSelect from './components/StudentSelect';
import data from './data/students.json';
import grades_data from './data/grades.json';
import BranchSelect from './components/BranchSelect';
import GradesTable from './components/GradesTable';
import SemesterSelect from './components/SemesterSelect';
import AddEntryForm from './components/AddEntryForm';

export default function App() {

  return (
    <div>
      <BranchSelect />
    </div>
  );
}