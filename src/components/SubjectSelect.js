import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubjectSelectQuery } from '../queries/SubjectSelectQuery';
import {setSubjectNames, setSelectedSubject} from '../slices/SubjectSelectSlice';

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
    const subjectSemesterID = {
      semesterID: semester.id,
      subjectID: item.subject.id,
    };
    const subject = {
      //subjectID: item.subject.id,
      //semesterID: semester.id,
      subjectName: item.subject.name,
      semesterOrder: semester.order,
      subjectSemesterID: subjectSemesterID,
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

  const handleChange = (event) => {
    const newValue = event.target.value;
    dispatch(setSelectedSubject(newValue)); // Nastavení vybraného předmětu
    //onSubjectChange(newValue); // Volání zadané funkce při změně vybraného předmětu
    console.log("Selected subject: "+newValue);
  };

  return (
    <div>
      {/* Výběr předmětu */}
      <label htmlFor="subject-select">Předmět:</label>
      <select className="form-select" id="subject-select" value={selectedSubject} onChange={handleChange}>
       <option value="none">- Vyberte -</option>
        {subjectNames.map((subject) => (
          
          <option key={subject.subjectSemesterID} value={subject.subjectSemesterID}>
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