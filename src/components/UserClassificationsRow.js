import React from "react";
import UserClassificationCell from "./UserClassificationCell";

const UserClassificationsRow = ({ classifications, children, cols = 5, onTableReload  }) => {
  const sorted = [...classifications].sort((c1, c2) => c1.order - c2.order);
  const dummy = new Array(cols - 1 - sorted.length).fill("");

  return (
    <>
      {children}
      {sorted.map((classification) => (
        <UserClassificationCell key={classification.id} classification={classification} onTableReload={onTableReload} />

      ))}
      {dummy.map((_, index) => (
        <td key={index}></td>
      ))}
    </>
  );
};

export default UserClassificationsRow;
