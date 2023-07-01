import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSemester } from 'slices/SemesterSelectSlice';

/**
 * Komponenta pro výběr semestru.
 * @param {Function} onSemesterChange - Funkce volaná po změně vybraného semestru
 * @returns {JSX.Element} Element komponenty SemesterSelect
 */
export function SemesterSelect({ onSemesterChange }) {
  const dispatch = useDispatch();
  const { selectedSemester } = useSelector((state) => state.semesterSelect);

  // Funkce pro změnu vybraného semestru
  /**
   * Obsluha události změny výběru semestru.
   * @param {Object} event - Událost změny
   */
  const handleChange = (event) => {
    const selectedSemester = event.target.value;
    dispatch(setSelectedSemester(selectedSemester));
    onSemesterChange(selectedSemester);
    //onSemesterChange(selectedValue);
  };

  return (
    <div>
      <label htmlFor="semester-select">Vyberte semestr:</label>

      {/* Menu s výběrem semestru */}
      <select className="form-select" id="semester-select" value={selectedSemester} onChange={handleChange}>

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
