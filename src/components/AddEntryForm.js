import { useState } from 'react';

function AddEntryForm({ jsonObject, onUpdate }) {
  const [idGrade, setIdGrade] = useState('');
  const [idStudent, setIdStudent] = useState('');
  const [semester, setSemester] = useState('');
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = { 
      id_grade: idGrade,
      id_student: idStudent,
      semester,
      subject,
      grade
    };
    const updatedObject = { ...jsonObject, newEntry };
    onUpdate(updatedObject);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID Grade:
        <input type="text" value={idGrade} onChange={(e) => setIdGrade(e.target.value)} />
      </label>
      <label>
        ID Student:
        <input type="text" value={idStudent} onChange={(e) => setIdStudent(e.target.value)} />
      </label>
      <label>
        Semester:
        <input type="text" value={semester} onChange={(e) => setSemester(e.target.value)} />
      </label>
      <label>
        Subject:
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </label>
      <label>
        Grade:
        <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} />
      </label>
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default AddEntryForm;