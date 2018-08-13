export default {
  allSymbols(state) {
    return state.all.data;
  },
  filteredSymbols(state) {
    return state.all.filtered;
  },
  getSymbol(state) {
    return id => state.all.data.find(symbol => symbol.id === id);
  },
  getSymbolComments(state) {
    return id => state.all.data.find(symbol => symbol.id === id).comments;
  },
  isLoadingDetailSymbol(state) {
    return state.detail.processing;
  },
  detailSymbol(state) {
    return state.detail.data;
  }
};
