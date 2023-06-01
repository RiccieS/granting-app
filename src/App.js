import React, { useState, /*useEffect*/ } from 'react';
import BranchSelect from './components/BranchSelect';
import StudentSelect from './components/StudentSelect';
//import { StudentsQuery } from './queries/StudentsQuery';
import GradesTable from './components/GradesTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import SemesterClassificationsTableConstant from "./components/SemesterClasificationTableConstant";
//import UserClassificationsTableConstant from "./components/UserClassificationsTableConstant";

export default function App() {
  const [selectedBranch, setSelectedBranch] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState('');
  //const [userPageData, setUserPageData] = useState([]);

  const handleBranchChange = (branch) => {
    setSelectedBranch(branch);
  };

  const handleStudentChange = (studentId) => {
    setSelectedStudent(studentId);
  };

  const handleStudentReset = () => {
    setSelectedStudent(''); // Resetuje vybraného studenta na prázdnou hodnotu
  };

  return (
    <div>
      <div className="container-fluid p-5 bg-success text-white text-center">
        <h1>Aplikace pro správu studentů</h1>
      </div>
      <div className="container mt-5">
        <div className="card">
          <h2 className="card-header">Přehled studentů</h2>
          <div className="card-body">
            {/* Výběr oboru */}
            <BranchSelect onBranchChange={handleBranchChange} onStudentReset={handleStudentReset} />
            {/* Výběr studenta */}
            <StudentSelect
              uniqueKey={selectedBranch}
              selectedStudent={selectedStudent}
              onStudentChange={handleStudentChange}
              selectedBranch={selectedBranch}
            />
          </div>
          <div className="card-body">
            {/* Tabulka se známkami */}
            <GradesTable selectedStudent={selectedStudent} />
          </div>
        </div>
        <div className="card">
          <h2 className="card-header">Přehled známek</h2>
          <div className="card-body">
            {/* Další obsah */}
          </div>
        </div>
      </div>
    </div>
  );
}