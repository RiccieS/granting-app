import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UserClassificationFetchAsyncAction } from '../actions/classificationActions';
import UserClassificationsTableEditable from './UserClassificationsTableEditable';

export const UserClassificationEditable = ({ user }) => {
  const classifications = user?.classifications;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!classifications) {
      dispatch(UserClassificationFetchAsyncAction(user.id));
    }
  }, [classifications, dispatch, user.id]);

  return <UserClassificationsTableEditable user={user} />;
};
export default UserClassificationFetchAsyncAction;