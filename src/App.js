<<<<<<< Updated upstream
import React, { useState } from 'react';
import StudentTable from './components/StudentTable';
import StudentSelect from './components/StudentSelect';
import data from './data/students.json';
import BranchSelect from './components/BranchSelect';
import BranchTable from './components/BranchTable';


export default function App() {
  const [selectedStudent, setSelectedStudent] = useState(data[0]);//Tady to editneme aby to brala uzivatele dle účtu ze kterého se přihlásil data[0] specifikuje kdo bude zobrazen
  const [selectedBranch, setSelectedBranch] = useState(data[0]);
  const filterData = (student) => {
    if (student) {
      return data.filter((item) => item.id === student.id);
    } else {
      return data;
    }
=======
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
>>>>>>> Stashed changes
  };

  const handleStudentChange = (studentId) => {
    setSelectedStudent(studentId);
  };

<<<<<<< Updated upstream
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
      <StudentTable data={filteredData} />
=======
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
>>>>>>> Stashed changes
    </div>
  );
}