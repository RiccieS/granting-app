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
export const UserClassificationsTableEditable = ({ classifications }) => {
  // Vytvoření mapy klasifikací dle semestru
  const classificationsBySemester = pivotmap(
    classifications,
    (classification) => [classification.semester.id, classification]
  );

  // Vytvoření indexu semestrů
  const semesterIndex = keyedmap(
    classifications,
    (classification) => [classification.semester.id, classification.semester]
  );

  return (
    <Table>
      <thead>
        <tr>
          <td>semester</td>
          <td>1.</td>
          <td>2.</td>
          <td>3.</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {Object.entries(classificationsBySemester).map(([semesterId, clist]) => (
          <UserClassificationsRowEditable key={semesterId} classifications={clist}>
            <td>{semesterIndex[semesterId].order}</td>
          </UserClassificationsRowEditable>
        ))}
      </tbody>
    </Table>
  );
};

export default UserClassificationsTableEditable;
