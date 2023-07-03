import Table from "react-bootstrap/Table";
import pivotmap from "../utils/pivotmap";
import keyedmap from "../utils/keyedmap";
import { UserClassificationsRowEditable } from "./UserClassificationsRowEditable";

/**
 * Komponenta pro editovatelnou tabulku klasifikací uživatele.
 * @param {Object} props - Vstupní vlastnosti komponenty
 * @param {Array} props.classifications - Klasifikace uživatele
 * @returns {JSX.Element} Element komponenty UserClassificationsTableEditable
 */
export const UserClassificationsTableEditable = ({
  classifications
}) => {
  // Vytvoření mapy klasifikací dle semestru
  const classificationsBySemester = pivotmap(classifications, classification => [classification.semester.id, classification]);

  // Vytvoření indexu semestrů
  const semesterIndex = keyedmap(classifications, classification => [classification.semester.id, classification.semester]);
  return /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "semester"), /*#__PURE__*/React.createElement("td", null, "1."), /*#__PURE__*/React.createElement("td", null, "2."), /*#__PURE__*/React.createElement("td", null, "3."), /*#__PURE__*/React.createElement("td", null))), /*#__PURE__*/React.createElement("tbody", null, Object.entries(classificationsBySemester).map(([semesterId, clist]) => /*#__PURE__*/React.createElement(UserClassificationsRowEditable, {
    key: semesterId,
    classifications: clist
  }, /*#__PURE__*/React.createElement("td", null, semesterIndex[semesterId].order)))));
};
export default UserClassificationsTableEditable;