import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UpdateUserClassification } from '../utils/UpdateUserClassification';

/**
 * Komponenta pro výběr klasifikace uživatele.
 * @param {Object} props - Vstupní vlastnosti komponenty
 * @param {Object} props.classification - Klasifikace uživatele
 * @param {Array} props.levels - Pole dostupných úrovní klasifikace
 * @returns {JSX.Element} Element komponenty UserSetClassificationSelect
 */
export const UserSetClassificationSelect = ({ classification, levels }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Prázdné pole závislostí, spustí se pouze jednou při načtení komponenty
  }, []);

  /**
   * Funkce pro zpracování změny úrovně klasifikace.
   * @param {Object} event - Událost změny hodnoty výběru
   */
  const handleLevelChange = async (event) => {
    const selectedLevel = event.target.value;
    const newLevel = levels.find(level => level.id === selectedLevel);
    if (newLevel) {
      try {
        await dispatch(UpdateUserClassification(classification, newLevel, dispatch));
      } catch (error) {
        // Zpracování případné chyby, která nastala během asynchronní operace
        console.log(error);
      }
    }
  };

  return (
    <select className='form-control' onChange={handleLevelChange}>
      <option value=''>Vyberte úroveň</option>
      {levels.map(level => (
        <option key={level.id} value={level.id}>{level.name}</option>
      ))}
    </select>
  );
};

export default UserSetClassificationSelect;
