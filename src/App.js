import React, { useState } from 'react';
import StudentTable from './components/StudentTable';
import UserSelect from './components/UserSelect';
import data from './data/dataset.json';

export default function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const filterData = (user) => {
    if (user) {
      return data.filter((item) => item.id === user.id);
    } else {
      return data;
    }
  };

  const filteredData = filterData(selectedUser);

  return (
    <div>
      <h1>Student Data Table</h1>
      <UserSelect
        selectedUser={selectedUser}
        onUserChange={setSelectedUser}
        data={data}
      />
      <StudentTable data={filteredData} />
    </div>
  );
}