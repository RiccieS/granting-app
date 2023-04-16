import React from 'react';

export default function StudentSelect({ selectedStudent, onStudentChange, data }) {
  const handleChange = (event) => {
    const studentId = parseInt(event.target.value);  //Převedení "vybrané" hodnoty na číslo 
    const student = data.find((item) => item.id === studentId); //Vyhledání studenta dle ID
    onStudentChange(student);  //Vyvolání funkce onStudentChange s argumentem student tzn. ten nalezený
  };

  return (
    <div>
      <label htmlFor="student-select">Vyberte studenta:</label>
      <select className="form-select" id="student-select" value={selectedStudent ? selectedStudent.id : ''} onChange={handleChange}>
        {data.map((student) => (   //Pro každého studenta v data je vytvořen záznam v comboBoxu
          <option key={student.id} value={student.id}>
            {student.jmeno} {student.prijmeni}   {/*Text záznamu v comboBoxu nastaven na jméno a příjmení studenta*/}
          </option>
        ))}
      </select>
    </div>
  );
}