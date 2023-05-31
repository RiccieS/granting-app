import React, { useState, useEffect } from 'react';
import { SubjectSelectQuery } from '../queries/SubjectSelectQuery';

export default function SubjectSelect({ onSubjectChange }) {
  const [selectedSubject, setSelectedSubject] = useState(''); // Stav pro uložení vybraného předmětu
  const [subjectOptions, setSubjectOptions] = useState([]); // Stav pro uložení seznamu možností předmětů

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SubjectSelectQuery(); // Volání dotazu na seznam předmětů
        console.log(response);
        const result = await response.json();
        console.log(result);
        const semesters = result?.data?.acsemesterPage;
        const subjects = semesters.map(s => s.subject.name + " " + s.order); // Získání seznamu předmětů z výsledku dotazu
        console.log(subjects);
        setSubjectOptions(subjects); // Nastavení seznamu možností předmětů
        setSelectedSubject(subjects[0]?.name || ''); // Nastavení výchozího vybraného předmětu
      } catch (error) {
        console.error('Error fetching subject names:', error); // Výpis chyby při načítání seznamu předmětů
      }
    };

    fetchData(); // Zavolání funkce pro načtení seznamu předmětů
  }, []);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedSubject(newValue); // Nastavení vybraného předmětu
    onSubjectChange(newValue); // Volání zadané funkce při změně vybraného předmětu
  };

  return (
    <div>
      {/* Výběr předmětu */}
      <label htmlFor="subject-select">Předmět:</label>
      <select className="form-select" id="subject-select" value={selectedSubject} onChange={handleChange}>
        {/* Možnosti výběru předmětu */}
        {subjectOptions.map((subject) => (
          <option key={subject.name} value={subject.name}>
            {/* Zobrazení názvu předmětu */}
            {subject.name} {subject.semesters.order}
          </option>
        ))}
      </select>
    </div>
  );
}