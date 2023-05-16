import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//UPRAVIT KOD filteredGrades je mozna zbytecne
export default function BranchGradeTable({ data, grades_data, studjiniSkupina }) {
  const filteredStudents = data.filter((student) => student.studjini_skupina === studjiniSkupina); // Filtrace studentů na zákaldě stuijní skupiny
  const filteredGrades = grades_data.filter((grade) => filteredStudents.some((student) => student.id === grade.id_student)); //Filtrace známek studentů na základě jejich ID
  
  // Vytvoření objektu, klíč je název předmětu, hodnoty jsou pole známek předmětu
  const gradesBySubject = filteredGrades.reduce((result, grade) => {
    if (result[grade.subject]) {
      result[grade.subject].push(grade.grade);
    } else {
      result[grade.subject] = [grade.grade];
    }
    return result;
  }, {});

  // Vytvoření pole objektů, kde každý objekt obsahuje název předmětu a průměrnou známku pro daný předmět
  const averageGrades = Object.entries(gradesBySubject).map(([subject, grades]) => ({
    subject,
    average: grades.reduce((sum, grade) => sum + grade, 0) / grades.length,
  }));

  return (
    <table className="table table-striped table-hover table-sm">
      <caption>Studijní skupina: {studjiniSkupina}</caption>
      <thead>
        <tr>
          <th>PREDMET</th>
          <th>PRUMER</th>
        </tr>
      </thead>
      <tbody>
        {averageGrades.map((grade) => (
          <tr key={grade.subject}>
            <td>{grade.subject}</td>
            <td>{grade.average.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}