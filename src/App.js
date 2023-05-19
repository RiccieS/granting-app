
import React, { useState, useEffect } from 'react';
import BranchSelect from './components/BranchSelect';
import StudentSelect from './components/StudentSelect';
import { StudentsQuery } from './queries/StudentsQuery';

export default function App() {
  const [selectedBranch, setSelectedBranch] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [userPageData, setUserPageData] = useState([]);

  const handleBranchChange = (branch) => {
    setSelectedBranch(branch);

  };

  const handleStudentChange = (studentId) => {
    setSelectedStudent(studentId);
  };


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await StudentsQuery();
        const data = await response.json();
        const filteredData = data?.data?.userPage || [];
        setUserPageData(filteredData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const filteredData = userPageData.filter((user) => {
    const memberships = user.membership || [];
    return selectedBranch === 'all' || memberships.some((membership) => membership.group.name === selectedBranch);
  });

  return (
    <div>
      <div className="container-fluid p-5 bg-success text-white text-center">
        <h1>Students granting App</h1>
      </div>
      <div className="container mt-5">
        <div className="card">
          <h2 className="card-header">Přehled studentů</h2>
          <div className="card-body">
            <BranchSelect onBranchChange={handleBranchChange} />
            <StudentSelect
              selectedStudent={selectedStudent}
              onStudentChange={handleStudentChange}
              selectedBranch={selectedBranch}
            />

          </div>
        </div>
        <div className="card">
          <h2 className="card-header">Přehled známek</h2>
          <div className="card-body">

          </div>
        </div>
      </div>
    </div>
  );
}