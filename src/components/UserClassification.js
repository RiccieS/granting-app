/*import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchClassifications } from '../actions/classificationActions';
import UserClassificationsTable from './UserClassificationsTable';
import UserClassificationsTableEditable from './UserClassificationsTableEditable';


export const UserClassification = ({ users }) => {
  const selectedSemester = useSelector((state) => state.semesterSelect);

  const dispatch = useDispatch();

  useEffect(() => {

    if (users && users.length > 0) {
      console.log("users: " + users);
      dispatch(fetchClassifications(String(users),selectedSemester.selectedSemester)); // Dispatch the action to fetch classifications
    }
  }, [users,selectedSemester.selectedSemester, dispatch]);

  const classifications = useSelector((state) => state.gradesTable);
  if (!classifications || !classifications.length) {
    return null; // Add a condition to handle the case when the 'classifications' array is null or empty
  } else {
    return (
      <div>
        {classifications.map((clasificationOfStudent) => (
          <div key={clasificationOfStudent.result?.id} className="card">
            <h3 className="card-header">Student: {clasificationOfStudent.result?.name} {clasificationOfStudent.result?.surname}</h3>
            <div className="card-body">
            <UserClassificationsTable classifications={clasificationOfStudent.result?.classifications} />
            <UserClassificationsTableEditable classifications={clasificationOfStudent.result?.classifications} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  
};

export default UserClassification;*/

import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchClassifications } from '../actions/classificationActions';
import UserClassificationsTable from './UserClassificationsTable';
import UserClassificationsTableEditable from './UserClassificationsTableEditable';

export const UserClassification = ({ users }) => {
  const selectedSemester = useSelector((state) => state.semesterSelect);
  const dispatch = useDispatch();

  useEffect(() => {
    if (users && users.length > 0) {
      dispatch(fetchClassifications(String(users), selectedSemester.selectedSemester));
    }
  }, [users, selectedSemester.selectedSemester, dispatch]);

  const classifications = useSelector((state) => state.gradesTable);

  if (!classifications || !classifications.length) {
    return null;
  } else {
    // Filter out duplicate entries
    const uniqueClassifications = [];
    const userIds = new Set();

    classifications.forEach((classification) => {
      const userId = classification?.id;
      if (userId && !userIds.has(userId)) {
        uniqueClassifications.push(classification);
        userIds.add(userId);
      }
    });

    return (
      <div>
        {uniqueClassifications.map((classificationOfStudent) => (
          <div key={classificationOfStudent?.id} className="card">
            <h3 className="card-header">Student: {classificationOfStudent?.name} {classificationOfStudent?.surname}</h3>
            <div className="card-body">
              <UserClassificationsTable classifications={classificationOfStudent?.classifications} />
              <UserClassificationsTableEditable classifications={classificationOfStudent?.classifications} />
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default UserClassification;
