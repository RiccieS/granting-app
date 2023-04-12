import React from 'react';

export default function BranchSelect({ selectedOption, onOptionChange }) {
  return (
    <div>
      <label htmlFor="select-option">Studijni skupina:</label>
      <select id="select-option" value={selectedOption} onChange={e => onOptionChange(e.target.value)}>
        <option value="vse">-</option>
        <option value="225KB">22-5KB</option>
        <option value="225VP">22-5VP</option>
      </select>
    </div>
  );
}