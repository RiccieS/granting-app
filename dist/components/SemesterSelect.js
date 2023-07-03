import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSemester } from '../slices/SemesterSelectSlice';

/**
 * Komponenta pro výběr semestru.
 * @param {Function} onSemesterChange - Funkce volaná po změně vybraného semestru
 * @returns {JSX.Element} Element komponenty SemesterSelect
 */
export function SemesterSelect({
  onSemesterChange
}) {
  const dispatch = useDispatch();
  const {
    selectedSemester
  } = useSelector(state => state.semesterSelect);

  // Funkce pro změnu vybraného semestru
  /**
   * Obsluha události změny výběru semestru.
   * @param {Object} event - Událost změny
   */
  const handleChange = event => {
    const selectedSemester = event.target.value;
    dispatch(setSelectedSemester(selectedSemester));
    onSemesterChange(selectedSemester);
    //onSemesterChange(selectedValue);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "semester-select"
  }, "Vyberte semestr:"), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    id: "semester-select",
    value: selectedSemester,
    onChange: handleChange
  }, /*#__PURE__*/React.createElement("option", {
    key: "all",
    value: "all"
  }, "-"), [...Array(10)].map((_, i) => /*#__PURE__*/React.createElement("option", {
    key: i + 1,
    value: i + 1
  }, i + 1))));
}