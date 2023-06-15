import React, { useState } from 'react';
import BranchSelect from './components/BranchSelect';
import StudentSelect from './components/StudentSelect';
import UserClassification from 'components/UserClassification';
import ProgramSelect from 'components/ProgramSelect';
import SubjectSelect from 'components/SubjectSelect';
import SemesterSelect from 'components/SemesterSelect';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

export default function App() {
  const [selectedBranch, setSelectedBranch] = useState('all');
<<<<<<< Updated upstream
  const user = useSelector((state) => state.studentSelect.selectedStudent);
=======
  const [, setSelectedSemester] = useState('all'); 
  const users = useSelector((state) => state.studentSelect.selectedStudent);
  //console.log(users);
>>>>>>> Stashed changes

  const handleBranchSelect = (branch) => {
    setSelectedBranch(branch);
  };

  const handleSemesterChange = (semester) => {
    setSelectedSemester(semester);
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
              <BranchSelect onBranchSelect={handleBranchSelect} />
              <SemesterSelect onSemesterChange={handleSemesterChange} />
              <StudentSelect key={selectedBranch} selectedBranch={selectedBranch} />
            </div>
            <div className="card-body">
              <UserClassification user={user} />
              {/*<GradesTable selectedStudent={selectedStudent} />*/}
            </div>
           </div>
          </div>
          <div className="container mt-5">
          <div className="card">
            <h2 className="card-header">Přehled statistik</h2>
            <div className="card-body">
              <ProgramSelect/>
<<<<<<< Updated upstream
            </div>
            <div className="card-body">
=======
              <SubjectSemesterSelect/>
>>>>>>> Stashed changes
              <SubjectSelect/>
            </div>
          </div>
        </div>
      </div>
  );
}