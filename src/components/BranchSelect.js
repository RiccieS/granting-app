import React, { useState, useEffect } from 'react';
import { GroupsSelectQuery } from '../queries/GroupsSelectQuery';

export default function BranchSelect({ onBranchChange, onStudentReset }) {
  const [selectedStudjiniSkupina, setSelectedStudjiniSkupina] = useState('all');
  const [groupNames, setGroupNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GroupsSelectQuery();
        const data = await response.json();
        setGroupNames(data.data.groupPage);
      } catch (error) {
        console.error('Chyba při načítání názvů skupin:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedStudjiniSkupina(newValue);
    onBranchChange(newValue);
    onStudentReset(); // Resetuje vybraného studenta při výběru oboru
  };

  useEffect(() => {
    onBranchChange(selectedStudjiniSkupina);
  }, [selectedStudjiniSkupina, onBranchChange]);

  return (
    <div>
      {/* Výběr studijní skupiny */}
      <label htmlFor="branch-select">Studijní skupina:</label>
      <select className="form-select" id="branch-select" value={selectedStudjiniSkupina} onChange={handleChange}>
        {/* Výchozí volba "Všechny obory" */}
        <option value="all">- Všechny obory -</option>
        {/* Možnosti výběru skupin */}
        {groupNames.map((group) => (
          <option key={group.name} value={group.name}>
            {group.name}
          </option>
        ))}
      </select>
    </div>
  );
}