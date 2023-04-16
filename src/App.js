import React, { useState } from 'react';
import StudentTable from './components/StudentTable';
import StudentSelect from './components/StudentSelect';
import data from './data/students.json';
import grades_data from './data/grades.json';
import BranchSelect from './components/BranchSelect';
//import BranchTable from './components/BranchTable';
import GradesTable from './components/GradesTable';
import SemesterSelect from './components/SemesterSelect';

export default function App() {
  const [selectedStudent, setSelectedStudent] = useState(data[0]); //Tady to později upravíme aby to brala uzivatele dle účtu ze kterého se přihlásil, data[0] specifikuje kdo bude zobrazen
  const [selectedBranch, setSelectedBranch] = useState(data[0]); //State pro zvolenou stuidjní skupinu
  const [selectedSemester, setSelectedSemester] = useState('all');//State pro zvolený semestr
  //Funkce filtrující data pro zvoleného studenta
  const filterData = (student) => {
    if (student) {
      return data.filter((item) => item.id === student.id);
    } else {
      return data;
    }
  };

  const filteredData = filterData(selectedStudent);//Filtrování dat podle zvoleného studenta

  /*let filteredGradesData = grades_data.filter((item) => item.id_student === selectedStudent.id); //Filtr pro zobrazeni grades prislusnemu studentovi

  if (selectedSemester !== 'all') {
    filteredGradesData = filteredGradesData.filter((item) => item.semester === selectedSemester);
  }*/
  //Filtr pro zobrazení známek příslušnému studentovi
  const filteredGradesData = grades_data.filter(
    (item) => item.id_student === selectedStudent.id && 
              (selectedSemester === 'all' || item.semester === parseInt(selectedSemester))
  );

  return (
    <div>
      <div className="container-fluid p-5 bg-success text-white text-center">
        <h1>Students granting App</h1>
      </div>
      <div className="container mt-5">
        <div className="card">
          <h2 className="card-header">Přehled studentů</h2>
          <div className="card-body">
            <BranchSelect data={data} grades_data={grades_data} selectedBranch={selectedBranch} onBranchChange={setSelectedBranch} /> {/* Komponenta volby studijních skupin */}
            <StudentSelect selectedStudent={selectedStudent} onStudentChange={setSelectedStudent} data={data} /> {/* Komponenta výběru studenta*/}
            <div>
              <StudentTable data={filteredData} /> {/* Tabulka vypisující vybrané studenty tzn. jednoho */}
            </div>
          </div>
        </div>
        <div className="card">
          <h2 className="card-header">Přehled známek</h2>
          <div className="card-body">
            <SemesterSelect selectedSemester={selectedSemester} onSemesterChange={setSelectedSemester} /> {/* Komponenta pro výběr semestru */}
            <div>
              <GradesTable data={filteredGradesData} /> {/* Tabulka s výpisem známek za semestr */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}