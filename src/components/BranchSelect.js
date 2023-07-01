import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GroupsSelectQuery } from '../queries/GroupsSelectQuery';
import { setGroupNames, setBranch } from '../slices/BranchSelectSlice';

/**
 * Komponenta pro výběr studijního oboru.
 * @param {Function} onBranchSelect - Funkce, která se volá při změně vybraného oboru
 * @returns {JSX.Element} Element komponenty BranchSelect
 */
export function BranchSelect({ onBranchSelect }) {
  const dispatch = useDispatch();
  const { groupNames, selectedBranch } = useSelector((state) => state.branchSelect);

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
  const handleChange = (event) => {
    const newValue = event.target.value;
    dispatch(setBranch(newValue));
    onBranchSelect(newValue);
  };

  return (
    <div>
      <label htmlFor="branch-select">Studijní skupina:</label>
      <select className="form-select" id="branch-select" value={selectedBranch} onChange={handleChange}>
        <option value="all">- Všechny obory -</option>
        {groupNames.map((group) => (
          <option key={group.id} value={group.id}>
            {group.name}
          </option>
        ))}
      </select>
    </div>
  );
}
