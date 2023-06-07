import React from 'react';

export const UserClassificationCell = ({ classification, children }) => {
  console.log("Tady");
  console.log("ADWad"+classification?.level?.name);
  return <td>{classification?.level?.name} {children}</td>;
};
export default UserClassificationCell;