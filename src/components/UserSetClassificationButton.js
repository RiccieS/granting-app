import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch} from 'react-redux';
import { updateClassification } from '../slices/GradesTableSlice';
import { UserClassificationMutationQuery } from 'queries/UserClassificationMutationQuery';

import { XLg, SendFill } from "react-bootstrap-icons";

export const UserSetClassificationButton = ({ classification, newlevel }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Empty dependency array, runs only once when the component mounts
  }, []);

  const mutateData = () => (dispatch, getState) => {
    UserClassificationMutationQuery(classification.id, classification.lastchange, newlevel.id)
      .then(response => response.json())
      .then(json => {
        const updatedUser = json.data?.result.classification.user;
        if (updatedUser) {
          const result = {result: updatedUser}
          // Dispatch the 'loadClassification' action with the updated gradesTable
          console.log(result)
          dispatch(updateClassification(result));
        }
      });
  };

      //vnitrni stavova promenna definujici, zda je zobrazeno tlacitko pro vyber znamky nebo tlacitka pro jeji ulozeni/zruseni
      const [ state, setState ] = useState(0);

      //nastavi, ze je zobrazeno tlacitko znamky
      const setState0 = useCallback(() => setState(0), []);
  
      //nastavi, ze se zobrazi editacni tlacitka
      const setState1 = useCallback(() => setState(1), []);
  
  const onClick = () => {
    setState0();
    dispatch(mutateData(classification));
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

