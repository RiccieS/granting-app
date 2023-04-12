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
          <th>ZNAMKA</th>
          <th>STUDIJNI SKUPINA</th>
        </tr>
      </thead>
      <tbody>
        {data.map(user => (
          <tr key={user.id}>
            <td>{user.hodnost}</td>
            <td>{user.jmeno}</td>
            <td>{user.prijmeni}</td>
            <td>{user.studjini_skupina}</td>
            <td>{user.znamka}</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
}