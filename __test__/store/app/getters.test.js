import AppModule from "store/modules/app";

describe("store > app > getters.test", () => {
  let appGetters, appState;

  beforeAll(() => {
    appGetters = AppModule.getters;
    appState = AppModule.state;
  });

  it("isAsideShow equal false", () => {
    const result = appGetters.isAsideShow(appState);
    expect(result).toBeFalsy();
  });

  it("isAsideShow equal true", () => {
    appState.aside.show = true;
    const result = appGetters.isAsideShow(appState);
    expect(result).toBeTruthy();
  });
});
