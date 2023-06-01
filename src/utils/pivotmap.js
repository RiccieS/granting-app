const pivotmap = (a, f) => {
    let result = {};
    a.forEach((i) => {
      let [key, value] = f(i);
      if (key in result) {
        result[key].push(value);
      } else {
        result[key] = [value];
      }
    });
    return result;
  };

  export default pivotmap;