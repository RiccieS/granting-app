import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubjectSelectQuery } from '../queries/SubjectSelectQuery';
import { setSubjectNames, setSelectedSubject, setClassificationsData } from '../slices/SubjectSemesterSelectSlice';
import createLevelsOverview from '../features/CreateGroupLevelsOverview';
import fetchClassificationStatData from '../actions/ClassificationAsyncFetch';
import createBarChart from '../features/CreateProgramBarChart';

export default function SubjectSemesterSelect() {
  const dispatch = useDispatch();
  const { subjectNames, selectedSubject } = useSelector((state) => state.subjectSemesterSelect);

  useEffect(() => {
    // Načtení seznamu předmětů a semestrů při načtení komponenty
    const fetchData = async () => {
      try {
        const response = await SubjectSelectQuery();
        const data = await response.json();

        // Filtruje duplicity předmětů a vytváří pole s názvy předmětů a příslušnými semestry
        const filteredSubjectNames = data.data.acsemesterPage.reduce((filtered, item) => {
          const subjectID = item.subject.id;
          const isDuplicate = filtered.some((subject) => subject.subjectID === subjectID);
          if (!isDuplicate) {
            item.subject.semesters.forEach((semester) => {
              const subject = {
                subjectName: item.subject.name,
                semesterOrder: semester.order,
                semesterID: semester.id,
                subjectID: subjectID,
              };
              filtered.push(subject);
            });
          }
          return filtered;
        }, []);

        dispatch(setSubjectNames(filteredSubjectNames));
      } catch (error) {
        console.error('Error fetching subject names:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleChange = async (event) => {
    const newValue = event.target.value;

    // Nastaví vybraný předmět pomocí dispečera
    dispatch(setSelectedSubject(newValue));

    if (newValue === "") {
      // Pokud není vybrán žádný předmět, vyčistí plátno grafu
      const canvas = document.getElementById("subjectSemester-chart");
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      console.log('Selected subject: ' + newValue);
      const [subjectID, semesterID] = newValue.split(',');
      const parameters = [2, subjectID, semesterID];

      // Získá statistická data klasifikací pomocí asynchronní akce
      const filteredData = await fetchClassificationStatData(parameters);

      // Vytvoří přehled úrovní klasifikací pomocí funkce createLevelsOverview
      const levelsOverview = createLevelsOverview(filteredData);

      // Nastaví data klasifikací pomocí dispečera
      dispatch(setClassificationsData(filteredData));

      // Vytvoří a zobrazí sloupcový graf pro každou skupinu úrovní
      Object.entries(levelsOverview).forEach(([groupName, levels]) => {
        console.log(`Group Name: ${groupName}`);
        console.log(`Count of A: ${levels.countOfA}`);
        console.log(`Count of B: ${levels.countOfB}`);
        console.log(`Count of C: ${levels.countOfC}`);
        console.log(`Count of D: ${levels.countOfD}`);
        console.log(`Count of E: ${levels.countOfE}`);
        console.log(`Count of F: ${levels.countOfF}`);
        console.log('-----------------------------------');
        createBarChart(groupName, levels, 'subjectSemester-chart');
      });
    }
  };

  return (
    <div className="card">
      <h3 className="card-header" htmlFor="subject-select">Semestr předmětu:</h3>
      <div className="card-body">
        <select className="form-select" id="subject-select" value={selectedSubject} onChange={handleChange}>
          <option value="">- Vyberte -</option>
          {subjectNames.map((subject) => (
            <option key={[subject.subjectID, subject.semesterID]} value={[subject.subjectID, subject.semesterID]}>
              {subject.subjectName}-{subject.semesterOrder}
            </option>
          ))}
        </select>
        <div>
          <canvas id="subjectSemester-chart"></canvas>
        </div>
      </div>
    </div>
  );
}
