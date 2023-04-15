import React from 'react';

export default function ComboBox({ value, onBranchChange, data }) {
  const studjiniSkupinaSet = new Set(data.map((student) => student.studjini_skupina));
  const uniqueStudjiniSkupina = Array.from(studjiniSkupinaSet);

  const handleChange = (event) => {
    onBranchChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="combo-box">Studijní skupina:</label>
      <select className="form-select" id="combo-box" value={value} onChange={handleChange}>
        {uniqueStudjiniSkupina.map((studjiniSkupina) => (
          <option key={studjiniSkupina} value={studjiniSkupina}>
            {studjiniSkupina}
          </option>
        ))}
      </select>
    </div>
  );
}