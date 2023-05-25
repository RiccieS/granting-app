import React, { useEffect, useState } from 'react';
import { GradesQuery } from '../queries/GradesQuery';
import { GradesLevelsQuery } from '../queries/GradesLevelsQuery';
import {ClassificationUpdateMutation} from '../queries/ClassificationUpdateMutation';
import { authorizedFetch } from '../queries/authorizedFetch'
//import { handleSaveClick } from '../queries/GradesMutationFetch';

export default function GradesTable({ selectedStudent }) {
  const [gradesData, setGradesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editableColumns, setEditableColumns] = useState([]);
  const [levelOptions, setLevelOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gradesResponse = await GradesQuery();
        const gradesData = await gradesResponse.json();
        const grades = gradesData?.data?.acclassificationPage || [];
        console.log(grades);
        const filteredGrades = grades.filter(
          (grade) => grade.user?.id === selectedStudent
        );
        console.log(selectedStudent);
        setGradesData(filteredGrades);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    const fetchLevelOptions = async () => {
      try {
        const levelsResponse = await GradesLevelsQuery();
        const levelsData = await levelsResponse.json();
        const levels = levelsData?.data?.acclassificationPage || [];
        setLevelOptions(levels);
      } catch (error) {
        console.error('Failed to fetch level options:', error);
      }
    };

    fetchData();
    fetchLevelOptions();
  }, [selectedStudent]);

  const handleEditClick = (index, columnIndex) => {
    setEditableColumns((prevColumns) => {
      const updatedColumns = [...prevColumns];
      updatedColumns[index] = columnIndex;
      return updatedColumns;
    });
  };

  const handleSelectChange = (event, index) => {
    const { value } = event.target;
    setEditableColumns((prevColumns) => {
      const updatedColumns = [...prevColumns];
      updatedColumns[index] = value;
      return updatedColumns;
    });
  };

  const handleSaveClick = async (index, classificationId, levelId) => {
    const mutation = {
      query: ClassificationUpdateMutation,
      variables: {
        classificationId,
        levelId,
      },
    };
  
    try {
      const response = await authorizedFetch('/gql', {
        body: JSON.stringify(mutation),
      });
      const data = await response.json();
      // Handle the response data as needed
      console.log(data);
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  
    setEditableColumns((prevColumns) => {
      const updatedColumns = [...prevColumns];
      updatedColumns[index] = null;
      return updatedColumns;
    });
  };

  const handleDiscardClick = (index) => {
    setEditableColumns((prevColumns) => {
      const updatedColumns = [...prevColumns];
      updatedColumns[index] = null;
      return updatedColumns;
    });
  };

  if (loading) {
    return <div>Loading grades...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Grades</h2>
      {gradesData.length === 0 ? (
        <div>No grades available.</div>
      ) : (
        <table className="table table-striped table-hover table-sm">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Semester</th>
              <th>Level 1</th>
              <th>Level 2</th>
              <th>Level 3</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {gradesData.map((grade, index) => (
              <tr key={grade.id}>
                <td>{grade.semester?.subject?.name}</td>
                <td>{grade.semester?.order}</td>

                {grade.semester?.classifications?.slice(0, 3).map((classification, i) => {
                  const isEditable = editableColumns[index] === i;
                  return (
                    <td key={classification.level.name}>
                      {isEditable ? (
                        <div>
                          <select
                            value={editableColumns[index]}
                            onChange={(event) => handleSelectChange(event, index)}
                          >
                            
                            {levelOptions.map((level) => (
                              <option key={level.level.id} value={level.level.id}>
                                {level.level.name}
                              </option>
                            ))}
                          </select>
                          <button onClick={() => handleSaveClick(index, grade.id, levelOptions[index]?.level?.id)}>Save</button>
                          <button onClick={() => handleDiscardClick(index)}>Discard</button>
                        </div>
                      ) : (
                        <>
                          {classification.level.name}
                          <button onClick={() => handleEditClick(index, i)}>Edit</button>
                        </>
                      )}
                    </td>
                  );
                })}

                {grade.semester?.classifications && grade.semester?.classifications.length < 3 && (
                  Array(3 - grade.semester?.classifications.length)
                    .fill()
                    .map((_, i) => <td key={i}>-</td>)
                )}

                <td>{grade.type?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}