export const groupDataByUser = (inputData) => {
  return inputData.reduce((acc, entry, index) => {
    const sortedClassifications = entry.classifications.sort((a, b) => a.order - b.order);
    if (acc[index]) { // Pokud existuje pole v 'acc' na daném indexu
      acc[index] = acc[index].concat(sortedClassifications); // Přidá seřazené klasifikace do existujícího pole
    } else {
      acc[index] = sortedClassifications; // Vytvoří nové pole s seřazenými klasifikacemi
    }
    return acc; // Vrátí akumulátor
  }, [])
    .sort((a, b) => a[0].order - b[0].order); // Seřadí výsledná pole podle hodnoty order první klasifikace
};

export default groupDataByUser;
