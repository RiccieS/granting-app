import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function GradesTable({ data }) {
  return (
    <table className="table table-striped table-hover table-sm">
      <thead>
        <tr>
          <th>SEMESTR</th> {/*záhlaví sloupců */}
          <th>PREDMET</th> 
          <th>ZNAMKA</th> 
          <th>ID STUDENT</th> 
        </tr>
      </thead>
      <tbody>
        {data.map(grade => ( // výpis dat ze vstupního pole data
          <tr key={grade.id_grade}> {/* unikátní klíč pro každý řádek tabulky*/}
            <td>{grade.semester}</td> {/*data pro sloupece */}
            <td>{grade.subject}</td> 
            <td>{grade.grade}</td> 
            <td>{grade.id_student}</td> 
          </tr>
        ))}
      </tbody>
    </table>
  );
}