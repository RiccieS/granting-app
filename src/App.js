import React, { useState } from 'react';
import BranchSelect from './components/BranchSelect';
import StudentSelect from './components/StudentSelect';
import UserClassification from 'components/UserClassification';
import ProgramSelect from 'components/ProgramSelect';
import SubjectSemesterSelect from 'components/SubjectSemesterSelect';
import SubjectSelect from 'components/SubjectSelect';
import SemesterSelect from 'components/SemesterSelect';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import StudentsBySubjectSemesterSelect from "./components/StudentsBySubjectSemesterSelect";

export default function App() {
  const [selectedBranch, setSelectedBranch] = useState('all'); // Stav pro vybranou větev
  const [, setSelectedSemester] = useState('all'); // Stav pro vybraný semestr
  const users = useSelector((state) => state.studentSelect.selectedStudent);
  //console.log(users);

  const handleBranchSelect = (branch) => {
    setSelectedBranch(branch); // Funkce pro aktualizaci vybrané skupiny
  };

  const handleSemesterChange = (semester) => {
    setSelectedSemester(semester); // Funkce pro aktualizaci vybraného semestru
  };

  return (
    <div>
      <div className="container-fluid p-5 bg-success text-white text-center">
        <h1>Aplikace pro správu klasifikace</h1>
      </div>
      <div className="container mt-5">
        <div className="card">
          <h2 className="card-header">Přehled studentů</h2>
          <div className="card-body">
            <BranchSelect onBranchSelect={handleBranchSelect} /> {/* Komponenta pro výběr skupiny */}
            <SemesterSelect onSemesterChange={handleSemesterChange} /> {/* Komponenta pro výběr semestru */}
            <StudentSelect key={selectedBranch} selectedBranch={selectedBranch} /> {/* Komponenta pro výběr studenta */}
          </div>
          <div className="card-body">
            <UserClassification users={users} /> {/* Komponenta pro zobrazení a editaci klasifikace uživatele */}
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className='card'>
          <h2 className="card-header">Přehled studentů podle předmětu</h2>
          <div className="card-body">
            <StudentsBySubjectSemesterSelect /> {/* Komponenta pro výběr studentů podle předmětu a semestru předmětu */}
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="card">
          <h2 className="card-header">Přehled statistik</h2>
          <div className="card-body">
            <ProgramSelect /> {/* Komponenta pro výběr programu */}
            <SubjectSemesterSelect /> {/* Komponenta pro výběr předmětu a semestru */}
            <SubjectSelect /> {/* Komponenta pro výběr předmětu */}
          </div>
        </div>
      </div>
    </div>
  );
}
