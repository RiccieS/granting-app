import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClassifications } from '../actions/classificationActions';
import UserClassificationsTable from './UserClassificationsTable';
import UserClassificationsTableEditable from './UserClassificationsTableEditable';

/**
 * Komponenta pro zobrazení klasifikací uživatele.
 * @param {Object[]} users - Pole uživatelů.
 * @returns {JSX.Element|null} Element komponenty UserClassification nebo null.
 */
export const UserClassification = ({
  users
}) => {
  const {
    selectedSemester
  } = useSelector(state => state.semesterSelect);
  const dispatch = useDispatch();
  console.log("selectedSemester " + selectedSemester);
  useEffect(() => {
    if (users && users.length > 0) {
      // Pokud existují uživatelé a jejich počet je větší než 0, spusť akci pro načtení klasifikací.
      dispatch(fetchClassifications(String(users), selectedSemester));
    }
  }, [users, selectedSemester, dispatch]);
  const classifications = useSelector(state => state.gradesTable);
  console.log("klasifikace ze storu: " + JSON.stringify(classifications, null, 2));
  if (!classifications || !classifications.length) {
    // Pokud neexistují klasifikace nebo je jejich počet 0, vrátí se null (nic se nezobrazí).
    console.log("Chyba v načítání klasifikace");
    return null;
  } else {
    let uniqueClassifications = [];
    if (selectedSemester === "all") {
      // Filtruje duplicity v klasifikacích.
      const userIds = new Set();
      classifications.forEach(classification => {
        const userId = classification?.id;
        if (userId && !userIds.has(userId)) {
          uniqueClassifications.push(classification);
          userIds.add(userId);
        }
      });
      console.log("klasifikace po filtru duplicity: " + JSON.stringify(uniqueClassifications, null, 2));
    } else {
      uniqueClassifications = classifications;
      console.log("klasifikace bez filtru duplicity: " + JSON.stringify(uniqueClassifications, null, 2));
    }
    return /*#__PURE__*/React.createElement("div", null, uniqueClassifications.map(classificationOfStudent => /*#__PURE__*/React.createElement("div", {
      key: classificationOfStudent?.id,
      className: "card"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "card-header"
    }, "Student: ", classificationOfStudent?.name, " ", classificationOfStudent?.surname), /*#__PURE__*/React.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/React.createElement(UserClassificationsTable, {
      classifications: classificationOfStudent?.classifications
    }), /*#__PURE__*/React.createElement(UserClassificationsTableEditable, {
      classifications: classificationOfStudent?.classifications
    })))));
  }
};
export default UserClassification;