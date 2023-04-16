import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function StudentTable({ data }) {
  return (
    // ytvoření tabulky s třídami Bootstrap pro stylování
    <table className="table table-striped table-hover table-sm">
      <thead>
        <tr>
          {/*Vytvoření záhlaví tabulky s názvy sloupců*/}
          <th>ID</th>
          <th>HODNOST</th>
          <th>PRIJMENI</th>
          <th>JMENO</th>
          <th>STUDIJNI SKUPINA</th>
        </tr>
      </thead>
      <tbody>
        {/*Vytvoření řádku tabulky pro každého studenta z data*/}
        {data.map(student => (
          <tr key={student.id}> {/*Klíč slouží k identifikaci řádku v rámci seznamu*/}
            <td>{student.id}</td>
            <td>{student.hodnost}</td>
            <td>{student.prijmeni}</td>
            <td>{student.jmeno}</td>
            <td>{student.studjini_skupina}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}