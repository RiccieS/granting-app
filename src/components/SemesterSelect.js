import React from 'react';
export default function SemesterSelect({ selectedSemester, onSemesterChange}) {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    onSemesterChange(selectedValue);
  };

  return (
    <div>
      <label htmlFor="semester-select">Vyberte semestr:</label>
      <select id="semester-select" value={selectedSemester ? selectedSemester : ''} onChange={handleChange}>
        <option key="all" value="all">-</option>
        {[...Array(10)].map((_, i) => (   //cyklus 1-10 (pocet celkem semestru)
          <option key={i + 1} value={i + 1}>{i + 1}</option>
        ))}
      </select>
    </div>
  );
}