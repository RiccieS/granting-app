import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubjectSelectQuery } from '../queries/SubjectSelectQuery';
import { setSubjectNames, setSelectedSubject, setClassificationsData } from '../slices/SubjectSelectSlice';
import createLevelsOverview from '../features/CreateGroupLevelsOverview';
import fetchClassificationStatData from '../actions/ClassificationAsyncFetch';
import createBarChart from '../features/CreateProgramBarChart';

export default function SubjectSelect() {
  const dispatch = useDispatch();
  const { subjectNames, selectedSubject } = useSelector((state) => state.subjectSelect);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SubjectSelectQuery();
        const data = await response.json();

        const uniqueSubjectIds = new Set(); // Store unique subject IDs
        const subjectNames = data.data.acsemesterPage.reduce((subjects, item) => {
          if (Array.isArray(item.subject)) {
            item.subject.forEach((s) => {
              if (!uniqueSubjectIds.has(s.id)) { // Check if the subject ID is already added
                const subject = {
                  subjectID: s.id,
                  subjectName: s.name,
                };
                subjects.push(subject);
                uniqueSubjectIds.add(s.id);
              }
            });
          } else {
            if (!uniqueSubjectIds.has(item.subject.id)) {
              const subject = {
                subjectID: item.subject.id,
                subjectName: item.subject.name,
              };
              subjects.push(subject);
              uniqueSubjectIds.add(item.subject.id);
            }
          }
          return subjects;
        }, []);

        dispatch(setSubjectNames(subjectNames));
      } catch (error) {
        console.error('Error fetching subject names:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleChange = async (event) => {
    const newValue = event.target.value;
    dispatch(setSelectedSubject(newValue));
    if (newValue === "") {
      // Clear the canvas
      const canvas = document.getElementById("subject-chart");
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
    else {
      const parameters = [3, newValue];
      const filteredData = await fetchClassificationStatData(parameters);
      const levelsOverview = createLevelsOverview(filteredData);
      dispatch(setClassificationsData(filteredData));
      Object.entries(levelsOverview).forEach(([groupName, levels]) => {
        console.log(`Group Name: ${groupName}`);
        console.log(`Count of A: ${levels.countOfA}`);
        console.log(`Count of B: ${levels.countOfB}`);
        console.log(`Count of C: ${levels.countOfC}`);
        console.log(`Count of D: ${levels.countOfD}`);
        console.log(`Count of E: ${levels.countOfE}`);
        console.log(`Count of F: ${levels.countOfF}`);
        console.log('-----------------------------------');
        createBarChart(groupName, levels, 'subject-chart');
      });
    }

  };

  return (

    <div className="card">
      <h3 className="card-header" htmlFor="subject-select">Předmět:</h3>
      <div className="card-body">
        <select className="form-select" id="subject-select" value={selectedSubject} onChange={handleChange}>
          <option value="">- Vyberte -</option>
          {subjectNames.map((subject) => (
            <option key={subject.subjectID} value={subject.subjectID}>
              {subject.subjectName}
            </option>
          ))}
        </select>
        <div>
          <canvas id="subject-chart"></canvas>
        </div>
      </div>

    </div>
  );
}
