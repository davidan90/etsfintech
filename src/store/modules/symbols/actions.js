import symbols from "api/symbols";
import {
  PROCESSING_ALL_SYMBOLS,
  GET_ALL_SYMBOLS,
  PROCESSING_DETAIL_SYMBOL,
  GET_DETAIL_SYMBOL,
  ADD_COMMENT_TO_SYMBOL,
  REMOVE_COMMENT_FROM_SYMBOL,
  UPDATE_COMMENT_FROM_SYMBOL,
  FILTER_All_SYMBOLS,
  RESET_FILTERS
} from "./mutation-types";

export default {
  async getAllSymbols({ commit }) {
    commit(PROCESSING_ALL_SYMBOLS);
    let allSymbols = await symbols.getAll();
    if (allSymbols) {
      commit(GET_ALL_SYMBOLS, {
        symbols: mergeWitLocalComments(allSymbols)
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
  },

  filterAllSymbols({ commit }, { type, isAdd, value }) {
    if (type && value) {
      commit(FILTER_All_SYMBOLS, {
        type,
        isAdd,
        value
      });
    }
  },

  resetFilters({ commit }) {
    commit(RESET_FILTERS);
  },

  addComment({ commit }, { symbolId, comment }) {
    if (symbolId && comment) {
      commit(ADD_COMMENT_TO_SYMBOL, {
        symbolId,
        comment
      });
    }
  },

  removeComment({ commit }, { symbolId, commentId }) {
    if (symbolId && commentId) {
      commit(REMOVE_COMMENT_FROM_SYMBOL, {
        symbolId,
        commentId
      });
    }
  },

  updateComment({ commit }, { symbolId, updatedComment }) {
    if (symbolId && updatedComment) {
      commit(UPDATE_COMMENT_FROM_SYMBOL, {
        symbolId,
        updatedComment
      });
    }
  }
};

const mergeWitLocalComments = symbols => {
  const comments = JSON.parse(localStorage.getItem("comments"));
  const symbolsWithComments = comments
    ? Object.keys(comments).map(id => parseInt(id, 10))
    : null;

  return symbolsWithComments && symbolsWithComments.length
    ? symbols.map(symbol => {
        if (symbolsWithComments.indexOf(symbol.id) >= 0) {
          symbol.comments = comments[symbol.id];
        }
        return symbol;
      })
    : symbols;
};
