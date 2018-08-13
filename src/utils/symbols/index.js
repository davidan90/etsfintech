export const symbols = {
  getAllValuesByAttribute(arrayOfSymbols, attribute) {
    if (!attribute || !arrayOfSymbols) {
      return;
    }

    let allValues = [];
    arrayOfSymbols.forEach(symbol => {
      const data = symbol[attribute];
      if (allValues.indexOf(data) < 0) {
        allValues.push(data);
      }
    });

    return allValues;
  }
};
