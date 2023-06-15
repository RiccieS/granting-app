<<<<<<< Updated upstream
import React from 'react';
import { useDispatch } from 'react-redux';
import { loadClassification } from '../slices/GradesTableSlice';
import Button from "react-bootstrap/Button"
import { UserClassificationMutationQuery } from 'queries/UserClassificationMutationQuery';

export const UserSetClassificationButton = ({ classification, newlevel }) => {
  const dispatch = useDispatch();

  const mutateData = () => (dispatch, getState) => {

    console.log(classification)

    UserClassificationMutationQuery(classification.id, classification.lastchange, newlevel.id)
      .then(response => response.json())
      .then(json => {
        // Extract the projects data from the JSON response
        const classifications = json.data?.result.classification.user.classifications

        if (classifications) {
          // Dispatch the 'loadProjects' action with the fetched projects
          dispatch(loadClassification(classifications))
        }
        return json
      })
  };

  const onClick = () => {

    dispatch(mutateData(classification));
   
  };

  return <Button onClick={() => {onClick()}}>{newlevel.name}</Button>;
};

export default UserSetClassificationButton;
=======
import React, { useEffect,useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateClassification } from '../slices/GradesTableSlice';
import Button from 'react-bootstrap/Button';
import { UserClassificationMutationQuery } from 'queries/UserClassificationMutationQuery';
import { XLg, SendFill } from "react-bootstrap-icons";

export const UserSetClassificationButton = ({ classification, newlevel }) => {
  const dispatch = useDispatch();
  const gradesTable = useSelector((state) => state.gradesTable);

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

      //vnitrni stavova promenna definujici, zda je cervene tlacitko zobrazene nebo neni
      const [ state, setState ] = useState(0)

      //nastavi, ze se cervene tlacitko nezobrazuje
      const setState0 = useCallback(() => setState(0))
  
      //nastavi, ze se cervene tlacitko zobrazuje
      const setState1 = useCallback(() => setState(1))
  
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
>>>>>>> Stashed changes
