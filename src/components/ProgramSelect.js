import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProgramSelectQuery } from '../queries/ProgramSelectQuery';
import { setProgramNames, setSelectedProgram } from 'slices/ProgramSelectSlice';
import {setClassificationData} from '../slices/ClassificationStatDataSlice'
import fetchClassificationStatData from '../actions/ClassificationAsyncFetch';
import createLevelsOverview from '../features/CreateGroupLevelsOverview';
import createBarChart  from '../features/CreateProgramBarChart'

export default function ProgramSelect() {
  const dispatch = useDispatch();
  const { programNames, selectedProgram } = useSelector((state) => state.programSelect);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProgramSelectQuery();
        const data = await response.json();
        dispatch(setProgramNames(data.data.programPage));
        
      } catch (error) {
        console.error('Chyba při načítání názvů programu:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleChange = async (event) => {
    const newValue = event.target.value;
    dispatch(setSelectedProgram(newValue));
    const parameters = [1,newValue];
    const filteredData = await fetchClassificationStatData(parameters);
    const levelsOverview = createLevelsOverview(filteredData);

    // Output the levels overview for each group name
    Object.entries(levelsOverview).forEach(([groupName, levels]) => {
        console.log(`Group Name: ${groupName}`);
        console.log(`Count of A: ${levels.countOfA}`);
        console.log(`Count of B: ${levels.countOfB}`);
        console.log(`Count of C: ${levels.countOfC}`);
        console.log(`Count of D: ${levels.countOfD}`);
        console.log(`Count of E: ${levels.countOfE}`);
        console.log(`Count of F: ${levels.countOfF}`);
        console.log('-----------------------------------');
        createBarChart(groupName, levels, 'program-chart');
    });
    dispatch(setClassificationData(filteredData));

  };

  return (
    <div>
      <label htmlFor="program-select">Studijní program:</label>
      <select className="form-select" id="program-select" value={selectedProgram} onChange={handleChange}>
        <option value="none">- Vyberte -</option>
        {programNames.map((program) => (
          <option key={program.id} value={program.id}>
            {program.name} - {program.type.title.name}
          </option>
        ))}
      </select>
      <div className="card-body">
        <canvas id="program-chart"></canvas>
      </div>
    </div>
  );
}