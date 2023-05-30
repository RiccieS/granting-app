import React, { useEffect, useState } from 'react';
import { GradesQuery } from '../queries/GradesQuery';
import { GradesLevelsQuery } from '../queries/GradesLevelsQuery';
import { authorizedFetch } from '../queries/authorizedFetch';
import { ClassificationUpdateMutation } from '../queries/ClassificationUpdateMutation';
import fakeQueryLevel from '../queries/fakeQueryLevels.json'; // Import the JSON data

export default function GradesTable({ selectedStudent }) {
  const [gradesData, setGradesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editableColumns, setEditableColumns] = useState([]);
  const [refreshTable, setRefreshTable] = useState(false);
  const [levelOptions, setLevelOptions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const gradesResponse = await GradesQuery();
        const gradesData = await gradesResponse.json();
        const grades = gradesData?.data?.acclassificationPage || [];
        const filteredGrades = grades.filter(
          (grade) => grade.user?.id === selectedStudent
        );
        setGradesData(filteredGrades);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    const fetchLevelOptions = async () => {
      try {
        // Replace the API call with the fakeQueryLevel data
        const levels = fakeQueryLevel.classificationLevels || [];
        setLevelOptions(levels);
      } catch (error) {
        console.error('Failed to fetch level options:', error);
      }
    };

    fetchData();
    fetchLevelOptions();
  }, [selectedStudent, refreshTable]);

  const handleEditClick = (index, columnIndex) => {
    setEditableColumns((prevColumns) => {
      const updatedColumns = [...prevColumns];
      updatedColumns[index] = columnIndex;
      return updatedColumns;
    });
  };

  const handleSelectChange = (event, index, grade) => {
    const { value } = event.target;
    setEditableColumns((prevColumns) => {
      const updatedColumns = [...prevColumns];
      updatedColumns[index] = value;
      return updatedColumns;
    });
    const selectedAcclassificationPageId = grade?.id; // Get the id of the acclassificationPage
    const selectedLastChange = grade?.lastchange; // Use the existing lastchange value
    handleSaveClick(index, selectedAcclassificationPageId, value, selectedLastChange); // Pass the value as the levelId parameter
  };

  const handleSaveClick = async (index, classificationId, levelId, lastChange) => {
    const selectedLevel = levelOptions.find((level) => level.id === levelId); // Find the selected level object
    const selectedLevelId = selectedLevel ? selectedLevel.id : ''; // Get the id of the selected level
  
    const mutation = {
      query: ClassificationUpdateMutation,
      variables: {
        id: classificationId,
        lastchange: lastChange,
        classificationlevelId: selectedLevelId, // Pass the selected level id to the mutation
      },
    };
    
    try {
      const response = await authorizedFetch('/gql', {
        body: JSON.stringify(mutation),
      });
      const data = await response.json();
      // Handle the response data as needed
      console.log(data);
      setRefreshTable(prevRefreshTable => !prevRefreshTable);

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

  const handleTdClick = (grade) => {
    const { id } = grade; // Get the id of the acclassificationPage
    console.log(id);
  };

  if (loading) {
    return <div>Loading grades...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const groupedGrades = groupGradesByOrderAndSubject(gradesData);

  return (
    <div>
      <h2>Grades</h2>
      {Object.keys(groupedGrades).length === 0 ? (
        <div>No grades available.</div>
      ) : (
        <table className="table table-striped table-hover table-sm">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Semester</th>
              {renderLevelHeaders()}
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(groupedGrades).map(([key, gradesGroup]) => {
              const [order, subject] = key.split('-');
              return (
                <tr key={key}>
                  <td>{subject}</td>
                  <td>{order}</td>
                  {renderLevelColumns(gradesGroup)}
                  <td>{gradesGroup[0].type?.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );

  function groupGradesByOrderAndSubject(grades) {
    return grades.reduce((result, grade) => {
      const { semester } = grade;
      const key = `${semester.order}-${semester.subject.name}`;
      if (result[key]) {
        result[key].push(grade);
      } else {
        result[key] = [grade];
      }
      return result;
    }, {});
  }

  function renderLevelHeaders() {
    const levelCount = 3; // Assuming 3 levels
    const headers = [];
    for (let i = 1; i <= levelCount; i++) {
      headers.push(<th key={i}>Level {i}</th>);
    }
    return headers;
  }

  function renderLevelColumns(gradesGroup) {
    const levelCount = 3; // Assuming 3 levels
    const levelOptions = fakeQueryLevel.classificationLevels || []; // Define levelOptions within the function scope
    const columns = [];
    for (let i = 0; i < levelCount; i++) {
      const grade = gradesGroup[i]; // Get the corresponding grade object
      const levelName = grade ? grade.level.name : '-';
      const isEditable = editableColumns[i] === i;
      const selectedGrade = levelOptions.find(
        (level) => level.id === editableColumns[i]
      );
      columns.push(
        <td key={i}>
          {isEditable ? (
            <select
              className="form-select"
              value={selectedGrade?.id || ""}
              onChange={(event) => handleSelectChange(event, i, grade)} // Pass the grade as a parameter
            >
              {levelOptions.map((level) => (
                <option
                  key={level.id}
                  value={level.id}
                >
                  {level.name}
                </option>
              ))}
            </select>
          ) : (
            <>
              {levelName}
              <button
                className="btn btn-link"
                onClick={() => handleEditClick(i, i)}
              >
                Edit
              </button>
            </>
          )}
        </td>
      );
    }
    return columns;
  }
}