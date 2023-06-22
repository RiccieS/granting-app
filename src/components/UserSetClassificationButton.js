import React, { useState, useCallback } from 'react';
import { useDispatch} from 'react-redux';

import {UpdateUserClassification} from '../utils/UpdateUserClassification';
import { XLg, SendFill } from "react-bootstrap-icons";

export const UserSetClassificationButton = ({ classification, newlevel }) => {
  const dispatch = useDispatch();

 

  const mutateData = (classification,newlevel) => (dispatch, getState) => {
    dispatch(UpdateUserClassification(classification,newlevel));
  };

      //vnitrni stavova promenna definujici, zda je zobrazeno tlacitko pro vyber znamky nebo tlacitka pro jeji ulozeni/zruseni
      const [ state, setState ] = useState(0);

      //nastavi, ze je zobrazeno tlacitko znamky
      const setState0 = useCallback(() => setState(0), []);
  
      //nastavi, ze se zobrazi editacni tlacitka
      const setState1 = useCallback(() => setState(1), []);
  
  const onClick = () => {
    setState0();
    dispatch(mutateData(classification,newlevel));
  };
  if (state === 0) {
    return <button className='btn btn-success' onClick={setState1}>{newlevel.name}</button>;
  }
  else {
    return (
      <>
        <button className='btn btn-success' onClick={onClick}><SendFill /></button>
        <button className='btn btn-outline-success' onClick={setState0}><XLg /></button>
      </>
    )
  }
  
};

export default UserSetClassificationButton;

