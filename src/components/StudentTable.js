import React from 'react';

export default function StudentTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>HODNOST</th>
          <th>PRIJMENI</th>
          <th>JMENO</th>
          <th>STUDIJNI SKUPINA</th>
          <th>ZNAMKA</th>
          
        </tr>
      </thead>
      <tbody>
        {data.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.hodnost}</td>
            <td>{user.prijmeni}</td>
            <td>{user.jmeno}</td>
            <td>{user.studjini_skupina}</td>
            <td>{user.znamka}</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
}