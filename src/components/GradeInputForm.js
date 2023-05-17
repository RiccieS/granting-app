// DataForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addData } from '../features/dataSlice';


const GradeInputForm = () => {
  const [semester, setSemester] = useState('');
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      semester,
      grade,
      subject,
    };

    dispatch(addData(newData));

    setSemester('');
    setGrade('');
    setSubject('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Semestr:
        <input
          type="text"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        />
      </label>
      <label>
        Známka:
        <input
          type="text"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
      </label>
      <label>
        Předmět:
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </label>
      <button type="submit">Přidat známku</button>
    </form>
  );
};

export default GradeInputForm;