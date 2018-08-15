import SymbolModule from "store/modules/symbols";
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
} from "store/modules/symbols/mutation-types";
import symbolsApi from "api/symbols";
global.fetch = require("node-fetch");

const id = 9756;
const commentMock = {
  id: "_7dg27d8",
  date: "15/8/2018 10:02:39",
  text: "example of comment"
};

const filterMock = {
  type: "currency",
  value: "USD",
  isAdd: true
};

describe("store > symbols > actions.test", () => {
  let symbolActions;

  beforeAll(() => {
    symbolActions = SymbolModule.actions;
  });

  it("getAllSymbols", async () => {
    await symbolsApi.getAll().then(async data => {
      const commit = jest.fn();
      expect(data).toBeDefined();
      await symbolActions.getAllSymbols({ commit });
      expect(commit).toHaveBeenCalledWith(PROCESSING_ALL_SYMBOLS);
      symbolActions.getAllSymbols({ commit });
      expect(commit).toHaveBeenCalledWith(GET_ALL_SYMBOLS, {
        symbols: data
      });
    });
  });

  it("getDetailSymbol", async () => {
    await symbolsApi.getDetail(id).then(async data => {
      const commit = jest.fn();
      expect(data).toBeDefined();
      await symbolActions.getDetailSymbol({ commit }, { id });
      expect(commit).toHaveBeenCalledWith(PROCESSING_DETAIL_SYMBOL);
      symbolActions.getDetailSymbol({ commit }, { id });
      expect(commit).toHaveBeenCalledWith(GET_DETAIL_SYMBOL, {
        detail: data
      });
    });
  });

  it("filterAllSymbols", () => {
    const commit = jest.fn();
    symbolActions.filterAllSymbols({ commit }, {});
    expect(commit).not.toHaveBeenCalled();
    symbolActions.filterAllSymbols({ commit }, filterMock);
    expect(commit).toHaveBeenCalledWith(FILTER_All_SYMBOLS, filterMock);
  });

  it("resetFilters", () => {
    const commit = jest.fn();
    symbolActions.resetFilters({ commit });
    expect(commit).toHaveBeenCalledWith(RESET_FILTERS);
  });

  it("addComment", () => {
    const payload = { symbolId: id, comment: commentMock };
    const commit = jest.fn();
    symbolActions.addComment({ commit }, {});
    expect(commit).not.toHaveBeenCalled();
    symbolActions.addComment({ commit }, payload);
    expect(commit).toHaveBeenCalledWith(ADD_COMMENT_TO_SYMBOL, payload);
  });

  it("updateComment", () => {
    const payload = { symbolId: id, updatedComment: commentMock };
    const commit = jest.fn();
    symbolActions.updateComment({ commit }, {});
    expect(commit).not.toHaveBeenCalled();
    symbolActions.updateComment({ commit }, payload);
    expect(commit).toHaveBeenCalledWith(UPDATE_COMMENT_FROM_SYMBOL, payload);
  });

  it("removeComment", () => {
    const payload = { symbolId: id, commentId: commentMock.id };
    const commit = jest.fn();
    symbolActions.removeComment({ commit }, {});
    expect(commit).not.toHaveBeenCalled();
    symbolActions.removeComment({ commit }, payload);
    expect(commit).toHaveBeenCalledWith(REMOVE_COMMENT_FROM_SYMBOL, payload);
  });
});
