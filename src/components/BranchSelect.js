import React, { useState, useEffect } from 'react';
import { GroupsSelectQuery } from '../queries/GroupsSelectQuery';

export default function BranchSelect({ onBranchChange }) {
  const [selectedStudjiniSkupina, setSelectedStudjiniSkupina] = useState('all');
  const [groupNames, setGroupNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GroupsSelectQuery();
        const data = await response.json();
        setGroupNames(data.data.groupPage);
      } catch (error) {
        console.error('Error fetching group names:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedStudjiniSkupina(newValue);
    onBranchChange(newValue);
  };

  useEffect(() => {
    onBranchChange(selectedStudjiniSkupina);
  }, [selectedStudjiniSkupina, onBranchChange]);

  return (
    <div>
      <label htmlFor="branch-select">Studijní skupina:</label>
      <select className="form-select" id="branch-select" value={selectedStudjiniSkupina} onChange={handleChange}>
        <option value="all">- All branches -</option>
        {groupNames.map((group) => (
          <option key={group.name} value={group.name}>
            {group.name}
          </option>
        ))}
      </select>
    </div>
  );
}