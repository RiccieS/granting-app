//import React from "react";

//const UserClassificationCell = ({ classification }) => {
//  const levelName = classification?.level?.name || "";
//  return <td>{levelName}</td>;
//};
//export default UserClassificationCell;
import React from "react";
import EditGradeButton from "./EditGradeButton";

const UserClassificationCell = ({ classification }) => {
  const levelName = classification?.level?.name || "";
  const classificationId = classification?.id || null;
  const classificationLastChange = classification?.lastchange || null;


  return (
    <td>
      <span>{levelName} </span>
      <EditGradeButton classificationId={classificationId} classificationLastChange={classificationLastChange} label="Edit" />
    </td>
  );
};

export default UserClassificationCell;