import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchClassifications } from '../actions/classificationActions';
import UserClassificationsTable from './UserClassificationsTable';
import UserClassificationsTableEditable from './UserClassificationsTableEditable';

<<<<<<< Updated upstream
export const UserClassification = ({ user }) => {
=======
export const UserClassification = ({ users }) => {
  const selectedSemester = useSelector((state) => state.semesterSelect);
>>>>>>> Stashed changes
  const dispatch = useDispatch();
  
  useEffect(() => {
<<<<<<< Updated upstream
    if (user) {
      dispatch(fetchClassifications(user));
=======
    if (users && users.length > 0) {
      dispatch(fetchClassifications(String(users),selectedSemester.selectedSemester)); // Dispatch the action to fetch classifications
>>>>>>> Stashed changes
    }
  }, [user, dispatch]);

  if (!user) {
    return null; // Add a condition to handle the case when the 'user' object is null or undefined
  }
  else{
    return (
      <div>
<<<<<<< Updated upstream
        <UserClassificationsTable />
        <UserClassificationsTableEditable />
=======
        {classifications.map((clasificationOfStudent) => (
          <div key={clasificationOfStudent.result?.id} className="card">
            <h3 className="card-header">Student: {clasificationOfStudent.result?.name} {clasificationOfStudent.result?.surname}</h3>
            <div className="card-body">
            <UserClassificationsTable classifications={clasificationOfStudent.result?.classifications} />
            <UserClassificationsTableEditable classifications={clasificationOfStudent.result?.classifications} />
            </div>
          </div>
        ))}
>>>>>>> Stashed changes
      </div>
    );
  }
};

export default UserClassification;