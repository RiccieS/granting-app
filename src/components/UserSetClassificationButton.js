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
        //const classifications = json.data?.result.classification.user.classifications
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