import SymbolsModule from "store/modules/symbols";

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

describe("store > symbols > getters.test", () => {
  let symbolsGetters, symbolState;

  beforeAll(() => {
    symbolsGetters = SymbolsModule.getters;
    symbolState = SymbolsModule.state;
    symbolState.all.data = symbolsMock;
    symbolState.all.filtered = [symbolsMock[0], symbolsMock[1]];
    symbolState.detail.data = detailMock;
  });

  it("allSymbols return array of symbols", () => {
    const result = symbolsGetters.allSymbols(symbolState);
    expect(result).toEqual(symbolsMock);
  });

  it("filteredSymbols return array of symbols", () => {
    const result = symbolsGetters.filteredSymbols(symbolState);
    expect(result.length).toEqual(2);
  });

  it("getSymbol return function", () => {
    const fn = symbolsGetters.getSymbol(symbolState);
    expect(typeof fn).toEqual("function");
  });

  it("getSymbol get symbol", () => {
    const fn = symbolsGetters.getSymbol(symbolState);
    const result = fn(symbolState.all.data[0].id);
    expect(result).toEqual(symbolsMock[0]);
  });

  it("getSymbolComments return function", () => {
    const fn = symbolsGetters.getSymbolComments(symbolState);
    expect(typeof fn).toEqual("function");
  });

  it("getSymbolComments get array of comments", () => {
    symbolState.all.data[0].comments = [commentMock];
    const fn = symbolsGetters.getSymbolComments(symbolState);
    const result = fn(symbolState.all.data[0].id);
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual(commentMock.id);
  });

  it("isLoadingDetailSymbol is false", () => {
    const result = symbolsGetters.isLoadingDetailSymbol(symbolState);
    expect(result).toBeFalsy();
  });

  it("detailSymbol get detail", () => {
    const result = symbolsGetters.detailSymbol(symbolState);
    expect(result).toEqual(detailMock);
  });
});
