/**
 * Funkce pro vytvoření mapy s pivotovým uspořádáním hodnot na základě pole.
 * @param {Array} a - Vstupní pole.
 * @param {Function} f - Funkce aplikovaná na každý prvek pole pro získání klíče a hodnoty.
 * @returns {Object} - Výsledná mapa s pivotovým uspořádáním hodnot.
 */
const pivotmap = (a, f) => {
  let result = {};
  if (a instanceof Array) { // Pokud je 'a' instancí pole
    a.forEach((i) => {
      let [key, value] = f(i); // Aplikuj funkci 'f' na každý prvek pole 'a' a destrukturováním získá klíč a hodnotu
      if (key in result) { // Pokud klíč již existuje v 'result'
        result[key].push(value); // Přidej hodnotu do existujícího pole
      } else {
        result[key] = [value]; // Vytvoří nový klíč a přidá hodnotu do nového pole
      }
    });
  } else {
    console.log("Parametr a v pivotmap je prázdný/nebyl pole"); // Vypíše chybovou zprávu, pokud 'a' není pole
  }

  return result; // Vrátí výsledek
};

export default pivotmap;
