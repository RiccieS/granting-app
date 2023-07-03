import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GroupsSelectQuery } from '../queries/GroupsSelectQuery';
import { setGroupNames, setBranch } from '../slices/BranchSelectSlice';

/**
 * Komponenta pro výběr studijního oboru.
 * @param {Function} onBranchSelect - Funkce, která se volá při změně vybraného oboru
 * @returns {JSX.Element} Element komponenty BranchSelect
 */
export function BranchSelect({
  onBranchSelect
}) {
  const dispatch = useDispatch();
  const {
    groupNames,
    selectedBranch
  } = useSelector(state => state.branchSelect);
  useEffect(() => {
    // Funkce pro načítání názvů skupin pro výběr
    const fetchData = async () => {
      try {
        const response = await GroupsSelectQuery();
        const data = await response.json();
        dispatch(setGroupNames(data.data.groupPage));
      } catch (error) {
        console.error('Chyba při načítání názvů skupin:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  // Funkce pro změnu vybraného oboru
  /**
   * Obsluha události změny výběru oboru.
   * @param {Object} event - Událost změny
   */
  const handleChange = event => {
    const newValue = event.target.value;
    dispatch(setBranch(newValue));
    onBranchSelect(newValue);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "branch-select"
  }, "Studijn\xED skupina:"), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    id: "branch-select",
    value: selectedBranch,
    onChange: handleChange
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "- V\u0161echny obory -"), groupNames.map(group => /*#__PURE__*/React.createElement("option", {
    key: group.id,
    value: group.id
  }, group.name))));
}