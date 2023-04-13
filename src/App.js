import React, { useState } from 'react';
import StudentTable from './components/StudentTable';
import StudentSelect from './components/StudentSelect';
import data from './data/dataset.json';

export default function App() {
  const [selectedStudent, setSelectedStudent] = useState(data[0]);//Tady to editneme aby to brala uzivatele dle účtu ze kterého se přihlásil data[0] specifikuje kdo bude zobrazen

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
      <StudentSelect
        selectedStudent={selectedStudent}
        onStudentChange={setSelectedStudent}
        data={data}
      />
      <StudentTable data={filteredData} />
    </div>
  );
}