import React from 'react';
import { useDispatch } from 'react-redux';
import { UserClassificationUpdateAsyncAction } from '../actions/classificationActions';
import Button from './Button';

export const UserSetClassificationButton = ({ classification, newlevel }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      UserClassificationUpdateAsyncAction({
        id: classification.id,
        lastchange: classification.lastchange,
        level_id: newlevel.id,
      })
    );
  };

  return <Button onClick={onClick}>{newlevel.name}</Button>;
};
export default UserSetClassificationButton;