const keyedmap = (a, f) => {
  let result = {};
  if (a instanceof Array) { // Pokud je 'a' instancí pole
    a.forEach((i) => {
      let [key, value] = f(i); // APlikue funkci 'f' na každý prvek pole 'a' a destrukturováním získávejte klíč a hodnotu
      result[key] = value; // Přiřadí klíč a hodnotu do výsledného objektu
    });
  } else {
    console.log("Parametr a v keyedmap je prázdný/nebyl pole"); // Vypíše chybovou zprávu, pokud 'a' není pole
  }
  
  return result; // Vrátí výsledek
};

export default keyedmap;
