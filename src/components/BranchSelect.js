import React from 'react';

export default function BranchSelect({ selectedOption, onOptionChange }) {
  return (
    <div>
      <label htmlFor="select-option">Sort by:</label>
      <select id="select-option" value={selectedOption} onChange={e => onOptionChange(e.target.value)}>
        <option value="jmeno">Jmeno</option>
        <option value="prijmeni">Prijmeni</option>
        <option value="studijni_skupina">Skupina</option>
      </select>
    </div>
  );
}