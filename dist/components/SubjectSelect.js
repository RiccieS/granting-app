import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubjectSelectQuery } from '../queries/SubjectSelectQuery';
import { setSubjectNames, setSelectedSubject, setClassificationsData } from '../slices/SubjectSelectSlice';
import createLevelsOverview from '../features/CreateGroupLevelsOverview';
import fetchClassificationStatData from '../actions/ClassificationAsyncFetch';
import createBarChart from '../features/CreateProgramBarChart';

/**
 * Komponenta pro výběr předmětu.
 * @returns {JSX.Element} Element komponenty SubjectSelect.
 */
export function SubjectSelect() {
  const dispatch = useDispatch();
  const {
    subjectNames,
    selectedSubject
  } = useSelector(state => state.subjectSelect);
  useEffect(() => {
    /**
     * Načtení seznamu předmětů při načtení komponenty.
     */
    const fetchData = async () => {
      try {
        const response = await SubjectSelectQuery();
        const data = await response.json();
        const subjectNamesMap = new Map();
        data.data.acsemesterPage.forEach(item => {
          if (Array.isArray(item.subject)) {
            item.subject.forEach(s => {
              const subject = {
                subjectID: s.id,
                subjectName: s.name
              };
              if (!subjectNamesMap.has(subject.subjectName)) {
                subjectNamesMap.set(subject.subjectName, subject);
              }
            });
          } else {
            const subject = {
              subjectID: item.subject.id,
              subjectName: item.subject.name
            };
            if (!subjectNamesMap.has(subject.subjectName)) {
              subjectNamesMap.set(subject.subjectName, subject);
            }
          }
        });
        const subjectNames = [...subjectNamesMap.values()];
        dispatch(setSubjectNames(subjectNames));
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
  const handleChange = async event => {
    const newValue = event.target.value;

    // Nastavení vybraného předmětu pomocí dispečera
    dispatch(setSelectedSubject(newValue));
    if (newValue === "") {
      // Vymazání plátna
      const canvas = document.getElementById("subject-chart");
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      const parameters = [3, newValue];

      // Získání statistických dat klasifikací pomocí asynchronní akce
      const filteredData = await fetchClassificationStatData(parameters);
      if (filteredData.length === 0) {
        // Pokud jsou data prázdná, vykreslení prázdného grafu
        const canvas = document.getElementById("subject-chart");
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
      } else {
        // Vytvoření přehledu úrovní klasifikací pomocí funkce createLevelsOverview
        const levelsOverview = createLevelsOverview(filteredData);

        // Nastavení dat klasifikací pomocí dispečera
        dispatch(setClassificationsData(filteredData));

        // Vytvoření a zobrazení sloupcového grafu pro každou skupinu úrovní
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
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "card-header",
    htmlFor: "subject-select"
  }, "P\u0159edm\u011Bt:"), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    id: "subject-select",
    value: selectedSubject,
    onChange: handleChange
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "- Vyberte -"), [...new Set(subjectNames.map(subject => subject.subjectID))].map(subjectID => {
    const subject = subjectNames.find(subject => subject.subjectID === subjectID);
    return /*#__PURE__*/React.createElement("option", {
      key: subject.subjectID,
      value: subject.subjectID
    }, subject.subjectName);
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("canvas", {
    id: "subject-chart"
  }))));
}