import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { UpdateUserClassification } from './UpdateUserClassification';

export const UserSetClassificationSelect = ({ classification, levels }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Empty dependency array, runs only once when the component mounts
  }, []);

  const handleLevelChange = async (event) => {
    const selectedLevel = event.target.value;
    const newLevel = levels.find(level => level.id === selectedLevel);
    if (newLevel) {
      try {
        await dispatch(UpdateUserClassification(classification, newLevel,dispatch));
      } catch (error) {
        // Handle any error that occurred during the async operation
        console.log(error);
      }
    }
  };

  return (
    <select className='form-control' onChange={handleLevelChange}>
      <option value=''>Select Level</option>
      {levels.map(level => (
        <option key={level.id} value={level.id}>{level.name}</option>
      ))}
    </select>
  );
};

export default UserSetClassificationSelect;
