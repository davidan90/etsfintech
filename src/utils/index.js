import Vue from "vue";

Vue.mixin({
  beforeCreate() {
    const options = this.$options;
    if (options.utils) {
      this.$utils = options.utils;
    } else if (options.parent && options.parent.$utils) {
      this.$utils = options.parent.$utils;
    }
  }
});

export default function() {
  return {
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
    },

    getIndexCircleArray(array, newIndex) {
      return newIndex >= 0
        ? newIndex > array.length - 1
          ? 0
          : newIndex
        : array.length - 1;
    },

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
}
