import React from 'react';
import { GroupQueryLarge } from '../querries/GroupQueryLarge';

const ButtonQuery = () => {
  const handleClick = async () => {
    try {
        const response = await GroupQueryLarge();
        const resultString = JSON.stringify(response);
        console.log(resultString);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Get data</button>
    </div>
  );
};

export default ButtonQuery;