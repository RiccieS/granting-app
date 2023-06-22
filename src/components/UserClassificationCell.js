import React from 'react';

export const UserClassificationCell = ({ classification, children }) => {
  // Toto je komponenta pro buňku v tabulce klasifikací uživatele.

  return <td>{classification?.level?.name} {children}</td>;
};
export default UserClassificationCell;
