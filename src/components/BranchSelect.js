import React, { useState, useEffect } from 'react';

export function SortSelect({ selectedOption, onOptionChange }) {
    const [selectedOption, setSelectedOption] = useState();
    return (
      <div>
        <label htmlFor="select-option">Sort by:</label>
        <select id="select-option" value={selectedOption} onChange={e => onOptionChange(e.target.value)}>
          <option value="">None</option>
          <option value="225KB">22-5KB</option>
          <option value="phone">Phone</option>
        </select>
      </div>
    );
  }