import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchClassifications } from '../actions/classificationActions';
import UserClassificationsTable from './UserClassificationsTable';
import UserClassificationsTableEditable from './UserClassificationsTableEditable';
import { useSelector } from "react-redux";

export const UserClassification = ({ users }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (users && users.length > 0) {
      dispatch(fetchClassifications(String(users))); // Dispatch the action to fetch classifications
    }
  }, [users, dispatch]);

  const classifications = useSelector((state) => state.gradesTable);
  if (!classifications || !classifications.length) {
    return null; // Add a condition to handle the case when the 'classifications' array is null or empty
  } else {
    return (
      <div>
        {classifications.map((clasificationOfStudent) => (
          <div key={clasificationOfStudent.result?.id}>
            <h3>Jmeno: {clasificationOfStudent.result?.name} {clasificationOfStudent.result?.surname}</h3>
            <UserClassificationsTable classifications={clasificationOfStudent.result?.classifications} />
            <UserClassificationsTableEditable classifications={clasificationOfStudent.result?.classifications} />
          </div>
        ))}
      </div>
    );
  }
  
};

export default UserClassification;