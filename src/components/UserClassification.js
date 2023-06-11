import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchClassifications } from '../actions/classificationActions';
import UserClassificationsTable from './UserClassificationsTable';
import UserClassificationsTableEditable from './UserClassificationsTableEditable';

export const UserClassification = ({ user }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (user) {
      dispatch(fetchClassifications(user));
    }
  }, [user, dispatch]);

  if (!user) {
    return null; // Add a condition to handle the case when the 'user' object is null or undefined
  }
  else{
    return (
      <div>
        <UserClassificationsTable />
        <UserClassificationsTableEditable />
      </div>
    );
  }
};

export default UserClassification;