import React from 'react';

export default function SemesterSelect({ selectedSemester, onSemesterChange}) {

  // Funkce pro změnu vybraného semestru
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    onSemesterChange(selectedValue);
  };

  return (
    <div>
      <label htmlFor="semester-select">Vyberte semestr:</label>

      {/* Menu s výběrem semestru */}
      <select className="form-select" id="semester-select" value={selectedSemester ? selectedSemester : ''} onChange={handleChange}>

        {/* Možnost zobrazit všechny semestry */}
        <option key="all" value="all">-</option>

        {/* Cyklus tvořící volby pro výběr semestru 1-10*/}
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>{i + 1}</option>
        ))}
      </select>
    </div>
  );
}