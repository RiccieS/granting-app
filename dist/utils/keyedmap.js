/**
 * Funkce pro vytvoření mapy s klíči a hodnotami na základě pole.
 * @param {Array} a - Vstupní pole.
 * @param {Function} f - Funkce aplikovaná na každý prvek pole pro získání klíče a hodnoty.
 * @returns {Object} - Výsledná mapa s klíči a hodnotami.
 */
const keyedmap = (a, f) => {
  let result = {};
  if (a instanceof Array) {
    // Pokud je 'a' instancí pole
    a.forEach(i => {
      let [key, value] = f(i); // Aplikuje funkci 'f' na každý prvek pole 'a' a destrukturováním získá klíč a hodnotu
      result[key] = value; // Přiřadí klíč a hodnotu do výsledného objektu
    });
  } else {
    console.log("Parametr a v keyedmap je prázdný/nebyl pole"); // Vypíše chybovou zprávu, pokud 'a' není pole
  }

  return result; // Vrátí výsledek
};

export default keyedmap;