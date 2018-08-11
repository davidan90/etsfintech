import {
  PROCESSING_ALL_SYMBOLS,
  GET_ALL_SYMBOLS,
  PROCESSING_DETAIL_SYMBOL,
  GET_DETAIL_SYMBOL
} from "./mutation-types";

export default {
  [PROCESSING_ALL_SYMBOLS](state) {
    state.all.processing = true;
  },
  [GET_ALL_SYMBOLS](state, payload) {
    state.all.processing = false;
    state.all.data = payload.symbols;
  },
  [PROCESSING_DETAIL_SYMBOL](state) {
    state.detail.processing = true;
  },
  [GET_DETAIL_SYMBOL](state, payload) {
    state.detail.processing = false;
    state.detail.data = payload.detail;
  }
};
