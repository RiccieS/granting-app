import React, { useState, useEffect } from 'react';
import BranchGradeTable from './BranchGradeTable';
import { GroupsSelectQuery } from '../queries/GroupsSelectQuery';

export default function BranchSelect({ value, onBranchChange, data, grades_data }) {
  const [selectedStudjiniSkupina, setSelectedStudjiniSkupina] = useState('');
  const [groupNames, setGroupNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GroupsSelectQuery();
        const data = await response.json();
        setGroupNames(data.data.groupPage);
        setSelectedStudjiniSkupina(data.data.groupPage[0]?.name || '');
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

  return (
    <div>
      <label htmlFor="branch-select">Studijní skupina:</label>
      <select className="form-select" id="branch-select" value={selectedStudjiniSkupina} onChange={handleChange}>
        {groupNames.map((group) => (
          <option key={group.name} value={group.name}>
            {group.name}
          </option>
        ))}
      </select>
      <BranchGradeTable data={data} grades_data={grades_data} studjiniSkupina={selectedStudjiniSkupina} />
    </div>
  );
}