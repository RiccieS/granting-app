import React from 'react';
import { XLg, SendFill } from "react-bootstrap-icons";

/**
 * Komponenta pro tlačítka pro odeslání a zrušení nastavení klasifikace uživatele.
 * @param {Object} props - Vstupní vlastnosti komponenty
 * @param {Function} props.onClick - Funkce pro odeslání nastavení
 * @param {Function} props.setState0 - Funkce pro zrušení nastavení
 * @returns {JSX.Element} Element komponenty UserSetClassificationSubmitButton
 */
const UserSetClassificationSubmitButton = ({
  onClick,
  setState0
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-success",
    onClick: onClick
  }, /*#__PURE__*/React.createElement(SendFill, null)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-outline-success",
    onClick: setState0
  }, /*#__PURE__*/React.createElement(XLg, null)));
};
export default UserSetClassificationSubmitButton;