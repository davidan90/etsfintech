import SymbolModule from "store/modules/symbols";

const symbolsMock = [
  {
    id: 42736,
    name: "Allianz Fondsvorsorge 1977-1996 A Acc",
    currency: "EUR",
    risk_family: "Balanced"
  },
  {
    id: 62509,
    name: "Henderson Horizon Pan European Property Equities Fund A2 Acc",
    currency: "JPY",
    risk_family: "Equity"
  },
  {
    id: 90690,
    name: "Janus Global Life Sciences Fund I (acc.) Acc",
    currency: "USD",
    risk_family: "Equity"
  }
];

const detailMock = {
  id: 47868,
  name: "Invesco Pan European Structured Equity Fund A Acc",
  isin: "LU0119750205",
  currency: {},
  symbol_type: "FundClass",
  region: {},
  sector: {},
  risk_family: {},
  issuer: {},
  is_hedged: false,
  fund: {},
  prices: []
};

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

describe("store > symbols > mutations.test", () => {
  let symbolMutations, symbolState;

  beforeAll(() => {
    symbolMutations = SymbolModule.mutations;
    symbolState = SymbolModule.state;
  });

  it("PROCESSING_ALL_SYMBOLS", () => {
    symbolMutations.PROCESSING_ALL_SYMBOLS(symbolState);
    expect(symbolState.all.processing).toBeTruthy();
  });

  it("GET_ALL_SYMBOLS with symbols", () => {
    symbolMutations.GET_ALL_SYMBOLS(symbolState, { symbols: symbolsMock });
    expect(symbolState.detail.processing).toBeFalsy();
    expect(symbolState.all.data.length).toEqual(3);
    expect(symbolState.all.filtered.length).toEqual(3);
  });

  it("GET_ALL_SYMBOLS without symbols", () => {
    symbolMutations.GET_ALL_SYMBOLS(symbolState, {});
    expect(symbolState.detail.processing).toBeFalsy();
    expect(symbolState.all.data).toBeUndefined();
    expect(symbolState.all.filtered).toBeUndefined();
  });

  it("PROCESSING_DETAIL_SYMBOL", () => {
    symbolMutations.PROCESSING_DETAIL_SYMBOL(symbolState);
    expect(symbolState.detail.processing).toBeTruthy();
  });

  it("GET_DETAIL_SYMBOL", () => {
    symbolMutations.GET_DETAIL_SYMBOL(symbolState, { detail: detailMock });
    expect(symbolState.detail.processing).toBeFalsy();
    expect(symbolState.detail.data).toBe(detailMock);
  });

  it("ADD_COMMENT_TO_SYMBOL", () => {
    const indexOfSymbol = 0;
    symbolState.all.data = symbolsMock;
    symbolMutations.ADD_COMMENT_TO_SYMBOL(symbolState, {
      symbolId: symbolsMock[indexOfSymbol].id,
      comment: commentMock
    });
    expect(symbolState.all.data[indexOfSymbol].comments).toBeDefined();
    expect(symbolState.all.data[indexOfSymbol].comments.length).toEqual(1);
    expect(symbolState.all.data).toEqual(symbolState.all.filtered);
  });

  it("UPDATE_COMMENT_FROM_SYMBOL", () => {
    const indexOfSymbol = 0;
    const text = "updated comment";
    const newcomment = Object.assign({}, commentMock, { text });
    symbolMutations.UPDATE_COMMENT_FROM_SYMBOL(symbolState, {
      symbolId: symbolsMock[indexOfSymbol].id,
      updatedComment: newcomment
    });
    expect(symbolState.all.data[indexOfSymbol].comments[0].text).toBe(text);
    expect(symbolState.all.data).toEqual(symbolState.all.filtered);
  });

  it("REMOVE_COMMENT_FROM_SYMBOL", () => {
    const indexOfSymbol = 0;
    symbolMutations.REMOVE_COMMENT_FROM_SYMBOL(symbolState, {
      symbolId: symbolsMock[indexOfSymbol].id,
      commentId: commentMock.id
    });
    expect(symbolState.all.data[indexOfSymbol].comments[0]).toBeUndefined();
    expect(symbolState.all.data).toEqual(symbolState.all.filtered);
  });

  it("FILTER_All_SYMBOLS", () => {
    symbolMutations.FILTER_All_SYMBOLS(symbolState, filterMock);
    expect(symbolState.all.filtered.length).toEqual(1);
    filterMock.isAdd = false;
    symbolMutations.FILTER_All_SYMBOLS(symbolState, filterMock);
    expect(symbolState.all.filtered.length).toEqual(symbolsMock.length);
  });

  it("RESET_FILTERS", () => {
    symbolMutations.RESET_FILTERS(symbolState);
    expect(symbolState.all.filtered.length).toEqual(symbolsMock.length);
  });
});
