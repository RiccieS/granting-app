import React from "react";
import UserClassificationsRow from "./UserClassificationsRow";
import Table from "react-bootstrap/Table";
import pivotmap from "../utils/pivotmap";
import keyedmap from "../utils/keyedmap";

const UserClassificationsTable = ({ user, onTableReload  }) => {
  const classifications = user || [];
  console.log(classifications);
  
  const classificationsBySemester = pivotmap(
    classifications,
    (classification) => [classification.semester.id, classification]
  );

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
            <UserClassificationsRow key={semesterId} classifications={clist} onTableReload={onTableReload}>
            <td>{semesterIndex[semesterId].order}</td>
            </UserClassificationsRow>
          )
        )}
      </tbody>
    </Table>
  );
};

export default UserClassificationsTable;
