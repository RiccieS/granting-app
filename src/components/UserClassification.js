import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClassifications } from '../actions/classificationActions';
import UserClassificationsTable from './UserClassificationsTable';
import UserClassificationsTableEditable from './UserClassificationsTableEditable';

export const UserClassification = ({ user }) => {
  const dispatch = useDispatch();
  const selectedStudent = useSelector(state => state.selectedStudent); // Assuming you have a selectedStudent state in your Redux store

  useEffect(() => {
    if (user) {
      dispatch(fetchClassifications(selectedStudent));
    }
  }, [user, dispatch, selectedStudent]);

  if (!user) {
    return null; // Add a condition to handle the case when the 'user' object is null or undefined
  }

  return (
    <div>
      <UserClassificationsTable user={user} />
      <UserClassificationsTableEditable user={user} />
    </div>
  );
};

export default UserClassification;