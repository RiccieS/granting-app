import React, { useState, /*useEffect*/ } from 'react';
import BranchSelect from './components/BranchSelect';
import StudentSelect from './components/StudentSelect';
//import { StudentsQuery } from './queries/StudentsQuery';
import GradesTable from './components/GradesTable';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  /*useEffect(() => {
    const fetchUserData = async () => {
      try {
        //const response = await StudentsQuery();
        //const data = await response.json();
        //const filteredData = data?.data?.userPage || [];
        //setUserPageData(filteredData);
      } catch (error) {
        console.error('Chyba při načítání dat uživatele:', error);
      }
    };

    fetchUserData();
  }, []); */

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
              key={selectedBranch}
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