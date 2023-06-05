import React, { useState } from "react";
import classificationLevels from "../queries/fakeQueryLevels.json";
import { ClassificationUpdateMutation } from '../queries/ClassificationUpdateMutation';
import { authorizedFetch } from '../queries/authorizedFetch';

const EditGradeButton = ({ label, classificationId,classificationLastChange, onTableReload  }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleComboBoxChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);
  
    const selectedLevel = classificationLevels.classificationLevels.find(level => level.name === selectedValue);
    if (selectedLevel) {
    
  
      const mutation = {
        query: ClassificationUpdateMutation,
        variables: {
          id: classificationId,
          lastchange: classificationLastChange,
          classificationlevelId: selectedLevel.id,
        },
        
      };
  
      try {
        const response = await authorizedFetch('/gql', {
          body: JSON.stringify(mutation),
        });
        const data = await response.json();
        console.log(data);
        //setRefreshTable(prevRefreshTable => !prevRefreshTable);
        if (onTableReload) {
          onTableReload();
        }

      } catch (error) {
        console.error(error);
      }
    }
  
  };

  if (isEditing) {
    return (
      <>
        <select value={selectedValue} onChange={handleComboBoxChange}>
          {classificationLevels.classificationLevels.map((level) => (
            <option key={level.id} value={level.name}>
              {level.name}
            </option>
          ))}
        </select>
        <button onClick={handleSaveClick}>Save</button>
      </>
    );
  }

  return <button onClick={handleEditClick}>{label}</button>;
};

export default EditGradeButton;