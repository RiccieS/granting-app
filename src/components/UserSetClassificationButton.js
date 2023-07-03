import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { UpdateUserClassification } from '../utils/UpdateUserClassification';
import UserSetClassificationSubmitButton from "./UserSetClassificationSubmitButton"
/**
 * Komponenta pro tlačítko pro nastavení klasifikace uživatele.
 * @param {Object} props - Vstupní vlastnosti komponenty
 * @param {Object} props.classification - Klasifikace uživatele
 * @param {Object} props.newlevel - Nová úroveň klasifikace
 * @returns {JSX.Element} Element komponenty UserSetClassificationButton
 */
export const UserSetClassificationButton = ({ classification, newlevel }) => {
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
    return <button className='btn btn-success' onClick={setState1}>{newlevel.name}</button>;
  } else {
    return (
      <>
      <UserSetClassificationSubmitButton onClick={onClick} setState0={setState0} />
      </>
    );
  }
};

export default UserSetClassificationButton;
