import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UserClassificationFetchAsyncAction } from '../actions/classificationActions';
import UserClassificationsTable from './UserClassificationsTable';

export const UserClassification = ({ user }) => {
  //console.log("Tady"+user);
  const dispatch = useDispatch();
  
  const classifications = user?.classifications;
  
  useEffect(() => {
    if (user && !classifications) {
      dispatch(UserClassificationFetchAsyncAction(user.id));
    }
  }, [classifications, dispatch, user]);

  if (!user) {
    return null; // Add a condition to handle the case when the 'user' object is null or undefined
  }

  return <UserClassificationsTable user={user} />;
};

export default UserClassification;