/**
 * Funkce pro vytvoření přehledu počtů známek pro každou skupinu.
 * @param {Array} data - Vstupní data obsahující informace o známkách a jménech skupin
 * @returns {Object} Přehled počtů známek pro každou skupinu
 */
const createLevelsOverview = data => {
  // Inicializace objektu pro ukládání počtů známek pro každou skupinu
  const levelsOverview = {};

  // Iterace přes data a počítání známek pro každé jméno skupiny
  data.forEach(item => {
    const groupName = item.groupName;
    const levelName = item.levelName;
    if (!levelsOverview[groupName]) {
      // Pokud jméno skupiny neexistuje v přehledu známek, inicializuje se
      levelsOverview[groupName] = {
        countOfA: 0,
        countOfB: 0,
        countOfC: 0,
        countOfD: 0,
        countOfE: 0,
        countOfF: 0
      };
    }

    // Inkrementace počtu pro odpovídající známku
    levelsOverview[groupName]['countOf' + levelName]++;
  });
  return levelsOverview;
};
export default createLevelsOverview;