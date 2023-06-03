import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GroupsSelectQuery } from '../queries/GroupsSelectQuery';
import { setBranch, resetStudent } from '../slices/BranchSelectSlice';

export default function BranchSelect({ onStudentReset }) {
  const dispatch = useDispatch();
  const { groupNames, selectedBranch } = useSelector((state) => state.branchSelect);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GroupsSelectQuery();
        const data = await response.json();
        dispatch(setGroupNames(data.data.groupPage)); // Dispatch action to set group names
      } catch (error) {
        console.error('Chyba při načítání názvů skupin:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    dispatch(setSelectedBranch(newValue)); // Dispatch action to set selected branch
    onStudentReset(); // Reset selected student when branch changes
  };

  useEffect(() => {
    dispatch(setSelectedBranch(selectedBranch)); // Dispatch action when selected branch changes
  }, [dispatch, selectedBranch]);

  return (
    <div>
      {/* Výběr studijní skupiny */}
      <label htmlFor="branch-select">Studijní skupina:</label>
      <select className="form-select" id="branch-select" value={selectedBranch} onChange={handleChange}>
        {/* Výchozí volba "Všechny obory" */}
        <option value="all">- Všechny obory -</option>
        {/* Možnosti výběru skupin */}
        {groupNames.map((group) => (
          <option key={group.id} value={group.id}>
            {group.name}
          </option>
        ))}
      </select>
    </div>
  );
}
