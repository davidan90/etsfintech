import AppModule from "store/modules/app";

describe("store > app > mutations.test", () => {
  let appMutations, appState;

  beforeAll(() => {
    appMutations = AppModule.mutations;
    appState = AppModule.state;
  });

  it("SHOW_ASIDE", () => {
    appMutations.SHOW_ASIDE(appState);
    expect(appState.aside.show).toBeTruthy();
  });

  it("HIDE_ASIDE", () => {
    appMutations.HIDE_ASIDE(appState);
    expect(appState.aside.show).toBeFalsy();
  });
});
