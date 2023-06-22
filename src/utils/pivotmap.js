const pivotmap = (a, f) => {
  let result = {};
  if (a instanceof Array) { // Pokud je 'a' instancí pole
    a.forEach((i) => {
      let [key, value] = f(i); // Aplikuj funkci 'f' na každý prvek pole 'a' a destrukturováním získávejte klíč a hodnotu
      if (key in result) { // Pokud klíč již existuje v 'result'
        result[key].push(value); // Přidá hodnotu do existujícího pole
      } else {
        result[key] = [value]; // Vytvoří nový klíč a přidejte hodnotu do nového pole
      }
    });
  } else {
    console.log("Parametr a v pivotmap je prázdný/nebyl pole"); // Vypíše chybovou zprávu, pokud 'a' není pole
  }
  
  return result; // Vrátí výsledek
};

export default pivotmap;
