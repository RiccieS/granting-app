import React from 'react';

export const UserClassificationCell = ({ classification, children }) => {
  return <td>{classification?.level?.name} {children}</td>;
};
export default UserClassificationCell;