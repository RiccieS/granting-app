import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import BranchSelect from './components/BranchSelect';
import StudentSelect from './components/StudentSelect';
import UserClassification from 'components/UserClassification';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

export default function App() {
  const [selectedBranch, setSelectedBranch] = useState('all');
  const [selectedStudent, setSelectedStudentBox] = useState('');
  const user = useSelector((state) => state.selectedStudent);

  const handleBranchSelect = (branch) => {
    setSelectedBranch(branch);
  };

  const handleStudentReset = () => {
    setSelectedStudentBox('');
  };

  return (
    <Provider store={store}>
      <div>
        <div className="container-fluid p-5 bg-success text-white text-center">
          <h1>Aplikace pro správu studentů</h1>
        </div>
        <div className="container mt-5">
          <div className="card">
            <h2 className="card-header">Přehled studentů</h2>
            <div className="card-body">
              <BranchSelect onStudentReset={handleStudentReset} onBranchSelect={handleBranchSelect} />
              <StudentSelect
                key={selectedBranch}
                selectedStudent={selectedStudent}
                selectedBranch={selectedBranch}
              />
            </div>
            <div className="card-body">
              <UserClassification user={user} />
              {/*<GradesTable selectedStudent={selectedStudent} />*/}
            </div>
          </div>
          <div className="card">
            <h2 className="card-header">Přehled známek</h2>
            <div className="card-body">{/* Additional content */}</div>
          </div>
        </div>
      </div>
    </Provider>
  );
}