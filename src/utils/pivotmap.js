const pivotmap = (a, f) => {
    let result = {};
    if (a instanceof Array) {
      a.forEach((i) => {
        let [key, value] = f(i);
        if (key in result) {
          result[key].push(value);
        } else {
          result[key] = [value];
        }
      });
    } else {
      console.log("Parametr a v pivotmap je prazdny/neni array");
    }
    
    return result;
  };

  export default pivotmap;