import React from "react";
import UserClassificationsRow from "./UserClassificationsRow";
import Table from "react-bootstrap/Table";
import pivotmap from "../utils/pivotmap"; // Import the pivotmap function
import { keyedmap } from "../utils/keyedmap";
  
const SemesterClassificationsTable = ({ semester }) => {
  const classifications = semester?.classifications || [];

  // Use the pivotmap function to transform the classifications data
  const classificationByUser = pivotmap(
    classifications,
    (classification) => [classification.user.id, classification]
  );
  const userIndex = keyedmap(
    classifications,
    (classification) => [classification.user.id, classification.user]
  );

  return (
    <Table>
      <thead>
        <tr>
          <td>user</td>
          <td>1.</td>
          <td>2.</td>
          <td>3.</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
      {Object.entries(classificationByUser).map(([userId, clist]) => (
  <UserClassificationsRow
    key={userId}
    classifications={clist} // Corrected prop name to "classifications"
  >
    <td>{userIndex[userId].email}</td>
  </UserClassificationsRow>
))}
      </tbody>
    </Table>
  );
};

export default SemesterClassificationsTable;