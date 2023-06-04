import React from "react";

const UserClassificationCell = ({ classification }) => {
  const levelName = classification?.level?.name || "";
  return <td>{levelName}</td>;
};

export default UserClassificationCell;