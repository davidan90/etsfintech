import {
  PROCESSING_ALL_SYMBOLS,
  GET_ALL_SYMBOLS,
  PROCESSING_DETAIL_SYMBOL,
  GET_DETAIL_SYMBOL,
  ADD_COMMENT_TO_SYMBOL,
  REMOVE_COMMENT_FROM_SYMBOL
} from "./mutation-types";

export default {
  [PROCESSING_ALL_SYMBOLS](state) {
    state.all.processing = true;
  },
  [GET_ALL_SYMBOLS](state, { symbols }) {
    state.all.processing = false;
    state.all.data = symbols;
  },
  [PROCESSING_DETAIL_SYMBOL](state) {
    state.detail.processing = true;
  },
  [GET_DETAIL_SYMBOL](state, { detail }) {
    state.detail.processing = false;
    state.detail.data = detail;
  },
  [ADD_COMMENT_TO_SYMBOL](state, { symbolId, comment }) {
    state.all.data = state.all.data.map(symbol => {
      if (symbol.id === symbolId) {
        if (symbol.comments) {
          symbol.comments.push(comment);
        } else {
          symbol.comments = [comment];
        }
      }
      return symbol;
    });
  },
  [REMOVE_COMMENT_FROM_SYMBOL](state, { symbolId, commentId }) {
    state.all.data = state.all.data.map(symbol => {
      if (symbol.id === symbolId) {
        const commentIds = symbol.comments.map(comment => comment.id);
        symbol.comments.splice(commentIds.indexOf(commentId), 1);
      }
      return symbol;
    });
  }
};
