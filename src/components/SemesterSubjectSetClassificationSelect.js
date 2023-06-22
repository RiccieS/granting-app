import React from 'react';
import { useDispatch } from 'react-redux';

import { UpdateUserClassification } from '../utils/UpdateUserClassification';

export const SemesterSubjectSetClassificationSelect = ({ index, filteredData, levels}) => {
  const dispatch = useDispatch();

  const handleLevelChange = (targetLevel, filteredData) => {
    const newLevel = levels.find((level) => level.id === targetLevel);

   
    filteredData.forEach(user => {
      user.forEach(classification => {
        console.log(classification)
        if (classification.order === index) {
          dispatch(UpdateUserClassification(classification, newLevel));
          /*disptach(funkce co to změní ve storu pro tabulku)*/
        }
      })
    });
  }

  return (
    <select className='form-control' onChange={(e) => {handleLevelChange(e.target.value, filteredData);}}>
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
