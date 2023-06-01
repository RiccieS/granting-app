const keyedmap = (a, f) => {
    let result = {};
    a.forEach((i) => {
      let [key, value] = f(i);
      result[key] = value;
    });
    return result;
  };