import React from 'react';
import { useDispatch } from 'react-redux';

import { UpdateUserClassification } from '../utils/UpdateUserClassification';

/**
 * Komponenta pro výběr klasifikace předmětu pro semestr.
 * @param {Object} props - Vlastnosti komponenty
 * @param {number} props.index - Index předmětu
 * @param {Object[]} props.filteredData - Filtrovaná data uživatelů
 * @param {Object[]} props.levels - Seznam dostupných úrovní klasifikace
 * @returns {JSX.Element} Element komponenty SemesterSubjectSetClassificationSelect
 */
export const SemesterSubjectSetClassificationSelect = ({ index, filteredData, levels }) => {
  const dispatch = useDispatch();

  /**
   * Obsluha události změny výběru úrovně klasifikace.
   * @param {string} targetLevel - ID vybrané úrovně
   * @param {Object[]} filteredData - Filtrovaná data uživatelů
   */
  const handleLevelChange = (targetLevel, filteredData) => {
    const newLevel = levels.find((level) => level.id === targetLevel);

    console.log("filtered: " + filteredData);
    filteredData.forEach(user => {
      user.forEach(classification => {
        console.log(classification);
        if (classification.order === index) {
          dispatch(UpdateUserClassification(classification, newLevel));
          /*disptach(funkce co to změní ve storu pro tabulku)*/
        }
      });
    });
  };

  return (
    <select className='form-control' onChange={(e) => { handleLevelChange(e.target.value, filteredData); }}>
      <option value=''>Select Level</option>
      {levels.map((level) => (
        <option key={level.id} value={level.id}>
          {level.name}
        </option>
      ))}
    </select>
  );
};

export default SemesterSubjectSetClassificationSelect;
