import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserClassificationUpdateAsyncAction } from '../actions/classificationActions';
import { fetchClassifications } from '../actions/classificationActions';
import Button from "react-bootstrap/Button"

export const UserSetClassificationButton = ({ classification, newlevel }) => {
  const dispatch = useDispatch();
  const selectedStudent = useSelector((state) => state.selectedStudent); // Assuming you have a selectedStudent state in your Redux store

  const onClick = () => {
    dispatch(
      UserClassificationUpdateAsyncAction({
        id: classification.id,
        lastchange: classification.lastchange,
        level_id: newlevel.id,
      })
    );
    dispatch(fetchClassifications(selectedStudent));
    // Dispatch the fetchClassifications action to refresh the table
  };

  return <Button onClick={onClick}>{newlevel.name}</Button>;
};

export default UserSetClassificationButton;