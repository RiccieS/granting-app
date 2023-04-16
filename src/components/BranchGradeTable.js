import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BranchGradeTable({ data, grades_data, studjiniSkupina }) {
  const filteredStudents = data.filter((student) => student.studjini_skupina === studjiniSkupina); // Filtrace studentů na zákaldě stuijní skupiny
  const filteredGrades = grades_data.filter((grade) => filteredStudents.some((student) => student.id === grade.id_student)); //Filtrace známek studentů na základě jejich ID

  return (//Vykreslení tabulky s využitím stylů bootsrap
    <table className="table table-striped table-hover table-sm">
      <caption>Studijní skupina: {studjiniSkupina}</caption>
      <thead>
        <tr>
          <th>PREDMET</th>
          <th>PRUMER</th>
        </tr>
      </thead>
      <tbody>
        {filteredGrades.map((grade) => (//Projde pole filtorvaných známek a pro každý prvek vytvoří nový řádek
          <tr >
            <td>{grade.subject}</td>
            <td>{grade.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}