import React, { useState } from 'react';
import StudentTable from './components/StudentTable';
import BranchSelect from './components/BranchSelect';
import data from './data/dataset.json'; // import the data

export default function App() {
  const [selectedOption, setSelectedOption] = useState('id');

  const sortData = (option) => {
    // sort the data based on the selected option
    const sortedData = [...data].sort((a, b) => (a[option] > b[option] ? 1 : -1));
    return sortedData;
  };

  const sortedData = sortData(selectedOption);

  return (
    <div>
      <h1>Student Data Table</h1>
      <BranchSelect selectedOption={selectedOption} onOptionChange={setSelectedOption} />
      <StudentTable data={sortedData} />
    </div>
  );
}