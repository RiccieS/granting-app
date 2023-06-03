const keyedmap = (a, f) => {
    let result = {};
    if (a instanceof Array) {
      a.forEach((i) => {
        let [key, value] = f(i);
        result[key] = value;
      });
    } else {
      console.log("Parametr a v keyedmap je prazdny/neni array");
    }
    
    return result;
  };

  export default keyedmap;
  //