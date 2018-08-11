import { symbols } from "api/symbols";
import {
  PROCESSING_ALL_SYMBOLS,
  GET_ALL_SYMBOLS,
  PROCESSING_DETAIL_SYMBOL,
  GET_DETAIL_SYMBOL
} from "./mutation-types";

export default {
  async getAllSymbols({ commit }) {
    commit(PROCESSING_ALL_SYMBOLS);
    const allSymbols = await symbols.getAll();
    if (allSymbols) {
      commit(GET_ALL_SYMBOLS, {
        symbols: allSymbols
      });
    }
  },

  async getDetailSymbol({ commit }, { id }) {
    commit(PROCESSING_DETAIL_SYMBOL);
    const detail = await symbols.getDetail(id);
    if (detail) {
      commit(GET_DETAIL_SYMBOL, {
        detail
      });
    }
  }
};
