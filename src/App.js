import React, { useState } from 'react';
import StudentTable from './components/StudentTable';
import StudentSelect from './components/StudentSelect';
import data from './data/students.json';
import grades_data from './data/grades.json';
import BranchSelect from './components/BranchSelect';
import GradesTable from './components/GradesTable';
import SemesterSelect from './components/SemesterSelect';
import GradeInputForm from './components/GradeInputForm';
import ButtonQuery from './components/querryButton';
export default function App() {
  const [selectedStudent, setSelectedStudent] = useState(data[0]); 
  const [selectedBranch, setSelectedBranch] = useState(data[0]); 
  const [selectedSemester, setSelectedSemester] = useState('all');

  const filterData = (student) => {
    if (student) {
      return data.filter((item) => item.id === student.id);
    } else {
      return data;
    }
  };

  const filteredData = filterData(selectedStudent);

  const filteredGradesData = grades_data.filter(
    (item) => item.id_student === selectedStudent.id && 
              (selectedSemester === 'all' || item.semester === parseInt(selectedSemester))
  );

  

  return (
    <div>
      <div className="container-fluid p-5 bg-success text-white text-center">
        <h1>Students granting App</h1>
      </div>
      <div className="container mt-5">
        <div className="card">
          <h2 className="card-header">Přehled studentů</h2>
          <div className="card-body">
            <BranchSelect data={data} grades_data={grades_data} selectedBranch={selectedBranch} onBranchChange={setSelectedBranch} />
            <StudentSelect selectedStudent={selectedStudent} onStudentChange={setSelectedStudent} data={data} />
            <div>
              <StudentTable data={filteredData} />
            </div>
          </div>
        </div>
        <div className="card">
          <h2 className="card-header">Přehled známek</h2>
          <div className="card-body">
            <SemesterSelect selectedSemester={selectedSemester} onSemesterChange={setSelectedSemester} />
            <div>
              <GradesTable data={filteredGradesData} />
              
            </div>
            <div>
            <GradeInputForm />
            </div>
            <div>
            <ButtonQuery/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}