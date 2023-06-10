import React, { useState } from 'react';
import BranchSelect from './components/BranchSelect';
import StudentSelect from './components/StudentSelect';
import UserClassification from 'components/UserClassification';
import ProgramSelect from 'components/ProgramSelect';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

export default function App() {
  const [selectedBranch, setSelectedBranch] = useState('all');
  const user = useSelector((state) => state.studentSelect.selectedStudent);

  const handleBranchSelect = (branch) => {
    setSelectedBranch(branch);
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
              <BranchSelect onBranchSelect={handleBranchSelect} />
              <StudentSelect key={selectedBranch} selectedBranch={selectedBranch} />
            </div>
            <div className="card-body">
              <UserClassification user={user} />
              {/*<GradesTable selectedStudent={selectedStudent} />*/}
            </div>
          </div>
          <div className="card">
            <h2 className="card-header">Přehled statistik</h2>
            <div className="card-body">
              <ProgramSelect/>
            </div>
          </div>
        </div>
      </div>
  );
}