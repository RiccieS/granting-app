import React from "react";
import { UserClassificationsRow } from "./UserClassificationsRow";
import Table from "react-bootstrap/Table";
import pivotmap from "../utils/pivotmap";
import keyedmap from "../utils/keyedmap";

/**
 * Komponenta pro tabulku klasifikací uživatele.
 * @param {Object} props - Vstupní vlastnosti komponenty
 * @param {Array} props.classifications - Klasifikace uživatele
 * @returns {JSX.Element} Element komponenty UserClassificationsTable
 */
export const UserClassificationsTable = ({
  classifications
}) => {
  // Vytvoření mapy klasifikací dle semestru
  const classificationsBySemester = pivotmap(classifications, classification => [classification.semester.id, classification]);

  // Vytvoření indexu semestrů
  const semesterIndex = keyedmap(classifications, classification => [classification.semester.id, classification.semester]);
  return /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "semester"), /*#__PURE__*/React.createElement("th", null, "1."), /*#__PURE__*/React.createElement("th", null, "2."), /*#__PURE__*/React.createElement("th", null, "3."), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, Object.entries(classificationsBySemester).map(([semesterId, clist]) => /*#__PURE__*/React.createElement(UserClassificationsRow, {
    key: semesterId,
    classifications: clist
  }, /*#__PURE__*/React.createElement("td", null, semesterIndex[semesterId]?.subject?.name, " ", semesterIndex[semesterId].order)))));
};
export default UserClassificationsTable;