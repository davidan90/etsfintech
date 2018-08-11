export const recursion = {
  nestedLevels(data, atribute, result, level) {
    const key = `${atribute}_level${level}`;
    if (!data[key]) {
      return result;
    }
    return (
      result +
      this.nestedLevels(data[key], atribute, ` / ${data[key].name}`, ++level)
    );
  }
};
