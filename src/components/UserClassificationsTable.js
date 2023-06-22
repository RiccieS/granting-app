import React from "react";
import { UserClassificationsRow } from "./UserClassificationsRow";
import Table from "react-bootstrap/Table";
import pivotmap from "../utils/pivotmap";
import keyedmap from "../utils/keyedmap";

export const UserClassificationsTable = ({ classifications }) => {
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
          <th>semester</th>
          <th>1.</th>
          <th>2.</th>
          <th>3.</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(classificationsBySemester).map(
          ([semesterId, clist]) => (
            <UserClassificationsRow
              key={semesterId}
              classifications={clist}
            >
              <td>{semesterIndex[semesterId]?.subject?.name} {semesterIndex[semesterId].order}</td>
            </UserClassificationsRow>
          )
        )}
      </tbody>
    </Table>
  );
};

export default UserClassificationsTable;
