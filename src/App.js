import React, { useState } from 'react';
import StudentTable from './components/StudentTable';
import StudentSelect from './components/StudentSelect';
import data from './data/students.json';
import grades_data from './data/grades.json';
import BranchSelect from './components/BranchSelect';
import BranchTable from './components/BranchTable';
import GradesTable from './components/GradesTable';


export default function App() {
  const [selectedStudent, setSelectedStudent] = useState(data[0]);//Tady to editneme aby to brala uzivatele dle účtu ze kterého se přihlásil, data[0] specifikuje kdo bude zobrazen
  const [selectedBranch, setSelectedBranch] = useState(data[0]);
  const filterData = (student) => {
    if (student) {
      return data.filter((item) => item.id === student.id);
    } else {
      return data;
    }
  };

  const filteredData = filterData(selectedStudent);
  const filteredGradesData = grades_data.filter((item) => item.id_student === selectedStudent.id); //Filtr pro zobrazeni grades prislusnemu studentovi


  return (
    <div>
      <h1>Student Data Table</h1>
      <BranchSelect data={data}
      selectedBranch={selectedBranch}
      onBranchChange={setSelectedBranch}/>
      <BranchTable data={data} />
      <StudentSelect
        selectedStudent={selectedStudent}
        onStudentChange={setSelectedStudent}
        data={data}
      />
      <div>
        <StudentTable data={filteredData} />
      </div>
      

      <h1>Student's Grades Table</h1>
      <div>
        <GradesTable data={filteredGradesData}/>
      </div>
    </div>
  );
}