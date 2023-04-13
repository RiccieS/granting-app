import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function StudentTable({ data }) {
  return (
    <table className="table table-striped table-hover table-sm">
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
        {data.map(student => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.hodnost}</td>
            <td>{student.prijmeni}</td>
            <td>{student.jmeno}</td>
            <td>{student.studjini_skupina}</td>
            <td>{student.znamka}</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
}