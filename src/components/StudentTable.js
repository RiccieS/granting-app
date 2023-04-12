import React, { useState, useEffect } from 'react';

export function UserTable({ data }) {
  const [data, setData] = useState([]);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Hodnost</th>
          <th>Jmeno</th>
          <th>Prijmeni</th>
          <th>Studijni skupina</th>
          <th>Prumerna znamka</th>
        </tr>
      </thead>
      <tbody>
        {data.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.rank}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.branch}</td>
            <td>{user.avg_grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

