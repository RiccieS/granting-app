import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProgramSelectQuery } from '../queries/ProgramSelectQuery';
import { setProgramNames, setSelectedProgram } from 'slices/ProgramSelectSlice';
import { setClassificationData } from '../slices/ClassificationStatDataSlice';
import fetchClassificationStatData from '../actions/ClassificationAsyncFetch';
import createLevelsOverview from '../features/CreateGroupLevelsOverview';
import createBarChart from '../features/CreateProgramBarChart';

/**
 * Komponenta pro výběr studijního programu.
 * @returns {JSX.Element} Element komponenty ProgramSelect
 */
export function ProgramSelect() {
  const dispatch = useDispatch();
  const { programNames, selectedProgram } = useSelector((state) => state.programSelect);

  useEffect(() => {
    // Funkce pro načítání názvů programů pro výběr
    const fetchData = async () => {
      try {
        const response = await ProgramSelectQuery();
        const data = await response.json();

        // Filtrace duplikátů na základě ID
        const uniqueProgramNames = data.data.programPage.filter((program, index, self) => {
          return self.findIndex((p) => p.id === program.id) === index;
        });

        dispatch(setProgramNames(uniqueProgramNames));
      } catch (error) {
        console.error('Chyba při načítání názvů programu:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  // Funkce pro změnu vybraného programu
  /**
   * Obsluha události změny výběru programu.
   * @param {Object} event - Událost změny
   */
  const handleChange = async (event) => {
    const newValue = event.target.value;
    dispatch(setSelectedProgram(newValue));
    if (newValue === "") {
      // Vymazání plátna
      const canvas = document.getElementById("program-chart");
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      const parameters = [1, newValue];
      const filteredData = await fetchClassificationStatData(parameters);
      const levelsOverview = createLevelsOverview(filteredData);
      dispatch(setClassificationData(filteredData));
      // Výpis přehledu úrovní pro každý název skupiny
      Object.entries(levelsOverview).forEach(([groupName, levels]) => {
        console.log(`Název skupiny: ${groupName}`);
        console.log(`Počet A: ${levels.countOfA}`);
        console.log(`Počet B: ${levels.countOfB}`);
        console.log(`Počet C: ${levels.countOfC}`);
        console.log(`Počet D: ${levels.countOfD}`);
        console.log(`Počet E: ${levels.countOfE}`);
        console.log(`Počet F: ${levels.countOfF}`);
        console.log('-----------------------------------');
        createBarChart(groupName, levels, 'program-chart');
      });
    }
  };

  return (
    <div className="card">
      <h3 className="card-header" htmlFor="program-select">Studijní program:</h3>
      <div className="card-body">
        <select className="form-select" id="program-select" value={selectedProgram} onChange={handleChange}>
          <option value="">- Vyberte -</option>
          {programNames.map((program) => (
            <option key={program.id} value={program.id}>
              {program.name} - {program.type.title.name}
            </option>
          ))}
        </select>
        <div>
          <canvas id="program-chart"></canvas>
        </div>
      </div>
    </div>
  );
}
