import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { UpdateUserClassification } from '../utils/UpdateUserClassification';
import { XLg, SendFill } from "react-bootstrap-icons";

/**
 * Komponenta pro tlačítko pro nastavení klasifikace uživatele.
 * @param {Object} props - Vstupní vlastnosti komponenty
 * @param {Object} props.classification - Klasifikace uživatele
 * @param {Object} props.newlevel - Nová úroveň klasifikace
 * @returns {JSX.Element} Element komponenty UserSetClassificationButton
 */
export const UserSetClassificationButton = ({
  classification,
  newlevel
}) => {
  const dispatch = useDispatch();

  /**
   * Funkce pro aktualizaci klasifikace uživatele.
   * @param {Object} classification - Klasifikace uživatele
   * @param {Object} newlevel - Nová úroveň klasifikace
   */
  const mutateData = (classification, newlevel) => (dispatch, getState) => {
    dispatch(UpdateUserClassification(classification, newlevel));
  };

  // Vnitřní stavová proměnná definující, zda je zobrazeno tlačítko pro výběr známky nebo tlačítka pro její uložení/zrušení
  const [state, setState] = useState(0);

  // Nastaví, že je zobrazeno tlačítko známky
  const setState0 = useCallback(() => setState(0), []);

  // Nastaví, že se zobrazí editační tlačítka
  const setState1 = useCallback(() => setState(1), []);
  const onClick = () => {
    setState0();
    dispatch(mutateData(classification, newlevel));
  };
  if (state === 0) {
    return /*#__PURE__*/React.createElement("button", {
      className: "btn btn-success",
      onClick: setState1
    }, newlevel.name);
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-success",
      onClick: onClick
    }, /*#__PURE__*/React.createElement(SendFill, null)), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-outline-success",
      onClick: setState0
    }, /*#__PURE__*/React.createElement(XLg, null)));
  }
};
export default UserSetClassificationButton;