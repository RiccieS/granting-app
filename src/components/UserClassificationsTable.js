import React from "react";
import { UserClassificationsRow } from "./UserClassificationsRow";
import Table from "react-bootstrap/Table";
import pivotmap from "../utils/pivotmap";
import keyedmap from "../utils/keyedmap";

export const UserClassificationsTable = ({user}) => {

  const classifications = user?.classifications || []
  const classificationsBySemester = pivotmap(
      classifications, classification => [classification.semester.id, classification]
  )  
  const semesterIndex = keyedmap(
      classifications, classification => [classification.semester.id, classification.semester]
  )  
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
            
              {Object.entries(classificationsBySemester).map(
                  ([semesterId, clist]) => <UserClassificationsRow key={semesterId} classifications={clist}><td>{semesterIndex[semesterId].order}</td></UserClassificationsRow>
              )}                
          </tbody>
      </Table>
  )
}

export default UserClassificationsTable;
