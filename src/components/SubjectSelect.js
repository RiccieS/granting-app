import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubjectSelectQuery } from '../queries/SubjectSelectQuery';
import {setSubjectNames, setSelectedSubject, setClassificationsData} from '../slices/SubjectSelectSlice';
import createLevelsOverview from '../features/CreateGroupLevelsOverview';
import fetchClassificationStatData from '../actions/ClassificationAsyncFetch';
import createBarChart  from '../features/CreateProgramBarChart'

export default function SubjectSelect() {
  //const [selectedSubject, setSelectedSubject] = useState(''); // Stav pro uložení vybraného předmětu
  //const [subjectOptions, setSubjectOptions] = useState([]); // Stav pro uložení seznamu možností předmětů
  const dispatch = useDispatch();
  const { subjectNames, selectedSubject} = useSelector((state) => state.subjectSelect);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SubjectSelectQuery(); // Volání dotazu na seznam předmětů
        //console.log(response);
        const data = await response.json();
        //dispatch(setSubjectNames(data.data.acsemesterPage));
        const subjectNames = [];

data.data.acsemesterPage.forEach(item => {
  item.subject.semesters.forEach(semester => {
   /* const subjectSemesterID = {
      semesterID: semester.id,
      subjectID: item.subject.id,
    };*/
    const subject = {
      //subjectID: item.subject.id,
      //semesterID: semester.id,
      subjectName: item.subject.name,
      semesterOrder: semester.order,
      semesterID: semester.id,
      subjectID: item.subject.id,
      //subjectSemesterID: subjectSemesterID,
    };
    subjectNames.push(subject);
  });
});

dispatch(setSubjectNames(subjectNames));
        //const semesters = result?.data?.acsemesterPage;
        //const subjects = result.data.acsemesterPage.map(s => s.subject.name + " " + s.subject.semsters.order); // Získání seznamu předmětů z výsledku dotazu
        //console.log(subjects);
        //setSubjectOptions(subjects); // Nastavení seznamu možností předmětů
        //setSelectedSubject(subjects[0]?.name || ''); // Nastavení výchozího vybraného předmětu
      } catch (error) {
        console.error('Error fetching subject names:', error); // Výpis chyby při načítání seznamu předmětů
      }
    };

    fetchData(); // Zavolání funkce pro načtení seznamu předmětů
  }, [dispatch]);

  const handleChange = async (event) => {
    const newValue = event.target.value;
    dispatch(setSelectedSubject(newValue)); // Nastavení vybraného předmětu
    //onSubjectChange(newValue); // Volání zadané funkce při změně vybraného předmětu
    console.log("Selected subject: "+newValue);
    const [subjectID, semesterID ] = newValue.split(',');
    const parameters = [2,subjectID,semesterID];
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
  };

  return (
    <div>
      {/* Výběr předmětu */}
      <label htmlFor="subject-select">Předmět:</label>
      <select className="form-select" id="subject-select" value={selectedSubject} onChange={handleChange}>
       <option value="">- Vyberte -</option>
        {subjectNames.map((subject) => (
          
          <option key={[subject.subjectID,subject.semesterID]} value={[subject.subjectID,subject.semesterID]}>
            {subject.subjectName}-{subject.semesterOrder}
          </option>
        ))}
      </select>
      <div className="card-body">
        <canvas id="subject-chart"></canvas>
      </div>
    </div>
  );
}