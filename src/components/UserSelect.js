import React from 'react';

export default function UserSelect({ selectedUser, onUserChange, data }) {
  const handleChange = (event) => {
    const userId = parseInt(event.target.value);
    const user = data.find((item) => item.id === userId);
    onUserChange(user);
  };

  return (
    <div>
      <label htmlFor="user-select">Select User:</label>
      <select id="user-select" value={selectedUser ? selectedUser.id : ''} onChange={handleChange}>
        <option value="">Select a user</option>
        {data.map((user) => (
          <option key={user.id} value={user.id}>
            {user.jmeno} {user.prijmeni}
          </option>
        ))}
      </select>
    </div>
  );
}