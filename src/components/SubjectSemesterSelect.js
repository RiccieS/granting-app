import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SemesterSubjectSelectQuery } from '../queries/SemesterSubjectSelectQuery';
import { setSubjectNames, setSelectedSubject, setClassificationsData } from '../slices/SubjectSemesterSelectSlice';
import createLevelsOverview from '../features/CreateGroupLevelsOverview';
import fetchClassificationStatData from '../actions/ClassificationAsyncFetch';
import createBarChart from '../features/CreateProgramBarChart';

/**
 * Komponenta pro výběr předmětu a semestru.
 * @returns {JSX.Element} Element komponenty SubjectSemesterSelect.
 */
export function SubjectSemesterSelect() {
  const dispatch = useDispatch();
  const { subjectNames, selectedSubject } = useSelector((state) => state.subjectSemesterSelect);

  useEffect(() => {
    /**
     * Načtení seznamu předmětů a semestrů při načtení komponenty.
     */
    const fetchData = async () => {
      try {
        const response = await SemesterSubjectSelectQuery();
        const data = await response.json();
        console.log("subject semester: " + JSON.stringify(data, null, 2));
        // Filtruje duplicity předmětů a vytváří pole s názvy předmětů a příslušnými semestry
        const filteredSubjectNames = [];
        const uniqueCombinations = new Set();

        data.data.acsemesterPage.forEach((item) => {
          const subjectID = item.subject.id;
          const subjectName = item.subject.name;
          item.subject.semesters.forEach((semester) => {
            const semesterOrder = semester.order;
            const semesterID = semester.id;
            const combination = subjectID + '-' + semesterID;

            if (!uniqueCombinations.has(combination)) {
              uniqueCombinations.add(combination);
              filteredSubjectNames.push({
                subjectName: subjectName,
                semesterOrder: semesterOrder,
                semesterID: semesterID,
                subjectID: subjectID,
              });
            }
          });
        });

        dispatch(setSubjectNames(filteredSubjectNames));
      } catch (error) {
        console.error('Error fetching subject names:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  /**
   * Funkce pro zachycení události změny hodnoty výběru.
   * @param {Object} event - Událost změny hodnoty výběru.
   */
  const handleChange = async (event) => {
    const newValue = event.target.value;

    // Nastaví vybraný předmět a semestr pomocí dispečera
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
      if (filteredData.length === 0) {
        // Jestli je filteredData prázdné, vykreslí prázdný graf
        const canvas = document.getElementById("subjectSemester-chart");
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
      } else {
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
    }
  };

  return (
    <div className="card">
      <h3 className="card-header" htmlFor="subjectSemester-select">Semestr předmětu:</h3>
      <div className="card-body">
        <select className="form-select" id="subjectSemester-select" value={selectedSubject} onChange={handleChange}>
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
