import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function GradesTable({ data }) {
  return (
    <table className="table table-striped table-hover table-sm">
      <thead>
        <tr>
          <th>SEMESTR</th>
          <th>PREDMET</th>
          <th>ZNAMKA</th>
          <th>ID STUDENT</th>
        </tr>
      </thead>
      <tbody>
        {data.map(grade => (
          <tr key={grade.id_grade}>
            <td>{grade.semester}</td>
            <td>{grade.subject}</td>
            <td>{grade.grade}</td>
            <td>{grade.id_student}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}