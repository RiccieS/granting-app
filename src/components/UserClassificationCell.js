
import React from "react";
import EditGradeButton from "./EditGradeButton";

const UserClassificationCell = ({ classification, onTableReload  }) => {
  const levelName = classification?.level?.name || "";
  const classificationId = classification?.id || null;
  const classificationLastChange = classification?.lastchange || null;


  return (
    <td>
      <span>{levelName} </span>
      <EditGradeButton classificationId={classificationId} classificationLastChange={classificationLastChange} label="Edit"   onTableReload={onTableReload}
/>
    </td>
  );
};

export default UserClassificationCell;