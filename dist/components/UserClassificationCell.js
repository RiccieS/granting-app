import React from 'react';

/**
 * Komponenta pro buňku v tabulce klasifikací uživatele.
 * @param {Object} props - Vstupní vlastnosti komponenty
 * @param {Object} props.classification - Klasifikace
 * @param {React.ReactNode} props.children - Vnořené elementy
 * @returns {JSX.Element} Element komponenty UserClassificationCell
 */
export const UserClassificationCell = ({
  classification,
  children
}) => {
  // Toto je komponenta pro buňku v tabulce klasifikací uživatele.

  return /*#__PURE__*/React.createElement("td", null, classification?.level?.name, " ", children);
};
export default UserClassificationCell;