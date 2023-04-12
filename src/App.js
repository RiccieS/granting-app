import React, { useState } from 'react';
import StudentTable from './components/StudentTable';
import UserSelect from './components/StudentSelect';
import data from './data/dataset.json';

export default function App() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filterData = (student) => {
    if (student) {
      return data.filter((item) => item.id === student.id);
    } else {
      return data;
    }
  };

  const filteredData = filterData(selectedStudent);

  return (
    <div>
      <h1>Student Data Table</h1>
      <UserSelect
        selectedStudent={selectedStudent}
        onStudentChange={setSelectedStudent}
        data={data}
      />
      <StudentTable data={filteredData} />
    </div>
  );
}