import { useSelector } from 'react-redux';
import Table from "react-bootstrap/Table";
import SemesterSubjectSetClassificationSelect from './SemesterSubjectSetClassificationSelect';

/**
 * Komponenta pro zobrazení tabulky studentů podle předmětu a semestru.
 * @returns {JSX.Element} Element komponenty StudentsBySubjectSemesterTable.
 */
export function StudentsBySubjectSemesterTable() {
  const {
    classificationsData
  } = useSelector(state => state.subjectSemesterSelectForStudentsDisplay);
  console.log("classif data ze Selectoru: " + classificationsData);
  if (!Array.isArray(classificationsData)) {
    console.log("is array test failnul");
    return null; // Renderovat null nebo zástupný obsah, pokud filteredData není pole
  }

  const levelA = {
    id: '5fae9dd8-b095-11ed-9bd8-0242ac110002',
    name: 'A'
  };
  const levelB = {
    id: '5faea134-b095-11ed-9bd8-0242ac110002',
    name: 'B'
  };
  const levelC = {
    id: '5faea21a-b095-11ed-9bd8-0242ac110002',
    name: 'C'
  };
  const levelD = {
    id: '5faea2d8-b095-11ed-9bd8-0242ac110002',
    name: 'D'
  };
  const levelE = {
    id: '5faea332-b095-11ed-9bd8-0242ac110002',
    name: 'E'
  };
  const levelF = {
    id: '5faea396-b095-11ed-9bd8-0242ac110002',
    name: 'F'
  };
  const maxLevels = Math.max(...classificationsData.map(entry => entry.length));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Jm\xE9no"), /*#__PURE__*/React.createElement("th", null, "P\u0159\xEDjmen\xED"), Array.from({
    length: maxLevels
  }, (_, index) => /*#__PURE__*/React.createElement("th", {
    key: index
  }, " ", index + 1, ".", /*#__PURE__*/React.createElement(SemesterSubjectSetClassificationSelect, {
    index: index + 1,
    filteredData: classificationsData,
    levels: [levelA, levelB, levelC, levelD, levelE, levelF]
  }))))), /*#__PURE__*/React.createElement("tbody", null, classificationsData.map(entry => {
    if (!entry[0] || !entry[0].user || !entry[0].level) {
      console.log("neni uzivatel nebo level ");
      //console.log("entry level: " + entry[0].level);
      //console.log("entry user: " + entry[0].user);
      return null; // Přeskočit vykreslování, pokud chybí uživatel nebo úroveň
    }

    return /*#__PURE__*/React.createElement("tr", {
      key: entry[0].user.id
    }, /*#__PURE__*/React.createElement("td", null, entry[0].user.name), /*#__PURE__*/React.createElement("td", null, entry[0].user.surname), Array.from({
      length: maxLevels
    }, (_, index) => {
      const level = entry[index]?.level;
      return /*#__PURE__*/React.createElement("td", {
        key: index
      }, level ? level.name : '-');
    }));
  }))));
}