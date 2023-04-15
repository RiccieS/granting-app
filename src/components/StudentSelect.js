import React from 'react';

export default function StudentSelect({ selectedStudent, onStudentChange, data }) {
  const handleChange = (event) => {
    const studentId = parseInt(event.target.value);
    const student = data.find((item) => item.id === studentId);
    onStudentChange(student);
  };

  return (
    <div>
      <label htmlFor="student-select">Vyberte studenta:</label>
      <select className="form-select" id="student-select" value={selectedStudent ? selectedStudent.id : ''} onChange={handleChange}>
        {data.map((student) => (
          <option key={student.id} value={student.id}>
            {student.jmeno} {student.prijmeni}
          </option>
        ))}
      </select>
    </div>
  );
}