import React from "react";

const UserClassificationCell = ({ classification }) => {
  return <td>{classification?.level?.name}</td>;
};

export default UserClassificationCell;