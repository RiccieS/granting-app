import React, { useState, useEffect } from 'react';
import { SubjectSelectQuery } from '../queries/SubjectSelectQuery';

export default function SubjectSelect({ onSubjectChange}) {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [subjectOptions, setSubjectOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SubjectSelectQuery();
        console.log(response)
        const result = await response.json();
        console.log(result)
        const semesters = result?.data?.acsemesterPage;
        const subjects = semesters.map(s => s.subject.name + " " + s.order)//result?.data?.acsemesterPage?.subject || [];
        //g => ({id: subject.id, title: subject.title....})
        console.log(subjects)
        setSubjectOptions(subjects);
        setSelectedSubject(subjects[0]?.name || '');
      } catch (error) {
        console.error('Error fetching subject names:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedSubject(newValue);
    onSubjectChange(newValue);
  };

  return (
    <div>
      <label htmlFor="subject-select">Předmět:</label>
      <select className="form-select" id="subject-select" value={selectedSubject} onChange={handleChange}>
        {
          subjectOptions.map((subject) => (
            <option key={subject.name} value={subject.name}>
              
              {subject.name} {subject.semesters.order}
            </option>
          ))}
      </select>
    </div>
  );
}
