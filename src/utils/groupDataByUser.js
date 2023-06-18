export const groupDataByUser = (inputData) => {
  return inputData.reduce((acc, entry, index) => {
    const sortedClassifications = entry.classifications.sort((a, b) => a.order - b.order);
    if (acc[index]) {
      acc[index] = acc[index].concat(sortedClassifications);
    } else {
      acc[index] = sortedClassifications;
    }
    return acc;
  }, [])
    .sort((a, b) => a[0].order - b[0].order);
};

export default groupDataByUser;
