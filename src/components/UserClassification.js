import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClassifications } from '../actions/classificationActions';
import UserClassificationsTable from './UserClassificationsTable';
import UserClassificationsTableEditable from './UserClassificationsTableEditable';

/**
 * Komponenta pro zobrazení klasifikací uživatele.
 * @param {Object[]} users - Pole uživatelů
 * @returns {JSX.Element|null} Element komponenty UserClassification nebo null
 */
export const UserClassification = ({ users }) => {
  const selectedSemester = useSelector((state) => state.semesterSelect);
  const dispatch = useDispatch();
  useEffect(() => {
    if (users && users.length > 0) {
      // Pokud existují uživatelé a jejich počet je větší než 0, spusť akci pro načtení klasifikací
      dispatch(fetchClassifications(String(users), selectedSemester.selectedSemester));
    }
  }, [users, selectedSemester.selectedSemester, dispatch]);

  const classifications = useSelector((state) => state.gradesTable);

  if (!classifications || !classifications.length) {
    // Pokud neexistují klasifikace nebo je jejich počet 0, vrátí se null (nic se nezobrazí)
    return null;
  } else {
    // Filtruj duplicity v klasifikacích
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
