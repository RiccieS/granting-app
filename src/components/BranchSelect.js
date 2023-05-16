import React, { useState } from 'react';
import BranchGradeTable from './BranchGradeTable';

export default function BranchSelect({ value, onBranchChange, data, grades_data }) {
  //Vytvoření Setu unikátních hodnot dle atributu "studijní_skupina" z "data"
  const studjiniSkupinaSet = new Set(data.map((student) => student.studjini_skupina));
  //Konverze setu na pole
  const uniqueStudjiniSkupina = Array.from(studjiniSkupinaSet);
  // Definice state "selectedStudjiniSkupina" a funkce pro změnu stavu "setSelectedStudjiniSkupina"
  const [selectedStudjiniSkupina, setSelectedStudjiniSkupina] = useState(uniqueStudjiniSkupina[0]);

  // Funkce pro změnu hodnoty comboBoxu
  const handleChange = (event) => {
    const newValue = event.target.value;
    // Nastavení nové hodnoty state
    setSelectedStudjiniSkupina(newValue);
    //Volánífunkci "onBranchChange" s novou hodnotou jako parametrem
    onBranchChange(newValue);
  };

  // Vykreslení komponenty
  return (
    <div>
      <label htmlFor="branch-select">Studijní skupina:</label>
      {/* Vytvoření comoboBoxu s nazvy skupin */}
      <select className="form-select" id="branch-select" value={selectedStudjiniSkupina} onChange={handleChange}>
        {uniqueStudjiniSkupina.map((studjiniSkupina) => (
          <option key={studjiniSkupina} value={studjiniSkupina}>
            {studjiniSkupina}
          </option>
        ))}
      </select>
      {/* Vykreslení komponenty "BranchGradeTable"*/}
      <BranchGradeTable data={data} grades_data={grades_data} studjiniSkupina={selectedStudjiniSkupina} />
    </div>
  );
}