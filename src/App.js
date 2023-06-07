import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import BranchSelect from './components/BranchSelect';
import StudentSelect from './components/StudentSelect';
import UserClassification from 'components/UserClassification';
import { ClassificationByUserQuery } from './queries/UserClassificationQuery';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [selectedBranch, setSelectedBranch] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [user, setUser] = useState(null);

  const handleBranchSelect = (branch) => {
    setSelectedBranch(branch);
  };

  const handleStudentChange = async (studentId) => {
    console.log("TED");
    setSelectedStudent(studentId);
    try {
      const response = await ClassificationByUserQuery(studentId);
      const data = await response.json();
      const userData = data.data.result
      setUser(userData)

      /*
      if (response.ok) {
        const userData = response.result;
        console.log(userData);
        setUser(userData);
      } else {
        // Handle the error if the query was not successful
        console.error('Error fetching user classifications:', response.error);
      }
      console.log(response.result);
      */
    } catch (error) {
      console.error('Error fetching user classifications:', error);
      // Handle the error if needed
    }
  };

  const handleStudentReset = () => {
    setSelectedStudent('');
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
                onStudentChange={handleStudentChange}
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