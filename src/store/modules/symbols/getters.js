export default {
  allSymbols(state) {
    return state.all.data;
  },
  isLoadingDetailSymbol(state) {
    return state.detail.processing;
  },
  detailSymbol(state) {
    return state.detail.data;
  }
};
